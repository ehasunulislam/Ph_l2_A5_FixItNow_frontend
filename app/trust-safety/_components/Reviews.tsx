import { CheckCircle } from 'lucide-react'

export default function Reviews() {
  const reviewPoints = [
    {
      icon: CheckCircle,
      text: 'Browse ratings with full distributions, not just an average.',
    },
    {
      icon: CheckCircle,
      text: 'Check response time and completion rate before you commit.',
    },
    {
      icon: CheckCircle,
      text: 'Pay through HomeHero — never wire money directly to a stranger.',
    },
  ]

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          {/* Left Column */}
          <div>
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="text-sm font-medium">Your part</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              What real reviews look like
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              We never let pros pay for ratings or cherry-pick feedback. Reviews come only from homeowners who actually booked — and they include the 3-star ones.
            </p>

            {/* Review Points */}
            <div className="space-y-4 mb-8">
              {reviewPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C93C3F] shrink-0 mt-1" />
                  <p className="text-sm">{point.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm transition-colors">
              Find a verified pro
            </button>
          </div>

          {/* Right Column - Testimonial */}
          <div className="flex items-center justify-center">
            <div className="border border-border rounded-lg p-8 lg:p-10">
              <blockquote className="mb-6">
                <p className="text-2xl lg:text-3xl font-semibold  leading-tight">
                  &quot;If a pro can&apos;t clear the checks, they don&apos;t get listed. Simple as that.&quot;
                </p>
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                — HomeHero Trust & Safety Team
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
