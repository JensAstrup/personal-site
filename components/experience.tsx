import { ReactNode } from 'react'


const roles = [
  {
    title: 'Staff Software Engineer',
    period: '2025 - Present',
    company: 'Wellthy, NYC',
    highlights: [
      'Spearheading the foundation for AI feature development across the organization',
      'Led evaluation and implementation of LLM monitoring services with measurable success criteria',
      'Built first AI features including message enhancement for Care Team communications and receipt analysis for fraud detection',
    ],
  },
  {
    title: 'Engineering Manager / Tech Lead',
    period: '2022 - 2025',
    company: 'Wellthy, NYC',
    highlights: [
      'Led a team of 4 engineers across frontend, backend, and devops, achieving the lowest cycle time with consistent velocity',
      'Adopted a player/coach methodology, increasing personal productivity threefold and doubling overall team efficiency',
      'Managed project timelines and developed a strategic roadmap for team objectives',
    ],
  },
  {
    title: 'Technical Lead',
    period: '2021 - 2022',
    company: 'Wellthy, NYC',
    highlights: [
      'Directed a team of 5 developers and managed 4 international contractors',
      'Owned production releases, reviewing all code for bugs and security vulnerabilities',
      'Led performance improvements that reduced page load times by 28-90%',
    ],
  },
  {
    title: 'Senior Backend Developer',
    period: '2018 - 2021',
    company: 'Wellthy, NYC',
    highlights: [
      'Implemented a GraphQL API for a React Native mobile client with push notification support',
      'Built an asynchronous task queue with Celery and Redis',
      'Migrated the entire authentication system from Django to Auth0 while maintaining sliding sessions',
      'Transitioned the full codebase from Python 2 to Python 3',
    ],
  },
]

function RoleCard({ title, period, company, highlights }: (typeof roles)[number]): ReactNode {
  return (
    <div className="group">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className="text-sm text-white/50 font-mono shrink-0">{period}</span>
      </div>
      <p className="text-white/60 text-sm mb-3">{company}</p>
      <ul className="space-y-1.5">
        {highlights.map((highlight) => (
          <li key={highlight} className="text-white/80 text-base leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-white/40">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Experience(): ReactNode {
  return (
    <section id="experience" className="flex items-center justify-center px-6 py-6 pt-4">
      <div className="max-w-3xl w-full">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Experience</h2>
          <div className="space-y-8">
            {roles.map((role) => (
              <RoleCard key={`${role.company}-${role.period}`} {...role} />
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-sm text-white/50">
              <span className="font-medium text-white/70">Tools & Frameworks:</span>{' '}
              Python, Django, TypeScript/JavaScript, Node.js, React, Next.js, GraphQL, REST APIs, Chrome Extensions
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20" />
      </div>
    </section>
  )
}

export { Experience }
