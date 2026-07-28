'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import Image from 'next/image'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  brandName?: string
  brandDescription?: string
  brandFeatures?: string[]
  sections?: FooterSection[]
  bottomLinks?: FooterLink[]
  copyrightText?: string
}

export function Footer({
  brandName = 'Home Hero',
  brandDescription = 'Vetted, background-checked home-service pros — booked with transparent pricing and secure payment protection.',
  brandFeatures = [
    'Every pro background-checked',
    'Insured & licensed where required',
    'Pay only when the job\'s done',
  ],
  sections = [
    {
      title: 'Services',
      links: [
        { label: 'Browse categories', href: '/Browse-categories' },
        { label: 'Plumbing', href: '/Plumbing' },
        { label: 'Electrical', href: '/Electrical' },
        { label: 'Cleaning', href: '/Cleaning' },
        { label: 'Handyman', href: '/Handyman' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Home Hero', href: '/about' },
        { label: 'How it works', href: '/how-it-works' },
        { label: 'Pricing', href: '/Pricing' },
        { label: 'Trust & Safety', href: '/Safety' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Log in', href: '/login' },
        { label: 'Get started', href: '/get-started' },
        { label: 'Provider sign-up', href: '/sign-up' },
      ],
    },
  ],
  bottomLinks = [
    { label: 'Privacy', href: '/Privacy' },
    { label: 'Terms', href: '/Terms' },
    { label: 'Trust & Safety', href: '/Safety' },
  ],
  copyrightText = '© 2026 Your Company, Inc. A demo marketplace. All names fictional.',
}: FooterProps) {
  return (
    <footer className="text-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                    <Image
                        src="/logo.png"
                        width={500}
                        height={500}
                        alt="logo"
                    />
                </span>
              </div>
              <span className="text-xl font-bold text-white">
                {brandName}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {brandDescription}
            </p>
            <ul className="space-y-3">
              {brandFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 gap-4">
          <p className="text-gray-500 text-sm">{copyrightText}</p>
          <ul className="flex flex-wrap gap-6">
            {bottomLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
