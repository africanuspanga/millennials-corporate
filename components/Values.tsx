'use client'

import { useEffect, useRef } from 'react'
import { Telescope, ShieldCheck, BookOpen, Handshake, Award } from 'lucide-react'

const values = [
  {
    icon: Telescope,
    title: 'Strategic Foresight',
    description: 'We anticipate regulatory and operational changes and prepare organizations to adapt successfully.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We operate with transparency, confidentiality, and ethical discipline.',
  },
  {
    icon: BookOpen,
    title: 'Regulatory Intelligence',
    description: 'We translate complex legal and regulatory frameworks into clear actionable strategies.',
  },
  {
    icon: Handshake,
    title: 'Client Partnership',
    description: 'We build long-term relationships focused on measurable results.',
  },
  {
    icon: Award,
    title: 'Operational Excellence',
    description: 'We deliver structured solutions with disciplined execution.',
  },
]

export default function Values() {
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
      className="section-padding bg-white"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            What We Stand For
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
