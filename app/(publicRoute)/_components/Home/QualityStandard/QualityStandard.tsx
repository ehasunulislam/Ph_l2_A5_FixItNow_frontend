'use client'

import React from 'react'
import { Shield, Star, CheckCircle, Zap } from 'lucide-react'
import { QualityStandardsProps, StandardCard } from '@/components/Interface/QualityStandard.interface'


const QualityStandards: React.FC<QualityStandardsProps> = ({
  title = 'Not everyone makes the cut',
  subtitle = "We'd rather show you fewer pros than ones you can't trust. Here's what every HomeHero pro clears first.",
  cards,
}) => {
  const defaultCards: StandardCard[] = [
    {
      id: '1',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Background checks',
      description:
        'Every pro passes identity and criminal background screening before they can take a job.',
    },
    {
      id: '2',
      icon: <CheckCircle className="w-6 h-6 text-red-500" />,
      title: 'License & insurance',
      description:
        "We verify licenses where required and confirm active insurance so you're never exposed.",
    },
    {
      id: '3',
      icon: <Star className="w-6 h-6 text-red-500" />,
      title: 'Earned, not bought, reviews',
      description:
        'Reviews come only from homeowners who actually booked through HomeHero — good or bad.',
    },
    {
      id: '4',
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: 'Payment protection',
      description:
        'Your payment is held and released on completion. Disputes are handled by a real person.',
    },
  ]

  const displayCards = cards || defaultCards

  return (
    <section className="relative bg-zinc-900 py-16 sm:py-24 overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(239, 68, 68, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-zinc-800/40 backdrop-blur-sm border border-red-900/20 rounded-lg p-6 sm:p-8 hover:border-red-900/50 transition-all duration-300 hover:bg-zinc-800/60"
            >
              {/* Icon container */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mb-4 group-hover:bg-red-500/20 transition-colors">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {card.description}
              </p>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-lg bg-linear-to-br from-red-900/0 to-red-900/0 group-hover:from-red-900/10 group-hover:to-red-900/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityStandards
