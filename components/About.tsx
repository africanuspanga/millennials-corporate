'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Building2, Target, Shield, Users } from 'lucide-react'

export default function About() {
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

  const highlights = [
    {
      icon: Building2,
      title: 'Tanzania-Based',
      description: 'Rooted in local expertise with international standards',
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Clear solutions for complex operational challenges',
    },
    {
      icon: Shield,
      title: 'Governance Excellence',
      description: 'Building resilient institutional frameworks',
    },
    {
      icon: Users,
      title: 'Multi-Sector',
      description: 'Experience across mining, energy, manufacturing & more',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            About Millennials Corporate Services Limited
          </h2>
          <div className="w-24 h-1 bg-secondary" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Content */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Millennials Corporate Services Limited is a Tanzania-based corporate advisory 
                and corporate services firm dedicated to helping organizations operate with 
                clarity, compliance, and strategic confidence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We support businesses navigating complex operational and regulatory environments 
                by delivering structured solutions across workforce advisory, regulatory compliance, 
                corporate structuring, outsourcing strategy, and institutional engagement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our work enables companies to strengthen governance, reduce operational risk, 
                and build scalable organizational structures that support sustainable growth.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With experience supporting organizations across multiple sectors including mining, 
                manufacturing, infrastructure, energy, and emerging enterprises, our team combines 
                regulatory intelligence with practical execution.
              </p>
            </div>

            {/* Belief Statement */}
            <div className="mt-10 p-6 bg-accent rounded-lg border-l-4 border-primary">
              <p className="font-display text-xl text-primary italic">
                "At MCSL, we believe that clarity in strategy, governance, and compliance 
                is the foundation of resilient institutions."
              </p>
            </div>
          </div>

          {/* About Image */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about us section of homepage.png"
                alt="Millennials Corporate Services"
                fill
                className="object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
