import { NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiter per IP
type RateRecord = { count: number; first: number }
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute
const RATE_LIMIT_MAX = 10
const rateMap: Map<string, RateRecord> = new Map()

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(30)
    .regex(/^[+\d\s().-]{7,}$/),
  company: z.string().trim().min(2).max(150),
  service: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(4000),
  budget: z.string().trim().max(100).optional().or(z.literal('')),
  timeline: z.string().trim().max(100).optional().or(z.literal('')),
  // Honeypot: should be empty
  website: z.string().max(0).optional().or(z.literal('')),
})

function stripTags(input: string): string {
  // Remove HTML tags and collapse whitespace
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function sanitizePayload<T extends Record<string, unknown>>(payload: T): T {
  const out: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(payload)) {
    if (typeof value === 'string') {
      out[key] = stripTags(value)
    } else {
      out[key] = value
    }
  }
  return out as T
}

function getIp(request: Request): string {
  const xf = request.headers.get('x-forwarded-for') || ''
  if (xf) return xf.split(',')[0].trim()
  // @ts-ignore - Next.js adds ip in some runtimes
  return (request as any).ip || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const rec = rateMap.get(ip)
  if (!rec) {
    rateMap.set(ip, { count: 1, first: now })
    return false
  }
  if (now - rec.first > RATE_LIMIT_WINDOW_MS) {
    rateMap.set(ip, { count: 1, first: now })
    return false
  }
  rec.count += 1
  if (rec.count > RATE_LIMIT_MAX) return true
  return false
}

export async function POST(request: Request) {
  const ip = getIp(request)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again shortly.' },
      { status: 429 }
    )
  }

  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON payload' },
      { status: 400 }
    )
  }

  // Sanitize first then validate
  const sanitized = sanitizePayload(json as Record<string, unknown>)
  const parsed = contactSchema.safeParse(sanitized)
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'Validation failed', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const data = parsed.data

  // Basic spam mitigation: reject links in message
  if (/https?:\/\//i.test(data.message)) {
    return NextResponse.json(
      { success: false, error: 'Links are not allowed in the message.' },
      { status: 400 }
    )
  }

  // Email sending via SMTP (configure env vars)
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.MAIL_FROM || (user ? `${user}` : '')
  const to = process.env.MAIL_TO || user || ''

  if (!host || !user || !pass || !from || !to) {
    return NextResponse.json(
      { success: false, error: 'Email is not configured on the server.' },
      { status: 500 }
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const subject = `New Contact Inquiry — ${data.service} — ${data.company}`
  const escaped = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h2 style="margin:0 0 12px 0;color:#0f172a">New Contact Submission</h2>
      <p><strong>Name:</strong> ${escaped(data.name)}</p>
      <p><strong>Email:</strong> ${escaped(data.email)}</p>
      <p><strong>Phone:</strong> ${escaped(data.phone)}</p>
      <p><strong>Company:</strong> ${escaped(data.company)}</p>
      <p><strong>Service:</strong> ${escaped(data.service)}</p>
      ${data.budget ? `<p><strong>Budget:</strong> ${escaped(data.budget)}</p>` : ''}
      ${data.timeline ? `<p><strong>Timeline:</strong> ${escaped(data.timeline)}</p>` : ''}
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
      <p style="white-space:pre-wrap">${escaped(data.message)}</p>
    </div>
  `

  const text = `New Contact Submission\n\n`+
    `Name: ${data.name}\n`+
    `Email: ${data.email}\n`+
    `Phone: ${data.phone}\n`+
    `Company: ${data.company}\n`+
    `Service: ${data.service}\n`+
    (data.budget ? `Budget: ${data.budget}\n` : '')+
    (data.timeline ? `Timeline: ${data.timeline}\n` : '')+
    `\nMessage:\n${data.message}\n`

  try {
    await transporter.sendMail({ from, to, subject, html, text })
  } catch (e) {
    return NextResponse.json(
      { success: false, error: 'Failed to send email. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true })
}


