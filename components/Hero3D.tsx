'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Hero3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - 3D Shapes */}
      <div className="absolute inset-0">
        <Image
          src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/2f2c3d0d-8b35-4ea0-a3ac-8c3687ad5bba.png"
          alt="3D Abstract Shapes"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      {/* Background Elements */}
      <div className="hero-gradient"></div>
      <div className="grid-pattern"></div>
      
      {/* AI Sphere Visual - Floating */}
      <div 
        className="absolute top-1/4 right-[10%] w-[300px] h-[300px] opacity-60 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Image
          src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ead3e0f6-e805-4a2f-aff0-8bdfa94aac83.png"
          alt="AI Sphere"
          fill
          className="object-contain animate-float-slow"
        />
      </div>

      {/* 3D Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] gradient-orb bg-indigo-500/20"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] gradient-orb bg-purple-500/20"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '-2s'
          }}
        ></div>

        {/* 3D Floating Geometric Shapes */}
        <div 
          className="absolute top-20 right-[20%] w-20 h-20 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        <div 
          className="absolute bottom-32 left-[15%] w-16 h-16 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) rotateX(${mousePosition.y * -25}deg) rotateY(${mousePosition.x * -25}deg)`,
            transition: 'transform 0.2s ease-out',
            animationDelay: '-3s'
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        <div 
          className="absolute top-1/3 left-[10%] w-12 h-12 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px) rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg)`,
            transition: 'transform 0.2s ease-out',
            animationDelay: '-5s'
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        {/* Orbiting Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="ring-3d w-[400px] h-[400px] opacity-20"></div>
          <div className="ring-3d w-[500px] h-[500px] opacity-15" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
          <div className="ring-3d w-[600px] h-[600px] opacity-10" style={{ animationDuration: '30s' }}></div>
        </div>

        {/* Small Floating Dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-400/40 animate-float-slow"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * -1.5}s`,
              animationDuration: `${6 + i}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enterprise Badge */}
          <div 
            className={`inline-flex items-center gap-4 mb-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="badge">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Enterprise AI Platform
            </div>
            <div className="enterprise-badge">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SOC 2 Certified
            </div>
          </div>

          {/* Main Headline */}
          <h1 
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block">AI Automation Platform</span>
            <span className="block text-gradient-vibrant mt-2">for Modern Enterprises</span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Automate voice calls, HR operations, fleet management, and proposal generation with enterprise-grade AI.
            <span className="text-white font-medium"> Reduce response times by 95% and increase conversions by 47%.</span> Trusted by 500+ teams worldwide.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#demo" className="btn-primary text-base px-10 py-5 group">
              <span className="flex items-center gap-2">
                Schedule Enterprise Demo
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a href="#products" className="btn-secondary text-base px-10 py-5 group">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore Products
              </span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-sm text-zinc-500 mb-8 uppercase tracking-wider font-medium">Powering enterprise operations worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['Healthcare', 'Finance', 'Manufacturing', 'Logistics', 'Technology'].map((industry) => (
                <div 
                  key={industry}
                  className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300">
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}