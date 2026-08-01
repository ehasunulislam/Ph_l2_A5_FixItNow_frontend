'use client'

import { Lock, Shield, RotateCcw } from 'lucide-react'

export default function Guarantee() {
  const guarantees = [
    {
      icon: Lock,
      title: 'Payment protection',
      description: 'Your payment is held by HomeHero and released only after you confirm the job is done. No paying upfront and hoping.',
    },
    {
      icon: Shield,
      title: 'The HomeHero Guarantee',
      description:
        "If the work isn't right, open a dispute within 48 hours. A real person reviews it and arranges a fix or refund.",
    },
    {
      icon: RotateCcw,
      title: 'Free re-do',
      description:
        "Clients that feel they don't get a no-cost return visit from us — or we find you someone who can finish it.",
    },
  ]

  return (
    <section className="w-full bg-[#c74040] py-16 px-4 md:py-20 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">The HomeHero Guarantee</h2>
          <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
            Book through HomeHero and the job is backed end to end. You&apos;re never alone if something goes sideways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#333333] hover:border-[#555555] transition-colors"
              >
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-lg font-semibold mb-3">{guarantee.title}</h3>
                <p className="text-white text-sm leading-relaxed opacity-90">{guarantee.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
