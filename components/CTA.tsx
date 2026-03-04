'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
        
        {/* Geometric accent */}
        <svg
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="cta-hexagons" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M25 0 L50 12.5 L50 37.5 L25 50 L0 37.5 L0 12.5 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-hexagons)" />
        </svg>

        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-padding max-w-5xl mx-auto text-center">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-8 leading-tight">
            Clarity Starts with
            <br />
            the Right Structure
          </h2>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether your organization is expanding, restructuring, or entering a regulated market, 
            Millennials Corporate Services Limited provides the strategic clarity and institutional 
            support required for sustainable success.
          </p>
        </div>

        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-semibold text-lg rounded-sm transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm">Free Initial Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm">Confidential Advisory</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm">Tanzania-Based Expertise</span>
          </div>
        </div>
      </div>
    </section>
  )
}
