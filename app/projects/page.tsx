import { ProjectsHero } from '@/components/sections/projects-hero'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import { ProjectCategories } from '@/components/sections/project-categories'
import { CTA } from '@/components/sections/cta'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectCategories />
      <ProjectsGrid />
      <CTA />
    </div>
  )
}

