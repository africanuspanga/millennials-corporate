'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Linkedin, 
  Award, 
  Scale, 
  Building2,
  GraduationCap,
  FileText,
  Shield,
  Handshake,
  Gavel
} from 'lucide-react'

const expertise = [
  {
    icon: Building2,
    title: 'Company Formation',
    description: 'Expert guidance on business registration, incorporation, and corporate structuring for local and international entities.'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Comprehensive advisory on navigating Tanzania\'s evolving legal and regulatory landscape.'
  },
  {
    icon: FileText,
    title: 'Contract Drafting & Negotiation',
    description: 'Strategic contract preparation and negotiation to protect commercial interests.'
  },
  {
    icon: Scale,
    title: 'Corporate Governance',
    description: 'Advisory on governance frameworks, board structures, and compliance protocols.'
  },
  {
    icon: Handshake,
    title: 'Commercial Transactions',
    description: 'Legal support for mergers, acquisitions, joint ventures, and commercial agreements.'
  },
  {
    icon: Gavel,
    title: 'Legal Risk Management',
    description: 'Identification and mitigation of legal risks in business operations.'
  }
]

const services = [
  'Company registration and incorporation',
  'Business licensing and permits',
  'Joint venture structuring',
  'Corporate governance advisory',
  'Contract drafting and review',
  'Commercial transaction support',
  'Regulatory compliance audits',
  'Legal due diligence',
  'Risk assessment and mitigation',
  'Employment law advisory'
]

export default function EvaristJosephPage() {
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
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/30" />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                    <span className="font-display text-8xl text-white/30 font-bold">EJ</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 lg:col-span-2 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Senior Consultant</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Legal Advisory</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">6+ Years Experience</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                  Evarist Joseph
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-6">
                  Senior Consultant – Legal Advisory
                </p>

                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
                  A dedicated Corporate Lawyer based in Dar es Salaam with over six years of professional 
                  experience in corporate and commercial law. Evarist is a graduate of the University of 
                  Dar es Salaam, where he built a strong foundation in legal principles and practices.
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
                  Professional Approach
                </h2>
                <div className="w-24 h-1 bg-secondary mb-8" />
                
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-6">
                    Throughout his career, Evarist has advised businesses and organizations on a wide 
                    range of corporate matters, including company formation, regulatory compliance, 
                    contract drafting and negotiation, corporate governance, and commercial transactions.
                  </p>
                  <p className="mb-6">
                    Evarist&apos;s practical approach, attention to detail, and commitment to delivering 
                    strategic legal solutions have made him a trusted advisor to his clients. Based in 
                    Dar es Salaam, he continues to support companies in navigating the evolving legal 
                    and regulatory landscape while safeguarding their commercial interests.
                  </p>
                  <p className="p-6 bg-accent rounded-xl border-l-4 border-primary font-display text-xl text-primary italic">
                    &quot;Practical legal solutions that protect commercial interests while ensuring 
                    full regulatory compliance.&quot;
                  </p>
                </div>
              </div>

              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h2 className="font-display text-3xl md:text-4xl text-primary mb-6">
                  Areas of Expertise
                </h2>
                <div className="w-24 h-1 bg-secondary mb-8" />

                <div className="space-y-4">
                  {expertise.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-accent rounded-xl hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-primary mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
                Legal Services Offered
              </h2>
              <div className="w-24 h-1 bg-secondary" />
              <p className="mt-6 text-gray-600 max-w-3xl">
                Comprehensive legal advisory services tailored to protect your business interests 
                and ensure regulatory compliance in Tanzania&apos;s complex legal environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Scale className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Education & Qualifications</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>

            <div className="max-w-3xl">
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 flex flex-col md:flex-row md:items-center gap-4 p-6 bg-accent rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-primary">Bachelor of Laws (LLB)</h3>
                  <p className="text-gray-600">University of Dar es Salaam</p>
                  <p className="text-secondary text-sm mt-1">Strong foundation in legal principles and practices</p>
                </div>
              </div>

              <div className="mt-8 reveal opacity-0 translate-y-8 transition-all duration-700">
                <h3 className="font-display text-xl text-primary mb-4">Professional Development</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Continuous professional development in corporate and commercial law</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Specialized training in contract law and negotiation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>Regulatory compliance and corporate governance certification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Evarist */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl mb-6">Why Work with Evarist?</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    In Tanzania&apos;s rapidly evolving business environment, having a legal partner who 
                    combines technical expertise with practical business acumen is essential. Evarist 
                    brings both to every client engagement.
                  </p>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Over 6 years of focused corporate and commercial law experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Practical, business-oriented legal solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Deep understanding of Tanzania&apos;s regulatory landscape</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Attention to detail and commitment to client success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>Trusted advisor to businesses across multiple sectors</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <div className="text-5xl font-display font-bold text-white mb-2">6+</div>
                    <div className="text-white/70">Years Experience</div>
                    <div className="mt-6 text-5xl font-display font-bold text-white/80">100%</div>
                    <div className="text-white/70">Commitment to Clients</div>
                    <div className="mt-6 text-5xl font-display font-bold text-white/80">UDSM</div>
                    <div className="text-white/70">Graduate</div>
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
                Connect with Evarist
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Need expert legal guidance for your business? Get in touch for a confidential 
                consultation on your corporate legal needs.
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
