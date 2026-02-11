'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const products = [
  {
    name: 'Lyra AI Voice Assistant',
    tagline: 'AI-Powered Call Automation',
    description: 'Enterprise AI voice assistant that handles inbound and outbound calls with natural conversation, automatic CRM updates, and intelligent call routing. Perfect for sales teams, customer support, and appointment scheduling.',
    stat: '95%',
    statLabel: 'faster response',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    bgGlow: 'bg-violet-500/20',
    features: ['Natural Conversation', 'CRM Integration', 'Intelligent Routing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: 'HR-OS',
    tagline: 'AI HR Automation Software',
    description: 'Intelligent HR automation platform with AI chatbot and voice support. Answers employee questions 24/7, automates HR workflows, and integrates with existing HRIS systems. Reduce HR ticket volume by 80%.',
    stat: '80%',
    statLabel: 'fewer tickets',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGlow: 'bg-blue-500/20',
    features: ['24/7 AI Chatbot', 'Workflow Automation', 'HRIS Integration'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Fleet-OS',
    tagline: 'AI Fleet Management System',
    description: 'Voice-activated fleet management and dispatch system for logistics operations. AI-powered route optimization, real-time driver coordination, and automated scheduling. Reduce dispatch errors by 92%.',
    stat: '92%',
    statLabel: 'fewer errors',
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    bgGlow: 'bg-emerald-500/20',
    features: ['Route Optimization', 'Real-time Coordination', 'Automated Scheduling'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: 'AI Proposal Generator',
    tagline: 'Automated Sales Proposal Software',
    description: 'AI-powered proposal generation that creates professional sales proposals instantly from CRM data. Voice-activated, customizable templates, and automatic client personalization. Close deals 3x faster.',
    stat: '3x',
    statLabel: 'faster deals',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgGlow: 'bg-orange-500/20',
    features: ['Voice-Activated', 'Custom Templates', 'Auto Personalization'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function Products3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="relative py-32 overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/83b9bfab-689b-4660-a4a8-4f4064fade02.png"
          alt="AI Network"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="badge mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            Enterprise Products
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            AI Products Built for <span className="text-gradient-vibrant">Scale</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Four enterprise-grade AI solutions. Each with its own identity, designed to transform specific business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`product-card-3d perspective-container transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Glow on Hover */}
              <div 
                className={`absolute -inset-4 ${product.bgGlow} rounded-3xl blur-3xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-40' : 'opacity-0'
                }`}
              ></div>
              
              <div className="relative">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg transform transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    {product.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold font-display bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {product.stat}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{product.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{product.name}</h3>
                  <p className="text-sm text-zinc-500 font-medium">{product.tagline}</p>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-white/5 rounded-lg border border-white/5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href={`#${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm font-semibold text-white group"
                >
                  <span className="relative">
                    Learn more
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${product.gradient} transition-all duration-300 group-hover:w-full`}></span>
                  </span>
                  <svg className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-zinc-500">
            Each product operates as an independent brand with dedicated support and development teams.
          </p>
        </div>
      </div>
    </section>
  );
}