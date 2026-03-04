'use client'

import { useEffect, useRef } from 'react'
import { Eye, Compass } from 'lucide-react'

export default function MissionVision() {
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
      className="section-padding bg-accent"
    >
      <div className="container-padding max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Vision */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <span className="text-secondary font-semibold tracking-wider uppercase text-sm">
                  Our Direction
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-primary mb-6">
                Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a leading corporate advisory and institutional consulting firm 
                across Africa and emerging markets, recognized for governance excellence, 
                regulatory intelligence, and strategic clarity.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-primary rounded-2xl p-8 lg:p-10 shadow-lg h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Compass className="w-7 h-7 text-white" />
                </div>
                <span className="text-white/70 font-semibold tracking-wider uppercase text-sm">
                  Our Purpose
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-6">
                Mission
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To provide structured corporate advisory services that enable organizations 
                to operate with confidence, efficiency, and long-term sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
