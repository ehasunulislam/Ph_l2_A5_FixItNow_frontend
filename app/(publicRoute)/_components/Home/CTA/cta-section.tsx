import { CTASectionProps } from "@/components/Interface/Cta.interface";
import { Button } from "@/components/ui/button";

export default function CTASection({
  headline = "Ready to get that done?",
  description = "Post your job or browse vetted pros in your area. It takes less than two minutes and there's no obligation.",
  primaryButtonText = "Get started free",
  secondaryButtonText = "Browse services",
  onPrimaryClick,
  onSecondaryClick,
}: CTASectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#353535] py-20 px-8">

          {/* LEFT GLOW */}
          <div
            className="absolute -left-56 -top-52 w-130 h-130 rounded-full blur-[140px]"
            style={{
              background: "#77B0B0",
              opacity: 0.85,
            }}
          />

          {/* RIGHT GLOW */}
          <div
            className="absolute -right-56 -bottom-52 w-130 h-130 rounded-full blur-[140px]"
            style={{
              background: "#77B0B0",
              opacity: 0.85,
            }}
          />

          {/* TOP LIGHT */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,.04), transparent 35%)",
            }}
          />

          {/* DARK VIGNETTE */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at center,
                  rgba(255,255,255,.02) 0%,
                  rgba(0,0,0,.08) 55%,
                  rgba(0,0,0,.18) 100%)
              `,
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center">

            <h2 className="text-white text-5xl font-semibold tracking-tight">
              {headline}
            </h2>

            <p className="mt-5 max-w-2xl text-center text-[18px] leading-7 text-white/60">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                size="lg"
                onClick={onPrimaryClick}
                className="h-14 rounded-2xl bg-[#E04B4B] px-10 text-white hover:bg-[#da4343]"
              >
                {primaryButtonText}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onSecondaryClick}
                className="h-14 rounded-2xl border border-white/10 bg-[#262626] px-10 text-white hover:bg-[#2d2d2d]"
              >
                {secondaryButtonText}
              </Button>

            </div>
          </div>

          {/* INNER SHADOW */}
          <div
            className="pointer-events-none absolute inset-0 rounded-[30px]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,.05), inset 0 -30px 80px rgba(0,0,0,.15)",
            }}
          />

        </div>
      </div>
    </section>
  );
}