'use client'

import { useEffect, useRef } from 'react'
import { Linkedin, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const leaders = [
  {
    name: 'Gabriel Mpogole',
    role: 'Founder & Principal Consultant',
    image: '/GABRIEL MPOGOLE.png',
    bio: `Gabriel Mpogole is a seasoned corporate strategist and governance advisor with extensive executive-level experience across Tanzania's mining, manufacturing, energy, agriculture, commerce, security, and public sectors.`,
    extendedBio: `He holds an MBA in Corporate Management and a Bachelor of Public Administration (HRM) from Mzumbe University and is currently pursuing a Master of Science in Strategy & Business Management. He is also a Certified Balanced Scorecard Practitioner.`,
    expertise: ['Corporate Governance', 'Workforce Strategy', 'Performance Management', 'Institutional Advisory'],
    slug: 'gabriel-mpogole',
    hasImage: true
  },
  {
    name: 'Revocatus Vincent Fivawo',
    role: 'Senior Consultant – HR & Project Management',
    image: '',
    bio: `Revocatus Fivawo is a distinguished HR Business Consultant, Certified Project Management Professional (PMP), and highly accredited corporate trainer with over a decade of progressive experience.`,
    extendedBio: `He holds an MSc in Project Planning and Management, a Master's in Strategic HR Management, and is a PMI Authorized Training Partner Instructor with a 90% PMP exam pass rate among 300+ candidates mentored.`,
    expertise: ['HR Consulting', 'PMP Training', 'Project Management', 'Organizational Development'],
    slug: 'revocatus-fivawo',
    hasImage: false
  },
  {
    name: 'Evarist Joseph',
    role: 'Senior Consultant – Legal Advisory',
    image: '',
    bio: `Evarist Joseph is a corporate lawyer based in Dar es Salaam with over six years of professional experience in corporate and commercial law, and a graduate of the University of Dar es Salaam.`,
    extendedBio: `His advisory work includes company formation, regulatory compliance, contract negotiation, corporate governance, and commercial transactions. He supports organizations in navigating complex legal frameworks.`,
    expertise: ['Corporate Law', 'Regulatory Compliance', 'Contract Negotiation', 'Commercial Transactions'],
    slug: 'evarist-joseph',
    hasImage: false
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
            legal advisory, HR consulting, and institutional advisory.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-72 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
                  {leader.hasImage ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    /* Placeholder for those without images */
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
                        <div className="w-28 h-28 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                          <span className="font-display text-4xl text-white font-semibold">
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
                <div className="p-6 -mt-12 relative flex-1 flex flex-col">
                  {/* Name Card */}
                  <div className="bg-primary text-white p-5 rounded-xl shadow-lg mb-5">
                    <h3 className="font-display text-xl mb-1">{leader.name}</h3>
                    <p className="text-white/80 text-sm font-medium">{leader.role}</p>
                  </div>

                  {/* Bio */}
                  <div className="prose prose-gray mb-4 flex-1">
                    <p className="text-gray-600 leading-relaxed text-sm mb-3">
                      {leader.bio}
                    </p>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {leader.extendedBio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {leader.expertise.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Link
                    href={`/team/${leader.slug}`}
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
