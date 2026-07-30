'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Userdropdown from '../UserDropdown/Userdropdown'

export interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  user: {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
  } | null;

  navItems?: NavItem[];
}

export function Navbar({
  user,
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
  ],
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                    <Image
                        src="/logo.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </span>
              </div>
              <p className="text-xl font-bold text-white hidden sm:inline">
                Fixit <span className='primary-text'>Now</span>
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
         {user ? (
            <Userdropdown user={user} />
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-[#C93C3F] px-6 py-3 text-white"
            >
              Login
            </Link>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-white font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-4 px-3">
                <Link
                  href="/login"
                  className="text-white bg-[#C93C3F] border-0 px-6 py-3 rounded-[10px]"
                >
                    Login
                </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
