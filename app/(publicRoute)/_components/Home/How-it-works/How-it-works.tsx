'use client'

import { HowItWorksProps, Stat, WorkStep } from '@/components/Interface/HowItWorks.interface'
import React from 'react'

const defaultSteps: WorkStep[] = [
  {
    number: 1,
    title: 'Tell us what&apos;s needed',
    description:
      'Describe the job or pick a category. We match you with pros who actually do this work in your area.',
  },
  {
    number: 2,
    title: 'Compare real pros',
    description:
      'Read verified reviews, see response times, licensing, and upfront pricing — no mystery quotes.',
  },
  {
    number: 3,
    title: 'Book & pay with peace of mind',
    description:
      'Schedule the visit and pay through HomeHero. Funds are only released when the job is done right.',
  },
]

const defaultStats: Stat[] = [
  { value: '12,400+', label: 'Vetted pros nationwide' },
  { value: '480K', label: 'Jobs booked' },
  { value: '28 min', label: 'Avg. first response' },
  { value: '4.8/5', label: 'Average rating' },
]

export default function HowItWorks({
  title = 'How It Works',
  steps = defaultSteps,
  stats = defaultStats,
}: HowItWorksProps) {
  return (
    <section className="relative bg-[#333333] py-20">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.1) 25%, rgba(255, 0, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.1) 75%, rgba(255, 0, 0, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.1) 25%, rgba(255, 0, 0, 0.1) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.1) 75%, rgba(255, 0, 0, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {title}
          </h2>
        </div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#222222] backdrop-blur border border-gray-800 rounded-xl p-8 hover:border-red-500/30 transition-colors"
            >
              {/* Numbered Circle */}
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#C93C3F] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-500">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C93C3F] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
