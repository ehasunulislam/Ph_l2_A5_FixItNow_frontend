import { Search, Calendar, DollarSign } from 'lucide-react'

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: 'Describe the job',
      description:
        'Tell us what needs doing and where. Add photos and details so pros can give you a real, not rubber-stamped, estimate.',
      icon: Search,
    },
    {
      number: 2,
      title: 'Compare matched pros',
      description:
        'We surface pros who actually do this work nearby. Review verified ratings, response times, credentials, and upfront pricing side by side.',
      icon: Calendar,
    },
    {
      number: 3,
      title: 'Book & pay safely',
      description:
        'Pick a time, confirm the price, and pay through HomeHero. Your money is held and released only when the job is completed to your satisfaction.',
      icon: DollarSign,
    },
  ]

  return (
    <section className="w-full py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="border rounded-lg p-6 border-accent transition-colors duration-200"
              >
                <div className="mb-4">
                  <Icon className="w-6 h-6 text-[#C93C3F]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.number} • {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
