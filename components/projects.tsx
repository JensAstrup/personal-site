import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Spades",
    description: "A pointing poker application built to integrate seamlessly with Linear to provide teams with an easy way to foster discussion and easily set effort estimations.",
    link: "https://spades.poker",
  },
  {
    name: "Shortcut Assistant",
    description: "(Not in active development) A Chrome extension for power users of Shortcut, a project management tool. Offers AI analysis of task implementation plans, keyboard shortcuts, and integrated cycle/development time stats. ",
    link: "https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef",
  },
  {
    name: "PyOutlook",
    description: "A Python wrapper for the Outlook REST API that enables retrieving and sending emails in a Pythonic manner.",
    link: "https://github.com/JensAstrup/pyOutlook",
  },
  {
    name: "GBx",
    description: "A harm reduction iOS app",
    link: "https://apps.apple.com/us/app/gbx/id6749517571",
  },
]

export function Projects() {
  return (
    <section id="projects" className="flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl text-white mb-12 tracking-tight font-medium">Projects</h2>
          <div className="grid gap-8 md:gap-12">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.link}
                className="group block border-b border-white/10 pb-8 last:border-0 transition-all hover:border-white/30"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
