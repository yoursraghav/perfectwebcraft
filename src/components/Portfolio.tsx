import Link from 'next/link'

const projects = [
  {
    title: 'Aura Financial Platform',
    client: 'Fintech Brand',
    metric: '+142% Conversion Rate',
    description:
      'High-performance analytics dashboard and streamlined client onboarding platform with responsive dynamic charting and secure permissions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Kestrel Aerospace Systems',
    client: 'Industrial Studio',
    metric: '99/100 PageSpeed Rating',
    description:
      'Modern digital showcase and interactive product simulator with sub-50ms worldwide asset delivery and automated build pipelines.',
    tech: ['React', 'Server Actions', 'Edge Caching', 'Cloudflare', 'TypeScript'],
  },
  {
    title: 'Vanguard Health Cloud',
    client: 'Healthcare Platform',
    metric: '3.4x Faster Onboarding',
    description:
      'Compliant client booking portal with automated schedule sync, instant SMS notifications, and zero-downtime deployment.',
    tech: ['Next.js App Router', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Prisma'],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden border-b border-slate-200 bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full border-2 border-black/15 bg-black/[0.02]" />
        <div className="absolute top-20 left-40 h-28 w-28 rounded-full border border-black/25 bg-black/[0.04]" />
        <div className="absolute top-12 right-1/4 h-12 w-12 rounded-full bg-black/10" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full border-2 border-black/10 bg-black/[0.01]" />
        <div className="absolute top-1/2 right-28 h-40 w-40 rounded-full border border-black/20" />
        <div className="absolute top-2/3 left-10 h-20 w-20 rounded-full border border-black/30 bg-black/5" />
        <div className="absolute bottom-10 left-1/3 h-8 w-8 rounded-full bg-black/20" />
        <div className="absolute -bottom-20 right-1/3 h-80 w-80 rounded-full border-2 border-black/15 bg-black/[0.02]" />
        <div className="absolute bottom-24 right-12 h-16 w-16 rounded-full border border-black/30" />
        <div className="absolute top-10 left-1/2 h-4 w-4 rounded-full bg-black/30" />
        <div className="absolute bottom-8 left-20 h-5 w-5 rounded-full bg-black/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
              Selected Work
            </span>
            <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Proven Digital Craftsmanship
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              A curated look at digital platforms we built from scratch and continue to maintain
              for sustained performance and measurable growth.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sm font-semibold text-black transition hover:text-red-600"
            >
              Explore all case studies →
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="hover-card-elevation group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-sm p-8 transition hover:border-red-500/50 hover:shadow-lg"
            >
              <div>
                <div>
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold tracking-wider text-red-600">
                    {project.client}
                  </span>
                </div>

                <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-2xl font-bold text-black transition-colors group-hover:text-red-600">
                  {project.title}
                </h3>

                <div className="mt-3 inline-block rounded-lg border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                  {project.metric}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-700">{project.description}</p>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] text-slate-800 font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
