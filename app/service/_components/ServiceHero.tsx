import React from 'react'

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#141212]">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Soft brown glow */}
        <div className="absolute left-1/2 top-0 h-65 w-300 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(115,65,58,0.45)_0%,rgba(80,45,40,0.22)_35%,rgba(20,18,18,0)_75%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-70 items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-white">
            Browse every pro on HomeHero
          </h1>
          <p className="mt-4 text-gray-400">
            Professional home services you can trust.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
