import React from 'react'

import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'


function Home(): React.ReactNode {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adrien-olichon-RCAhiGJsUUE-unsplash-UfZhZodQogRXMCEMrYnfHSQ6JFgNBQ.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  )
}

export default Home
