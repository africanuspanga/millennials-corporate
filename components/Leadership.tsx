'use client'

import { useEffect, useRef } from 'react'
import { Linkedin, Mail, Award, Briefcase } from 'lucide-react'
import Image from 'next/image'

const leaders = [
  {
    name: 'Gabriel Mpogole',
    role: 'Founder & Principal Consultant',
    image: '/GABRIEL MPOGOLE.png',
    bio: `Gabriel Mpogole is a corporate strategist and governance advisor with extensive executive experience across Tanzania's mining, manufacturing, energy, agriculture, commerce, and public sectors.

He holds an MBA in Corporate Management and a Bachelor of Public Administration (HRM) from Mzumbe University and is currently pursuing a Master of Science in Strategy and Business Management.

Gabriel has held leadership roles within organizations including Barrick Gold, Panafrican Mining Services, Coca-Cola Kwanza, Mbeya Cement Company, Olam Tanzania, BP Tanzania, TANESCO, and G4S Security Services.

His expertise spans corporate governance, workforce strategy, organizational performance management, and institutional advisory.`,
    expertise: ['Corporate Governance', 'Workforce Strategy', 'Performance Management', 'Institutional Advisory'],
  },
  {
    name: 'Evarist Joseph',
    role: 'Senior Consultant – Legal Advisory',
    image: '/images/evarist.jpg',
    bio: `Evarist Joseph is a corporate lawyer based in Dar es Salaam with extensive experience in corporate and commercial law.

His advisory work includes company formation, regulatory compliance, contract negotiation, corporate governance, and commercial transactions.

He supports organizations in navigating complex legal frameworks while protecting commercial interests.`,
    expertise: ['Corporate Law', 'Regulatory Compliance', 'Contract Negotiation', 'Commercial Transactions'],
  },
]

export default function Leadership() {
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
      id="leadership"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            Leadership
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Experienced professionals with deep expertise across corporate governance, 
            legal advisory, and institutional consulting.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Area */}
                <div className="relative h-80 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
                  {index === 0 ? (
                    /* Gabriel's Photo */
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    /* Placeholder for Evarist */
                    <>
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`leader-pattern-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#leader-pattern-${index})`} />
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <span className="font-display text-5xl text-white font-semibold">
                            {leader.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 -mt-12 relative">
                  {/* Name Card */}
                  <div className="bg-primary text-white p-6 rounded-xl shadow-lg mb-6">
                    <h3 className="font-display text-2xl mb-1">{leader.name}</h3>
                    <p className="text-white/80 font-medium">{leader.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="prose prose-gray mb-6">
                    {leader.bio.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.expertise.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm">
                      <Linkedin size={18} />
                      <span>LinkedIn</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm">
                      <Mail size={18} />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
