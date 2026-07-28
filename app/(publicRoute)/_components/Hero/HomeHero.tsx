'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroImage } from '@/components/Interface/HomeHeroImage.interface'
import a1 from '../../../../components/assets/a1.png'
import a2 from '../../../../components/assets/a2.png'
import a3 from '../../../../components/assets/a3.png'
import a4 from '../../../../components/assets/a4.png'
import a5 from '../../../../components/assets/a5.png'
import a6 from '../../../../components/assets/a6.png'
import a7 from '../../../../components/assets/a7.png'
import a8 from '../../../../components/assets/a8.png'

const HomeHero = () => {
  const heroImages: HeroImage[] = [
    { id: 1, src: a1, alt: 'Professional roofing service' },
    { id: 2, src: a2, alt: 'Interior design consultation' },
    { id: 3, src: a3, alt: 'Construction work' },
    { id: 4, src: a4, alt: 'Landscaping and gardening' },
    { id: 5, src: a5, alt: 'Painting service' },
    { id: 6, src: a6, alt: 'Window installation' },
    { id: 7, src: a7, alt: 'HVAC repair' },
    { id: 8, src: a8, alt: 'Electrical work' },
  ]

  return (
    <section className="text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Find a pro <br />
              you&apos;d actually recommend.
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Step into the future of home services. HomeHero connects you with
              background-checked, licensed, and insured professionals — with real
              reviews, transparent pricing, and payment held until the job&apos;s done.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-[#C93C3F] text-white font-semibold px-8 py-6 cursor-pointer"
              >
                Find a Pro
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white cursor-pointer font-semibold px-8 py-6"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 auto-rows-max">
            {/* Image 1 - Top Left (Tall) */}
            <div className="col-span-1 row-span-2">
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 2 - Top Middle */}
            <div className="col-span-1">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 3 - Top Right (Tall) */}
            <div className="col-span-1 row-span-2">
              <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 4 - Middle */}
            <div className="col-span-1">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 5 - Bottom Left */}
            <div className="col-span-1">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[4].src}
                  alt={heroImages[4].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 6 - Bottom Middle */}
            <div className="col-span-1">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[5].src}
                  alt={heroImages[5].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 7 - Bottom Right */}
            <div className="col-span-1">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[6].src}
                  alt={heroImages[6].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Image 8 - Hidden on mobile, visible on larger screens */}
            <div className="col-span-1 hidden md:block">
              <div className="relative w-full h-24 md:h-28 rounded-2xl overflow-hidden">
                <Image
                  src={heroImages[7].src}
                  alt={heroImages[7].alt}
                  fill
                  className="object-cover rounded-[10px]"
                  sizes="(max-width: 768px) 0vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
