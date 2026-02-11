'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function CompanyInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="badge mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              About DDW Studio
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              The <span className="text-gradient-vibrant">AI Evolution</span> of Digital Dream Works
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              DDW Studio is the enterprise AI division of <span className="text-white font-medium">Digital Dream Works LLC</span>, 
              a Florida-based technology company. We&apos;ve evolved from traditional digital services to building 
              cutting-edge AI products that transform business operations.
            </p>

            {/* Company Structure */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ae679f7f-3454-4e69-8fe6-315c16aebc94.png"
                      alt="DDW Studio Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">DDW Studio</h3>
                    <p className="text-sm text-zinc-500 mb-2">Enterprise AI Products Division</p>
                    <p className="text-sm text-zinc-400">
                      Each SaaS product (Lyra, HR-OS, Dispatch, Proposal Gen) operates as an independent brand 
                      with its own domain, identity, and dedicated team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 opacity-60">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-zinc-400 font-bold text-xl font-display">A</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-300 mb-1">Digital Dream Works Agency</h3>
                    <p className="text-sm text-zinc-600 mb-2">Professional Services Division</p>
                    <p className="text-sm text-zinc-500">
                      Retainer-based services: Marketing Systems, Web Development, Custom Software, AI Automation.
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">DigitalDreamWorksAgency.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Corporate Building Image */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
                <Image
                  src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/7392b71d-c110-4c97-a82e-274451129e5b.png"
                  alt="DDW Corporate"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Florida, USA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Digital Dream Works LLC</h3>
                </div>
              </div>

              {/* Info Card */}
              <div className="glass-card p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">4</div>
                    <div className="text-sm text-zinc-500">SaaS Products</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">24/7</div>
                    <div className="text-sm text-zinc-500">AI Operations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">SOC 2</div>
                    <div className="text-sm text-zinc-500">Certified</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">99.9%</div>
                    <div className="text-sm text-zinc-500">Uptime SLA</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-500/10 border border-white/10 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/10 border border-white/10 animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}