'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
        
        {/* Geometric pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexagons"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <path
                d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>

        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding max-w-6xl mx-auto text-center pt-24">
        {/* Tagline */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-6">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-wider uppercase">
            Clarity in a Complex World
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
          Structured Solutions for
          <br />
          <span className="text-white/90">Complex Business Environments</span>
        </h1>

        {/* Subheading */}
        <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Millennials Corporate Services Limited helps organizations navigate regulatory complexity, 
          workforce strategy, and corporate governance with clarity, discipline, and strategic insight.
        </p>

        {/* CTA Buttons */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-sm transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Consultation
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '50+', label: 'Clients Served' },
            { value: '5', label: 'Core Services' },
            { value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl text-white font-semibold mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  )
}
