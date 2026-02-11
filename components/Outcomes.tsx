'use client';

const stats = [
  {
    value: '<60s',
    label: 'Average response time',
    description: 'AI agents respond to customer inquiries in under a minute',
  },
  {
    value: '24/7',
    label: 'Always available',
    description: 'Round-the-clock automation that never sleeps',
  },
  {
    value: '+47%',
    label: 'Efficiency gain',
    description: 'Average productivity increase reported by customers',
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability you can count on',
  },
];

export default function Outcomes() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-purple-400 tracking-wide uppercase mb-4">
            Proven Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Numbers that{' '}
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Join hundreds of companies already transforming their operations with DDW Studio.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-8 text-center group hover:bg-white/[0.03] transition-all duration-300"
            >
              <div className="text-5xl font-bold gradient-text mb-3">{stat.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              <p className="text-sm text-zinc-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 glass-card p-10 lg:p-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white">
                JD
              </div>
            </div>
            <div>
              <svg className="w-10 h-10 text-purple-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                DDW Studio transformed how we handle customer support. What used to take our team hours 
                now happens automatically in seconds. The ROI was visible within the first month.
              </p>
              <div>
                <div className="font-semibold text-white">James Davidson</div>
                <div className="text-sm text-zinc-500">VP of Operations, TechCorp Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}