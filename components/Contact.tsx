'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, Mail, Globe, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+255 755 935 942',
      href: 'tel:+255755935942',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mcsl@gmail.com',
      href: 'mailto:mcsl@gmail.com',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'www.mcsl.com',
      href: 'http://www.mcsl.com',
    },
  ]

  const services = [
    'HR & Workforce Advisory',
    'Legal & Regulatory Compliance',
    'Business Registration & Corporate Structuring',
    'Outsourcing Strategy & Managed Services',
    'Government & Institutional Advisory',
    'General Inquiry',
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white"
    >
      <div className="container-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-primary mt-4 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto" />
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Millennials Corporate Services Limited works with organizations seeking clarity 
            in governance, compliance, and operational structure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 lg:col-span-2">
            <div className="bg-accent rounded-2xl p-8 lg:p-10 h-full">
              <h3 className="font-display text-2xl text-primary mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 mb-8">
                Contact our team to discuss your advisory needs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-semibold text-primary group-hover:text-secondary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-10 pt-8 border-t border-primary/10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-semibold text-primary">Office Location</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dar es Salaam, Tanzania
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <h3 className="font-display text-2xl text-primary mb-6">
                Schedule a Consultation
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl text-primary mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    We have received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none min-h-[48px]"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none min-h-[48px]"
                        placeholder="Company name"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none min-h-[48px]"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none min-h-[48px]"
                        placeholder="+255..."
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none bg-white min-h-[48px]"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your needs..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
