import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeadingReveal } from '@/components/HeadingReveal'

const serviceCatalog = [
  {
    id: '01',
    title: 'Custom Web Design & Engineering',
    href: '/services/custom-development',
    summary: 'Tailor-made web applications and digital platforms engineered with Next.js App Router, strictly typed TypeScript, and React.',
    deliverables: ['Custom component design system', 'Prisma ORM schema modeling', 'Server actions & secure mutations', 'API integrations & webhook handling'],
    badge: 'Core Competency',
  },
  {
    id: '02',
    title: 'Managed Cloud & Infrastructure',
    href: '/services/cloud-hosting',
    summary: 'Ultra-low-latency serverless edge architecture, managed PostgreSQL clusters, and zero-downtime automated deployment pipelines.',
    deliverables: ['Sub-100ms worldwide delivery', 'Postgres connection pooling', 'Automated SSL & security mitigation', 'Daily snapshots and disaster recovery'],
    badge: 'Infrastructure',
  },
  {
    id: '03',
    title: 'Search Optimization & Performance',
    href: '/services/seo-optimization',
    summary: 'Algorithmic search optimization, programmatic schema metadata, structured JSON-LD, and guaranteed 95+ Google PageSpeed audits.',
    deliverables: ['Comprehensive technical audits', 'OpenGraph and semantic tags', 'Sitemap and search indexing setup', 'PageSpeed & performance tuning'],
    badge: 'Visibility',
  },
  {
    id: '04',
    title: 'Continuous Care & Maintenance',
    href: '/services/ongoing-maintenance',
    summary: 'Proactive uptime monitoring, security patching, library upgrades, and dedicated sprint hours for iterative brand evolution.',
    deliverables: ['Guaranteed < 24hr response', 'Weekly dependency security scans', 'Dedicated monthly design/dev sprints', 'Quarterly roadmap reviews'],
    badge: 'Managed Care',
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <HeadingReveal
              eyebrow="Services & Capabilities"
              title="Design & Engineering for Thoughtful Brands."
              subtitle="From bespoke digital product design to managed cloud infrastructure, we provide complete, integrated execution."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceCatalog.map((item) => (
              <div
                key={item.id}
                className="hover-card-elevation flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 hover:border-red-500/50 hover:shadow-lg transition shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk',sans-serif] text-sm font-bold text-red-600">
                      {item.id}
                    </span>
                    <span className="rounded-full bg-red-50 px-3 py-1 font-['Space_Grotesk',sans-serif] text-xs font-medium text-red-700">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="mt-6 font-['Space_Grotesk',sans-serif] text-2xl font-bold text-black">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    {item.summary}
                  </p>

                  <div className="mt-8 border-t border-slate-100 pt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-black">
                      Key Deliverables
                    </div>
                    <ul className="mt-3 space-y-2">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-2.5 text-xs text-slate-800">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-4 flex items-center justify-between border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="text-xs font-semibold text-black hover:text-red-600 transition"
                  >
                    View detailed breakdown →
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-red-600 text-white px-4 py-2 text-xs font-bold hover:bg-red-700 transition shadow-2xs"
                  >
                    Request Scope
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 py-20 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black">
              Need a Custom Solution or Migration?
            </h2>
            <p className="mt-4 text-base text-slate-700">
              We specialize in seamless website redesigns, legacy refactoring, and custom technical roadmaps.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-red-600/20 transition"
              >
                Schedule Discovery Call →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
