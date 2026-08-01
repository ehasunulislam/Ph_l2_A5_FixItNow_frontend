'use client'

import { Shield, FileText, AlertCircle, Award } from 'lucide-react'

const VettingCard = ({ icon: Icon, title, description }: { icon: typeof Shield; title: string; description: string }) => (
  <div className="flex flex-col items-start gap-4 rounded-lg border border-[#444444] bg-[#3a3a3a]/50 p-6 backdrop-blur-sm">
    <div className="rounded-lg bg-[#c84444]/20 p-3">
      <Icon className="h-6 w-6 text-[#c84444]" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-[#999999]">{description}</p>
    </div>
  </div>
)

export default function Visting() {
  const cards = [
    {
      icon: Shield,
      title: 'Identity & background checks',
      description: 'Prep verify government ID and pass a criminal background screen before their first job. We re-screen annually.',
    },
    {
      icon: FileText,
      title: 'License verification',
      description: 'Where a trade requires a license, we confirm the license number and status with the issuing board — not just a self-report.',
    },
    {
      icon: AlertCircle,
      title: 'Insurance on file',
      description: 'We collect and verify active liability coverage so you\'re not left holding the bag if something goes wrong.',
    },
    {
      icon: Award,
      title: 'Bonded where it counts',
      description: 'For higher-risk work we require a surety bond, adding another layer of protection for your home and wallet.',
    },
  ]

  return (
    <section className="w-full bg-linear-to-b from-[#2a2a2a] to-[#1f1f1f] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4">
          <div className="inline-flex w-fit rounded-full border border-[#c84444] bg-[#c84444]/10 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wider text-[#c84444]">VETTING</span>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Not everyone makes the cut
            </h2>
            <p className="max-w-2xl text-base text-[#999999]">
              Four checks stand between a new applicant and their first HomeHero job.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <VettingCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
