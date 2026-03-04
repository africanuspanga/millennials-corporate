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
  BookOpen, 
  Users, 
  Target,
  GraduationCap,
  BadgeCheck
} from 'lucide-react'

const credentials = [
  {
    title: 'Project Management Professional (PMP)',
    org: 'Project Management Institute, USA',
    year: '2020',
    reg: 'Reg: 2751459'
  },
  {
    title: 'Authorized Training Partner Instructor (ATPI)',
    org: 'Project Management Institute, USA',
    year: '2020'
  },
  {
    title: 'Certified Human Resources Business Partner (CHRBP)',
    org: 'World Academy, UK',
    year: '2025'
  },
  {
    title: 'Master Practitioner in Emotional Intelligence',
    org: 'Institute of Leadership & Management, UK',
    year: '2022'
  }
]

const education = [
  {
    degree: 'Master of Science in Project Planning and Management',
    school: 'Mzumbe University',
    year: '2018'
  },
  {
    degree: 'Masters in Strategic Human Resources Management',
    school: 'Institute of Social Works',
    year: '2024'
  },
  {
    degree: 'Bachelor of Public Administration (HRM)',
    school: 'Mzumbe University',
    year: '2011'
  },
  {
    degree: 'Master Practitioner Emotional Intelligence Program',
    school: 'The Institute of Leadership and Management, UK',
    year: '2022'
  }
]

const experience = [
  {
    role: 'Assistant Lecturer',
    company: 'Mzumbe University - Department of Public Administration, Leadership and Management',
    period: 'March 2022 - Present',
    description: 'Facilitates modules, develops instructional materials, administers examinations, and conducts pre- and post-training evaluations.'
  },
  {
    role: 'Corporate Trainer',
    company: 'Jema Africa Ltd',
    period: 'January 2025 - January 2026',
    description: 'Designing and implementing learning and development frameworks aligned to strategic business goals, facilitating productivity workshops, and engaging executive leadership.'
  },
  {
    role: 'Head of Zone',
    company: 'DKT International Tanzania (Lake Zone)',
    period: 'Previous',
    description: 'Led regional operations and strategic initiatives across the Lake Zone region.'
  },
  {
    role: 'Program Coordinator',
    company: 'NipeFagio Tanzania',
    period: 'Previous',
    description: 'Led national environmental campaigns including World Clean Up Day and Fridays for Future movement.'
  },
  {
    role: 'Regional Operations Manager',
    company: 'Population Services International (PSI)',
    period: 'Previous',
    description: 'Managed large-scale HIV, Reproductive Health, and WASH projects across multiple Tanzanian regions.'
  }
]

const expertise = [
  'HR Business Consulting',
  'Project Management Training & Coaching',
  'Organizational Development',
  'Performance Management',
  'Succession Planning',
  'Policy & Strategy Formulation',
  'Monitoring & Evaluation',
  'Risk Management',
  'Leadership Development',
  'Stakeholder Engagement'
]

export default function RevocatusFivawoPage() {
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
                    <span className="font-display text-8xl text-white/30 font-bold">RF</span>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 lg:col-span-2 text-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">PMP</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">ATPI</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">CHRBP</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                  Revocatus Vincent Fivawo
                </h1>
                
                <p className="text-xl md:text-2xl text-white/80 mb-6">
                  HR Business Consultant | Project Management Professional | Accredited Trainer
                </p>

                <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
                  A distinguished HR Business Consultant, Certified Project Management Professional, 
                  and highly accredited corporate trainer with over a decade of progressive experience 
                  spanning health, academia, corporate, commercial, and non-governmental sectors across East Africa.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:revocatusfivawo@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    <Mail size={18} />
                    Get in Touch
                  </a>
                  <a 
                    href="tel:+255767626274"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    <Phone size={18} />
                    +255 767 626 274
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Professional Credentials</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {credentials.map((cred, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <BadgeCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-primary mb-1">{cred.title}</h3>
                      <p className="text-gray-600 text-sm">{cred.org}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="text-secondary font-medium">{cred.year}</span>
                        {cred.reg && <span className="text-gray-500">{cred.reg}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Education</h2>
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
                  </div>
                  <span className="px-4 py-2 bg-white rounded-lg text-secondary font-semibold text-sm">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Professional Experience</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-xl p-6 lg:p-8 shadow-md"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl text-primary mb-1">{exp.role}</h3>
                      <p className="text-secondary font-medium mb-2">{exp.company}</p>
                      <span className="inline-block px-3 py-1 bg-accent rounded-full text-sm text-gray-600">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed md:pl-16">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PMP Training Achievement */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="lg:w-2/3">
                  <h2 className="font-display text-3xl md:text-4xl mb-6">PMP Training Excellence</h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    Since 2020, as a Project Management Consultant and PMI Authorized Training Partner Instructor, 
                    Revocatus has mentored over <strong className="text-white">300 PMP candidates</strong>, 
                    achieving a remarkable <strong className="text-white">90% first-attempt pass rate</strong> 
                    through targeted coaching, mock exam reviews, and personalized study plans.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    His training engagements have spanned prestigious institutions including the Tanzania Petroleum 
                    Development Corporation (TPDC), Tanzania Institute of Project Management, Tanzania Public Service 
                    College, and Hand in Hand Eastern Africa — Arusha.
                  </p>
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-display font-bold text-white mb-2">90%</div>
                    <div className="text-white/70 text-lg">First-Attempt Pass Rate</div>
                    <div className="mt-6 text-5xl md:text-6xl font-display font-bold text-white/80">300+</div>
                    <div className="text-white/70 text-lg">Candidates Mentored</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className="py-16 lg:py-20 bg-accent">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700 mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">Key Areas of Expertise</h2>
              <div className="w-24 h-1 bg-secondary" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertise.map((skill, index) => (
                <div 
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Award className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 lg:py-20 bg-primary">
          <div className="container-padding max-w-4xl mx-auto text-center">
            <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
                Connect with Revocatus
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need HR transformation consulting, PMI-certified project management training, 
                or executive leadership programs, Revocatus delivers measurable impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:revocatusfivawo@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mail size={20} />
                  revocatusfivawo@gmail.com
                </a>
                <a 
                  href="tel:+255767626274"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone size={20} />
                  +255 767 626 274
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
