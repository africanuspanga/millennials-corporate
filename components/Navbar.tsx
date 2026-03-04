'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-primary shadow-lg py-4`}
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/MILLENIALS LOGO NO BG.png"
                alt="MCSL Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-lg leading-tight block text-white">
                Millennials
              </span>
              <span className="text-xs tracking-wider block text-white/80">
                CORPORATE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/90 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2.5 text-sm font-semibold rounded-sm bg-white text-primary transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-primary-dark rounded-lg shadow-xl py-4 px-2 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 mt-4 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-white text-primary font-semibold rounded-sm hover:bg-white/90 transition-colors"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
