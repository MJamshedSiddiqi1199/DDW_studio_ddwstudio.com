'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "DDW Studio transformed our entire sales process. What used to take our team days now happens in hours. The ROI was visible within the first month.",
    author: "James Davidson",
    role: "VP of Operations",
    company: "TechCorp Inc.",
    image: "JD",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote: "The AI solutions from DDW are unlike anything we've seen. They truly understand enterprise needs and deliver solutions that scale.",
    author: "Sarah Mitchell",
    role: "Chief Digital Officer",
    company: "Meridian Healthcare",
    image: "SM",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    quote: "We closed our biggest deal ever using Proposal Gen. The speed and quality of output is remarkable. DDW is now essential to our workflow.",
    author: "Michael Chen",
    role: "CEO",
    company: "Apex Logistics",
    image: "MC",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Testimonials() {
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
    <section ref={sectionRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="badge mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            Client Success
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            What Leaders <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about working with DDW Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`testimonial-card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <svg className="w-10 h-10 text-indigo-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-lg text-white leading-relaxed mb-8">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold font-display`}>
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}