import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeadingReveal } from '@/components/HeadingReveal'

const resources = [
  {
    title: 'Modern Web Performance & Vitals Guide',
    category: 'Performance',
    description: 'A comprehensive checklist for sub-50ms responsiveness and 99+ Google PageSpeed benchmarks on modern web stacks.',
    readTime: '8 min read',
    tag: 'Technical Guide',
  },
  {
    title: 'Postgres & Modern Database Architecture Blueprint',
    category: 'Architecture',
    description: 'Production setup guide for serverless connection pooling, migration automation, and strictly typed ORM patterns.',
    readTime: '12 min read',
    tag: 'Database Spec',
  },
  {
    title: 'Warm Modernist Typography & CSS Design Tokens',
    category: 'Design Systems',
    description: 'Grid-aligned responsive layout primitives, harmonious color ramps, and fluid geometric typography scales.',
    readTime: '6 min read',
    tag: 'UI/UX Token',
  },
  {
    title: 'Server-Side Security & Data Validation Best Practices',
    category: 'Backend Security',
    description: 'Best practices for validating FormData, rate-limiting server actions, and shielding endpoints from DDoS bots.',
    readTime: '10 min read',
    tag: 'Security Spec',
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <HeadingReveal
              eyebrow="Studio Resources"
              title="Design & Engineering Blueprints."
              subtitle="Curated architectural guides, performance frameworks, and design system specifications crafted by our team."
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {resources.map((item) => (
              <div
                key={item.title}
                className="hover-card-elevation flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 hover:border-red-500/50 hover:shadow-lg transition shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold text-red-600">
                      {item.category}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-0.5 font-['Space_Grotesk',sans-serif] text-[10px] text-slate-800 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="mt-4 font-['Space_Grotesk',sans-serif] text-xl font-bold text-black">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-xs leading-6 text-slate-700">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="font-['Inter',sans-serif] text-[11px] text-slate-500">
                    {item.readTime}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-black hover:text-red-600 transition"
                  >
                    Request Full Spec →
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
