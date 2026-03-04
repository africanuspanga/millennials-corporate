'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react'

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-padding max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/MILLENIALS LOGO NO BG.png"
                  alt="MCSL Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display font-semibold text-xl leading-tight block">
                  Millennials
                </span>
                <span className="text-xs tracking-wider text-white/70 block">
                  CORPORATE SERVICES LTD
                </span>
              </div>
            </Link>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              Clarity in a Complex World. We provide structured corporate advisory services 
              that enable organizations to operate with confidence, efficiency, and long-term sustainability.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:mcsl@gmail.com"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+255755935942"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>+255 755 935 942</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mcsl@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>mcsl@gmail.com</span>
                </a>
              </li>
              <li className="text-white/70">
                Dar es Salaam, Tanzania
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-padding max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Millennials Corporate Services Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
