'use client'

import { useEffect, useRef, useState } from 'react'
import { 
  Users, 
  Scale, 
  Building, 
  ClipboardList, 
  Landmark,
  ChevronRight
} from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'HR & Workforce Advisory',
    shortDesc: 'Strategic workforce structuring and HR compliance solutions.',
    fullDescription: 'We support organizations in designing workforce structures that align with operational strategy and regulatory compliance.',
    items: [
      'Workforce structuring',
      'HR policy development',
      'Compensation framework design',
      'HR compliance audits',
      'Performance management systems',
      'Contractor governance',
      'Organizational restructuring',
    ],
    note: 'We work with companies at different growth stages including startups, SMEs, and large institutional organizations.',
  },
  {
    icon: Scale,
    title: 'Legal & Regulatory Compliance',
    shortDesc: 'Navigate regulatory frameworks with strategic guidance.',
    fullDescription: 'Operating within regulatory frameworks requires clarity and strategic guidance.',
    items: [
      'Employment law advisory',
      'Corporate governance advisory',
      'Regulatory risk assessments',
      'Compliance frameworks',
      'Institutional governance reviews',
      'Organizational restructuring advisory',
    ],
    note: '',
  },
  {
    icon: Building,
    title: 'Business Registration & Corporate Structuring',
    shortDesc: 'Establish compliant and scalable corporate structures.',
    fullDescription: 'We assist organizations in establishing compliant and scalable corporate structures.',
    items: [
      'Company formation and registration',
      'Business licensing',
      'Joint venture structuring',
      'Corporate governance frameworks',
      'Regulatory filings and documentation',
      'Local content advisory',
    ],
    note: '',
  },
  {
    icon: ClipboardList,
    title: 'Outsourcing Strategy & Managed Services',
    shortDesc: 'Design efficient operational models through outsourcing.',
    fullDescription: 'We help organizations design efficient operational models through structured outsourcing strategies.',
    items: [
      'Workforce outsourcing frameworks',
      'Payroll structuring',
      'Vendor compliance oversight',
      'Managed workforce programs',
      'Contractor governance',
    ],
    note: '',
  },
  {
    icon: Landmark,
    title: 'Government & Institutional Advisory',
    shortDesc: 'Institutional alignment for regulated sectors.',
    fullDescription: 'For organizations operating within regulated sectors, institutional alignment is essential.',
    items: [
      'Government liaison strategy',
      'Institutional compliance advisory',
      'Public-private engagement support',
      'Policy alignment guidance',
    ],
    note: '',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState<number | null>(null)

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
      id="services"
      ref={sectionRef}
      className="section-padding bg-accent"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-secondary" />
          <p className="mt-6 text-gray-600 text-lg max-w-2xl">
            Comprehensive corporate advisory services tailored to help your organization 
            navigate complexity and achieve sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 group ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full ${
                  activeService === index ? 'ring-2 ring-primary' : ''
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`p-8 lg:p-10 ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-10' : ''}`}>
                  {/* Icon & Title Section */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-secondary font-medium">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>

                    {service.note && (
                      <p className="text-sm text-gray-500 italic border-l-2 border-secondary pl-4">
                        {service.note}
                      </p>
                    )}
                  </div>

                  {/* Services List */}
                  <div className={`${index === 0 ? '' : 'mt-6 pt-6 border-t border-gray-100'}`}>
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-secondary" />
                      Services Include
                    </h4>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start gap-3 text-gray-600 group/item"
                        >
                          <ChevronRight className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                          <span className="group-hover/item:text-primary transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
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
