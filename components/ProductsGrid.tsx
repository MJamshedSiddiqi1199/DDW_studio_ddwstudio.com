'use client';

import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Lyra',
    tagline: 'AI Customer Intelligence',
    description: 'Transform customer interactions with AI that understands context, sentiment, and intent. Resolve inquiries instantly while building deeper relationships.',
    stat: '60s',
    statLabel: 'avg response',
    gradient: 'from-violet-500 to-purple-600',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    name: 'HR-OS',
    tagline: 'Workforce Automation',
    description: 'End-to-end HR automation from recruiting to retention. Reduce administrative burden by 85% while improving employee experience.',
    stat: '85%',
    statLabel: 'time saved',
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Dispatch',
    tagline: 'Smart Operations',
    description: 'AI-powered scheduling and logistics that adapt in real-time. Optimize routes, resources, and workflows automatically.',
    stat: '40%',
    statLabel: 'more efficient',
    gradient: 'from-emerald-500 to-teal-500',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: 'Proposal Gen',
    tagline: 'Document Intelligence',
    description: 'Generate winning proposals, contracts, and documents in seconds. AI that learns your brand voice and closes deals faster.',
    stat: '10x',
    statLabel: 'faster',
    gradient: 'from-orange-500 to-amber-500',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ProductsGrid() {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} id="products" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Our Products
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Enterprise AI <span className="text-gradient">Suite</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Four powerful AI products designed for businesses that demand excellence. 
            Each solution delivers immediate value and scales with your growth.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group relative glass-card card-shine p-8 lg:p-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon & Badge Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                    {product.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold font-display bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                      {product.stat}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">{product.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-1 font-display">{product.name}</h3>
                  <p className="text-sm text-zinc-500 font-medium">{product.tagline}</p>
                </div>

                <p className="text-zinc-400 leading-relaxed mb-8">{product.description}</p>

                {/* CTA */}
                <a 
                  href={`#${product.name.toLowerCase()}`}
                  className="inline-flex items-center text-sm font-semibold text-white group/link"
                >
                  <span className="relative">
                    Learn more
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${product.gradient} transition-all duration-300 group-hover/link:w-full`}></span>
                  </span>
                  <svg className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}