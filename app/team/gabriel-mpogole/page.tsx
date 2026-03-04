'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Award, 
  Building2, 
  Target,
  GraduationCap,
  Briefcase,
  Users,
  TrendingUp,
  Shield
} from 'lucide-react'

const education = [
  {
    degree: 'Master of Science in Strategy & Business Management (MSSBM)',
    school: 'World Academy for Research and Development',
    year: 'In Progress',
    note: 'Currently Pursuing'
  },
  {
    degree: 'MBA in Corporate Management',
    school: 'Mzumbe University',
    year: 'Completed'
  },
  {
    degree: 'Bachelor of Public Administration (HRM)',
    school: 'Mzumbe University',
    year: 'Completed'
  },
  {
    degree: 'Certified Balanced Scorecard Practitioner',
    school: 'Professional Certification',
    year: 'Certified'
  }
]

const careerHistory = [
  {
    company: 'Barrick Gold (formerly Acacia Mining)',
    sector: 'Mining',
    role: 'Strategic Management',
    type: 'Multinational Mining Corporation'
  },
  {
    company: 'Panafrican Mining Services',
    sector: 'Mining Services',
    role: 'Executive Leadership',
    type: 'Mining Services Provider'
  },
  {
    company: 'Coca-Cola Kwanza',
    sector: 'Beverage/Manufacturing',
    role: 'Strategic Management',
    type: 'Multinational FMCG'
  },
  {
    company: 'Mbeya Cement Company (Lafarge & Holcim Group)',
    sector: 'Manufacturing',
    role: 'Executive Leadership',
    type: 'Global Cement Manufacturer'
  },
  {
    company: 'Olam Tanzania Limited',
    sector: 'Agriculture/Commerce',
    role: 'Strategic Management',
    type: 'Global Agribusiness'
  },
  {
    company: 'BP Tanzania Limited',
    sector: 'Energy',
    role: 'Executive Leadership',
    type: 'Global Energy Company'
  },
  {
    company: 'TANESCO',
    sector: 'Public Sector/Utility',
    role: 'Strategic Management',
    type: 'National Power Utility'
  },
  {
    company: 'G4S Security Service Tanzania Limited',
    sector: 'Security Services',
    role: 'Executive Leadership',
    type: 'Global Security Company'
  }
]

const expertise = [
  {
    icon: Building2,
    title: 'Corporate Governance',
    description: 'Board-level insight and governance frameworks for institutional excellence'
  },
  {
    icon: Users,
    title: 'Workforce Strategy',
    description: 'Strategic human capital management and organizational development'
  },
  {
    icon: Target,
    title: 'Performance Architecture',
    description: 'Balanced Scorecard implementation and performance management systems'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Navigating complex regulatory environments across sectors'
  },
  {
    icon: TrendingUp,
    title: 'Institutional Restructuring',
    description: 'Organizational transformation and change management'
  },
  {
    icon: Briefcase,
    title: 'Outsourcing Oversight',
    description: 'Strategic workforce outsourcing and vendor management'
  }
]

export default function GabrielMpogolePage() {
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
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
        <div className="container-padding max-w-7xl mx-auto py-4">
          <Link 
            href="/#leadership" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Leadership</span>
          </Link>
        </div>
      </nav>

      <div ref={sectionRef} className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary-dark py-20 lg:py-28">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 lg:col-span-1">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/GABRIEL MPOGOLE.png"
                    alt="Gabriel Mpogole"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 lg:col-span-2 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Founder</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Principal Consultant</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Balanced Scorecard Certified</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                  Gabriel Mpogole
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-6">
                  Founder & Principal Consultant
                </p>

                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
                  A seasoned corporate strategist and governance advisor with extensive executive-level 
                  experience across Tanzania&apos;s mining, manufacturing, energy, agriculture, commerce, 
                  security, and public sectors. Gabriel brings board-level insight in corporate governance, 
                  institutional restructuring, regulatory compliance, workforce strategy, outsourcing oversight, 
                  and performance architecture.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:mcsl@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Mail size={18} />
                    Get in Touch
                  </a>
                  <a 
                    href="tel:+255755935942"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={18} />
                    +255 755 935 942
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                  Professional Philosophy
                </h2>
                <div className="w-24 h-1 bg-secondary mb-8" />
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-6">
                    Over the course of his career, Gabriel has advanced from operational roles to 
                    senior strategic management positions within leading institutions. His cross-sector 
                    exposure in highly regulated and operationally complex environments enables him to 
                    advise executive leadership and governing boards with a strategic, risk-aware, and 
                    sustainability-driven perspective.
                  </p>
                  <p className="mb-6">
                    His leadership philosophy is anchored in ethical governance, disciplined execution, 
                    and long-term institutional resilience. He believes that clarity in strategy, governance, 
                    and compliance is the foundation of resilient institutions.
                  </p>
                  <p className="p-6 bg-accent rounded-xl border-l-4 border-primary font-display text-xl text-primary italic">
                    &quot;Structured solutions create sustainable impact. Organizations that invest in 
                    governance excellence today build the resilience needed for tomorrow&apos;s challenges.&quot;
                  </p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                  Key Expertise
                </h2>
                <div className="w-24 h-1 bg-secondary mb-8" />

                <div className="grid sm:grid-cols-2 gap-4">
                  {expertise.map((item, index) => (
                    <div 
                      key={index}
                      className="p-5 bg-accent rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-display text-lg text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career History */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                Executive Career Portfolio
              </h2>
              <div className="w-24 h-1 bg-secondary" />
              <p className="mt-6 text-gray-600 max-w-3xl">
                Gabriel has held leadership roles within organizations spanning multiple sectors, 
                advancing from operational positions to senior strategic management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {careerHistory.map((job, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-primary mb-1">{job.company}</h3>
                      <p className="text-secondary font-medium text-sm mb-2">{job.type}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-accent rounded text-xs text-gray-600">{job.sector}</span>
                        <span className="px-2 py-1 bg-accent rounded text-xs text-gray-600">{job.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Education & Certifications</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col md:flex-row md:items-center gap-4 p-6 bg-accent rounded-xl"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-primary">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    {edu.note && <p className="text-secondary text-sm mt-1">{edu.note}</p>}
                  </div>
                  <span className="px-4 py-2 bg-white rounded-lg text-secondary font-semibold text-sm">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Focus */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">Strategic Advisory Focus</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    As the Founder and Principal Consultant of Millennials Corporate Services Limited, 
                    Gabriel provides executive-level advisory services to organizations seeking clarity 
                    in governance, compliance, and operational structure.
                  </p>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Board-level governance advisory</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Strategic restructuring and transformation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Regulatory compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Workforce strategy and outsourcing oversight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Performance architecture and Balanced Scorecard implementation</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-display font-bold text-white mb-2">10+</div>
                    <div className="text-white/70">Years Executive Experience</div>
                    <div className="mt-6 text-5xl font-display font-bold text-white/80">8+</div>
                    <div className="text-white/70">Leading Organizations</div>
                    <div className="mt-6 text-5xl font-display font-bold text-white/80">6</div>
                    <div className="text-white/70">Sectors Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Connect with Gabriel
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Ready to transform your organization&apos;s governance and strategic direction? 
                Schedule a consultation with our Principal Consultant.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:mcsl@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mail size={20} />
                  mcsl@gmail.com
                </a>
                <a 
                  href="tel:+255755935942"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone size={20} />
                  +255 755 935 942
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary-dark py-8">
          <div className="container-padding max-w-7xl mx-auto text-center">
            <Link 
              href="/#leadership" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Leadership Team
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
