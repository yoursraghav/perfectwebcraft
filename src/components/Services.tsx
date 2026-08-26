import Link from 'next/link'

const services = [
  {
    id: '01',
    title: 'Custom Web Design & Build',
    category: 'Full-Stack Development',
    description:
      'Thoughtfully engineered websites and digital products crafted for speed, elegance, and effortless scalability across all screens.',
    highlights: [
      'Modern Next.js & React architecture',
      'Fluid typographic & responsive systems',
      'Clean database modeling & APIs',
    ],
  },
  {
    id: '02',
    title: 'Design Systems & UI/UX',
    category: 'Interface & Aesthetics',
    description:
      'Minimalist, high-converting digital interfaces rooted in warm modernist typography and cohesive component libraries.',
    highlights: [
      'Atomic Figma design libraries',
      'Subtle, intuitive micro-interactions',
      'Multi-device responsive layouts',
    ],
  },
  {
    id: '03',
    title: 'Managed Cloud & Infrastructure',
    category: 'Cloud & Performance',
    description:
      'Fast, secure global hosting and managed databases tuned for high availability, automatic backups, and seamless deployments.',
    highlights: [
      'Managed Postgres & Edge delivery',
      'Automated preview environments',
      'Global security & SSL enforcement',
    ],
  },
  {
    id: '04',
    title: 'Ongoing Growth & Support',
    category: 'Continuous Care',
    description:
      'Continuous performance tuning, search visibility enhancements, and regular design sprints to elevate your digital presence.',
    highlights: [
      '99+ PageSpeed score benchmark',
      'Structured search & social metadata',
      'Proactive updates & dedicated care',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="relative border-b border-slate-200 bg-white py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
      <div className="studio-glow top-1/3 left-10 h-72 w-72 bg-red-500 opacity-5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
              Our Capabilities
            </span>
            <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-black sm:text-4xl">
              End-to-End Digital Craftsmanship
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              We replace fragmented agencies with an integrated design and engineering partner
              focused strictly on delivering exceptional results.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="#contact"
              className="inline-flex items-center text-sm font-semibold text-black transition hover:text-red-600"
            >
              Discuss your project →
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="hover-card-elevation group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-red-500/50 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk',sans-serif] text-sm font-bold text-red-600">
                    {service.id}
                  </span>
                  <span className="rounded-full bg-red-50 px-3 py-1 font-['Inter',sans-serif] text-[10px] font-medium uppercase tracking-wider text-red-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-5 font-['Space_Grotesk',sans-serif] text-xl font-bold text-black transition-colors group-hover:text-red-600">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>

                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-slate-800">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="#contact"
                  className="font-['Space_Grotesk',sans-serif] flex items-center gap-1.5 text-xs font-semibold text-black transition-colors group-hover:text-red-600"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
