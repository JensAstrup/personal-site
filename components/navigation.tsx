import React from 'react'


function Navigation(): React.JSX.Element {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-4 sm:px-6 sm:py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-end gap-x-3 gap-y-2 sm:gap-x-6 md:gap-8">
        <a
          href="#experience"
          className="text-white text-sm font-medium hover:text-white/70 transition-colors sm:text-base md:text-lg"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-white text-sm font-medium hover:text-white/70 transition-colors sm:text-base md:text-lg"
        >
          Projects
        </a>
        <a
          href="https://startupdeveloper.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-medium hover:text-white/70 transition-colors sm:text-base md:text-lg"
        >
          Substack
        </a>
        <a
          href="https://www.linkedin.com/in/jensastrup/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-medium hover:text-white/70 transition-colors sm:text-base md:text-lg"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  )
}

export { Navigation }
