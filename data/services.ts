export type Service = {
  id: string
  title: string
  summary: string
  body?: string
  features?: string[]
  images?: string[]
}

export const services: Service[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing Solutions',
    summary: 'Process optimization, quality improvements, and production planning for reliable throughput.',
    body:
      `Our manufacturing services help clients achieve world-class productivity, reduce defects, and control operational costs. We deploy lean methodologies, advanced automation, and data-driven insights to maximize output and adaptability for both greenfield and brownfield industrial projects.`,
    features: [
      'Lean process implementation',
      'Production bottleneck analysis',
      'Automated QA and reporting',
      'Flexible batch manufacturing',
      'Standard operating procedures (SOP) design',
    ],
    images: ['/images/projects/manufacturing-1.jpg', '/images/projects/manufacturing-2.jpg'],
  },
  {
    id: 'engineering',
    title: 'Engineering Services',
    summary: 'System design, technical consulting, project management, and compliance engineering.',
    body:
      `Apex Industrial provides multidisciplinary engineering solutions, covering front-end engineering design (FEED), detailed design, and constructibility reviews. Our experts integrate the latest standards and innovative tools to drive project success from concept to commissioning.`,
    features: [
      'Process, mechanical, and electrical engineering',
      'Constructibility and value engineering',
      'Codes & standards compliance',
      'Project management and controls',
      'Technical documentation and handover',
    ],
    images: ['/images/projects/engineering-1.jpg', '/images/projects/engineering-2.jpg'],
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    summary: 'PLC/SCADA, IoT integration, advanced controls and data-driven optimization.',
    body:
      `We deliver robust industrial automation, including complete PLC/SCADA programming, IoT device integration, and real-time analytics. Our solutions streamline control, boost machine reliability, and drive actionable process data to client dashboards.`,
    features: [
      'PLC/SCADA systems (Siemens, Schneider, ABB, and more)',
      'Industrial IoT sensor & device rollout',
      'Custom dashboard/reporting platform',
      'Machine learning integration',
      'Life-cycle maintenance & support',
    ],
    images: ['/images/projects/automation-1.jpg', '/images/projects/automation-2.jpg'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    summary: 'Preventive, corrective and reliability-centered maintenance maximizing uptime.',
    body:
      `Our field teams offer proactive maintenance planning and rapid repair, using predictive analytics and root-cause failure analysis to minimize downtime and extend asset life. We support both OEM and legacy systems across industrial sectors.`,
    features: [
      '24/7 rapid response',
      'Preventive maintenance program design',
      'RCA and FMEA approach for reliability',
      'Spare part inventory solutions',
      'On-site and remote troubleshooting',
    ],
    images: ['/images/projects/maintenance-1.jpg', '/images/projects/maintenance-2.jpg'],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    summary: 'Process analysis, technology roadmaps and ROI analysis to guide investments.',
    body:
      `Our consultants support leaders with unbiased advisory, process mapping, digital transformation planning, and ROI-driven feasibility studies. We combine deep industry experience with a best-practice, collaborative approach to strategic growth.`,
    features: [
      'Operational audit and process mapping',
      'Technology roadmap development',
      'Change management consulting',
      'Investment feasibility studies',
      'Training & capability building',
    ],
    images: ['/images/projects/consulting-1.jpg'],
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    summary: 'LV/MV systems, panels, cabling, earthing, lighting and testing/commissioning.',
    body:
      `We engineer and construct reliable electrical infrastructure—from distribution panels to complete plant cabling, lightning protection, and power monitoring. Clients benefit from seamless integration and certified safety testing.`,
    features: [
      'LV/MV panel assembly and testing',
      'Power distribution, cable tray installation',
      'Lighting & site electrification',
      'Grounding & lightning safety',
      'Smart metering and power quality systems',
    ],
    images: ['/images/projects/electrical-1.jpg'],
  },
  {
    id: 'mechanical',
    title: 'Mechanical Services',
    summary: 'Piping, pumps, HVAC, fire protection and plant utilities installation.',
    body:
      `Apex Industrial delivers complete mechanical installation, piping fabrication, and plant utility solutions. Our certified welding teams and QC inspectors ensure code compliance and durability on every project.`,
    features: [
      'Welding & pipe fabrication',
      'Pump and utility system installation',
      'Firefighting & safety systems',
      'QA/QC inspection & pressure tests',
      'Shutdown and retrofit services',
    ],
    images: ['/images/projects/mechanical-1.jpg', '/images/projects/mechanical-2.jpg'],
  },
  {
    id: 'trading',
    title: 'Industrial Trading',
    summary: 'Supply of MRO spares, electrical/mechanical parts and consumables.',
    body:
      `We reliably supply critical industrial products from leading brands: valves, instrumentation, safety gear, motors, pumps, and electrical components. Our procurement and logistics team enables reduced lead times and accurate traceability.`,
    features: [
      'MRO and OEM spare supply',
      'PPE and safety gear',
      'Motors, pumps, actuators',
      'Instrumentation and electrical parts',
      'Vendor qualification support',
    ],
    images: ['/images/projects/trading-1.jpg'],
  },
  {
    id: 'industrial-material',
    title: 'Industrial Materials',
    summary: 'Bulk steel, pipes, plates, cables, chemicals and packaging.',
    body:
      `Apex Industrial is a one-stop supplier for certified materials, including pipelines, steel structures, insulation, chemicals, and fasteners. Our supply chain is optimized for quick turnaround, compliance, and competitive pricing.`,
    features: [
      'Bulk steel and pipeline supply',
      'Certified cables and insulators',
      'Specialty chemicals',
      'Seals, gaskets, insulation materials',
      'Rapid logistics network',
    ],
    images: ['/images/projects/materials-1.jpg'],
  },
  {
    id: 'manpower',
    title: 'Manpower Supply',
    summary: 'Qualified engineers, technicians and certified skilled labor on demand.',
    body:
      `We provide industry-vetted, safety-trained and certified workforce for industrial, construction, and shutdown projects. From project engineers to multi-discipline technicians, our manpower supply ensures skilled, ready labor.`,
    features: [
      'Certified/experienced labor',
      'Project and site engineers',
      'On-demand/short notice mobilization',
      'Multi-trade technical staff',
      'Comprehensive medical and safety checks',
    ],
    images: ['/images/projects/manpower-1.jpg', '/images/projects/manpower-2.jpg'],
  },
  {
    id: 'equipment-rental',
    title: 'Equipment Rental',
    summary: 'Cranes, forklifts, manlifts, compressors and specialized tools.',
    body:
      `Reliable equipment rental for industrial shutdowns, construction, and transportation. Our maintained fleet and operated rentals deliver high availability and fast response when projects need it most.`,
    features: [
      'Material handlers, forklifts, cranes',
      'Mobile/manlift platforms',
      'Pumps, generators, compressors',
      'Hydraulic tools and specialty equipment',
      'Safety-certified operation',
    ],
    images: ['/images/projects/equipment-1.jpg'],
  },
  {
    id: 'contracting',
    title: 'General Contracting',
    summary: 'EPC/EPCM, brownfield tie-ins, shutdowns/turnarounds and civil works.',
    body:
      `We provide EPC/EPCM, civil, and multi-discipline works for industrial and infrastructure projects. Our approach emphasizes planning, QA/QC, and risk-managed execution—reducing surprises and maximizing ROI.`,
    features: [
      'EPC/brownfield construction',
      'Shutdown and turnaround works',
      'Civil and architectural construction',
      'QA/QC and compliance management',
      'Dedicated project controls team',
    ],
    images: ['/images/projects/contracting-1.jpg', '/images/projects/contracting-2.jpg'],
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}


