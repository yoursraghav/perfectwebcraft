import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { HeadingReveal } from '@/components/HeadingReveal'

export type ServiceModule = {
  title: string
  description: string
  specs: string[]
}

export type LifecycleStep = {
  step: string
  phase: string
  timeline: string
  summary: string
  deliverable: string
}

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServicePageProps = {
  eyebrow: string
  title: string
  description: string
  metrics: { label: string; value: string }[]
  modules: ServiceModule[]
  lifecycle: LifecycleStep[]
  deliverables: string[]
  faqs: ServiceFaq[]
}

export function ServicePage({
  eyebrow,
  title,
  description,
  metrics,
  modules,
  lifecycle,
  deliverables,
  faqs,
}: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-10 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-semibold text-slate-600 hover:text-red-600 transition"
            >
              ← Back to All Services
            </Link>

            <div className="mt-8">
              <HeadingReveal eyebrow={eyebrow} title={title} subtitle={description} />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 hover:bg-red-700 transition"
              >
                Request Technical Scope &amp; Estimate →
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-black hover:border-red-600 hover:text-red-600 transition shadow-2xs"
              >
                View Pricing Packages
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
                >
                  <div className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-red-600 sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-1 font-['Inter',sans-serif] text-xs font-semibold text-slate-700">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Detailed Scope Breakdown
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black sm:text-4xl">
                What's Included in This Capability
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                We handle every technical layer in-house with zero outsourcing. Here is an exhaustive
                breakdown of what we design, engineer, and deploy for your project.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((mod, idx) => (
                <div
                  key={mod.title}
                  className="hover-card-elevation flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-2xs hover:border-red-500/50 hover:shadow-lg transition"
                >
                  <div>
                    <span className="font-['Space_Grotesk',sans-serif] text-sm font-bold text-red-600">
                      0{idx + 1}
                    </span>
                    <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-xl font-bold text-black">
                      {mod.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{mod.description}</p>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Technical Specifications
                      </span>
                      <ul className="mt-2.5 space-y-2">
                        {mod.specs.map((spec) => (
                          <li key={spec} className="flex items-start gap-2 text-xs text-slate-800">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Studio Execution Process
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black sm:text-4xl">
                Step-by-Step Delivery Lifecycle
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                A structured, milestone-driven roadmap ensuring complete predictability from day one.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {lifecycle.map((item) => (
                <div
                  key={item.step}
                  className="hover-card-elevation relative rounded-3xl border border-slate-200 bg-white p-7 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-red-600">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-['Space_Grotesk',sans-serif] text-[10px] font-bold text-red-700">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-lg font-bold text-black">
                    {item.phase}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-700">{item.summary}</p>

                  <div className="mt-6 border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Milestone Deliverable
                    </span>
                    <p className="mt-1 text-xs font-semibold text-black">{item.deliverable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                  Deliverables Matrix
                </span>
                <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black sm:text-4xl">
                  Guaranteed Handover Deliverables
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  You receive full intellectual property ownership, zero vendor lock-in, and clean,
                  well-documented codebases ready for immediate production operations.
                </p>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-600/20 hover:bg-red-700 transition"
                  >
                    Start Project Brief →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
                  <h3 className="font-['Space_Grotesk',sans-serif] text-base font-bold text-black mb-4">
                    Included Production Assets &amp; Specifications
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {deliverables.map((d) => (
                      <div
                        key={d}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-xs font-medium text-black shadow-2xs"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                          ✓
                        </span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Service FAQs
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.question}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs"
                >
                  <h3 className="font-['Space_Grotesk',sans-serif] text-base font-bold text-black">
                    {f.question}
                  </h3>
                  <p className="mt-2.5 text-xs leading-6 text-slate-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black sm:text-4xl">
              Ready to Upgrade Your Digital Platform?
            </h2>
            <p className="mt-4 text-base text-slate-700">
              Submit your project brief today and receive a detailed technical specification and fixed-price quote within 24 hours.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition"
              >
                Schedule Technical Discovery →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage
