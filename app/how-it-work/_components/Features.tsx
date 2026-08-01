import { Badge } from '@/components/ui/badge'
import { Star, CheckCircle2, DollarSign, Calendar } from 'lucide-react'

export default function Features() {
  const benefits = [
    'Get matched with homeowners who need exactly your trade',
    'No lead-free games — you see the job before you commit',
    'Build a public reputation with verified reviews',
    'Get paid reliably through HomeHero payment protection'
  ]

  const features = [
    {
      icon: Star,
      title: 'Verified reviews',
      description: 'Earned from real bookings, good or bad.'
    },
    {
      icon: CheckCircle2,
      title: 'Vetted onboarding',
      description: 'Background, license, and insurance checks.'
    },
    {
      icon: DollarSign,
      title: 'Secure payouts',
      description: 'Get paid reliably, no chasing checks.'
    },
    {
      icon: Calendar,
      title: 'Built-in scheduling',
      description: 'A calendar your customers can see.'
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="inline-block mb-6">
              <Badge variant="destructive">The group</Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Run your business, not your inbox
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              HomeHero brings you qualified jobs, handles the trust, scheduling, and payments — so you can focus on the work.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C93C3F] shrink-0 mt-1" />
                  <p className="text-gray-400">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#C93C3F]  font-semibold px-6 py-3 rounded-md hover:bg-accent/90 transition-colors">
              Become a pro
            </button>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="border border-gray-500 rounded-[50px] p-6 hover:border-accent transition-colors">
                  <Icon className="w-6 h-6 text-[#C93C3F] mb-4" />
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
