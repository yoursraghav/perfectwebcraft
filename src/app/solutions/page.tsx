import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeadingReveal } from '@/components/HeadingReveal'

const solutions = [
  {
    title: 'FinTech & High-Frequency Analytics',
    industry: 'Financial Technology',
    lead: 'Fast data rendering, secure encryption, and real-time interactive interfaces.',
    features: ['High-throughput live charts', 'SOC2 security standards', 'Zero-latency edge caching', 'Stripe payment workflows'],
  },
  {
    title: 'SaaS Platforms & Modern Tooling',
    industry: 'Cloud Software',
    lead: 'Multi-tenant web architectures, interactive documentation, and high-conversion onboarding.',
    features: ['Next.js App Router multi-tenancy', 'Role-based access control', 'Interactive API sandboxes', 'Automated billing & subscriptions'],
  },
  {
    title: 'HealthTech & Client Portals',
    industry: 'Healthcare & Wellness',
    lead: 'Secure client booking, automated scheduling, and encrypted private record portals.',
    features: ['End-to-end data encryption', 'Telehealth video integration', 'Audit logging & compliance', 'Automated SMS & email dispatch'],
  },
  {
    title: 'Modern Commerce & Brand Stores',
    industry: 'DTC & Retail Brands',
    lead: 'Instantaneous page loads, headless checkout architectures, and high-concurrency resilience.',
    features: ['Instant inventory sync', 'Dynamic localized currencies', 'Optimized checkout flow UX', '99.99% flash sale uptime'],
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <HeadingReveal
              eyebrow="Industry Solutions"
              title="Tailored for Your Market."
              subtitle="We tailor our software architecture, security posture, and UI/UX systems to the specific requirements of your industry."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="hover-card-elevation flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 hover:border-red-500/50 hover:shadow-lg transition shadow-2xs"
              >
                <div>
                  <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-red-600">
                    {item.industry}
                  </span>

                  <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-2xl font-bold text-black">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {item.lead}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-black hover:text-red-600 transition"
                  >
                    Consult on this solution →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
