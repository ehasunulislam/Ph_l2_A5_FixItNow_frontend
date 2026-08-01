import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="w-full py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#C93C3F]"></div>
          <span className="text-sm font-medium text-[#C93C3F]">Simplify by Design</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Three steps from &quot;ugh&quot; to done
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
          No phone-free call centers. No mystery quotes. Just describe the job, compare real
          pros, and pay when it&apos;s right.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/service"
            className="bg-[#C93C3F] px-8 py-6 rounded-lg font-semibold cursor-pointer"
          >
            Browse services
          </Link>
        </div>
      </div>
    </section>
  )
}
