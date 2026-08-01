import React from 'react'

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#3a3a3a] via-[#2a2a2a] to-[#1f1f1f] flex items-center justify-center px-4">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40 pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-5">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c84444] bg-transparent hover:bg-[#c84444]/5 transition-colors">
            <div className="w-2 h-2 rounded-full bg-[#c84444]" />
            <span className="text-sm font-medium text-[#c84444]">Team & Salary</span>
          </div>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            We earn the <span className="text-[#c84444]">&quot;Hero&quot;</span> in HomeHero
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#999999] leading-relaxed max-w-2xl mx-auto">
            Trust is the whole product. Here&apos;s exactly what every pro closer before they can take a job — and what protects you from the first message to the final walkthrough.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
