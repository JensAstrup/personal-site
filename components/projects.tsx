import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'


interface Project {
  name: string
  description: string
  link: string
  productHunt: {
    href: string
    imageSrc: string
    imageAlt: string
  } | null
}

const projects: Project[] = [
  {
    name: 'Spades',
    description: 'A pointing poker application built to integrate seamlessly with Linear to provide teams with an easy way to foster discussion and easily set effort estimations.',
    link: 'https://spades.poker',
    productHunt: {
      href: 'https://www.producthunt.com/products/ace-of-spades/launches/spades-2-0-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-spades-2-0-2',
      imageSrc:
        'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=954836&theme=dark&t=1773975321733',
      imageAlt: 'Spades 2.0 - Seamless Issue Estimation with Spades | Product Hunt',
    },
  },
  {
    name: 'GBx',
    description: 'A harm reduction iOS app',
    link: 'https://apps.apple.com/us/app/gbx/id6749517571',
    productHunt: {
      href: 'https://www.producthunt.com/products/gbx/launches/gbx?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-gbx',
      imageSrc:
        'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1027854&theme=dark&t=1773975385430',
      imageAlt: 'GBx - Dose Responsibly | Product Hunt',
    },
  },
  {
    name: 'Trawl',
    description: 'A VS Code extension that auto-completes package names and versions while highlighting outdated dependencies.',
    link: 'https://github.com/VoidWorksIO/trawl',
    productHunt: {
      href: 'https://www.producthunt.com/products/trawl-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-trawl-3',
      imageSrc:
        'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1102859&theme=dark&t=1773974070578',
      imageAlt:
        'Trawl - Version autocomplete and outdated warnings inside VS Code | Product Hunt',
    },
  },
  {
    name: 'Shortcut Assistant',
    description: '(Not in active development) A Chrome extension for power users of Shortcut, a project management tool. Offers AI analysis of task implementation plans, keyboard shortcuts, and integrated cycle/development time stats.',
    link: 'https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef',
    productHunt: null
  },
  {
    name: 'PyOutlook',
    description: 'A Python wrapper for the Outlook REST API that enables retrieving and sending emails in a Pythonic manner.',
    link: 'https://github.com/JensAstrup/pyOutlook',
    productHunt: null
  }
]

function Projects(): ReactNode {
  return (
    <section id="projects" className="flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl text-white mb-12 tracking-tight font-medium">Projects</h2>
          <div className="grid gap-8 md:gap-12">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group border-b border-white/10 pb-8 last:border-0 transition-all hover:border-white/30"
              >
                <a href={project.link} className="block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl text-white mb-3 group-hover:text-white/80 transition-colors font-normal">
                        {project.name}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                  </div>
                </a>
                {project.productHunt ? (
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-200">
                    <div className="overflow-hidden">
                      <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <a
                          href={project.productHunt.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <img
                            alt={project.productHunt.imageAlt}
                            width={250}
                            height={54}
                            src={project.productHunt.imageSrc}
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Projects }

