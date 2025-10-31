export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-end gap-8">
        <a href="#projects" className="text-white font-medium hover:text-white/70 transition-colors text-lg">
          Projects
        </a>
        <a
          href="https://startupdeveloper.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium hover:text-white/70 transition-colors text-lg"
        >
          Substack
        </a>
        <a
          href="https://www.linkedin.com/in/jensastrup/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-medium hover:text-white/70 transition-colors text-lg"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  )
}
