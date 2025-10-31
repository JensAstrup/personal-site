import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-6 py-6 pt-20 pb-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/images/design-mode/image.png"
                alt="Jens Astrup"
                fill
                className="object-cover rounded-full border-4 border-white/10"
                priority
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight text-balance">Jens Astrup</h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6 font-light">Fullstack Developer</p>
            <p className="text-lg text-white/70 font-light">NYC</p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20" />
      </div>
    </section>
  )
}
