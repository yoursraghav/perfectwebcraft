import { LoadingScreen } from '@/components/LoadingScreen'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Portfolio } from '@/components/Portfolio'
import { LeadForm } from '@/components/LeadForm'
import { Footer } from '@/components/Footer'



const processSteps = [
  {
    step: '01',
    title: 'Discovery & Creative Direction',
    description:
      'We understand your brand essence, market position, and project goals to build a clear scope and refined design roadmap.',
  },
  {
    step: '02',
    title: 'Bespoke Design & Prototyping',
    description:
      'Crafting high-fidelity UI systems, typographic hierarchies, and fluid interaction patterns tailored exclusively to your brand.',
  },
  {
    step: '03',
    title: 'Precision Engineering',
    description:
      'Developing strictly typed, responsive React and Next.js applications engineered for high performance and smooth animation.',
  },
  {
    step: '04',
    title: 'Launch & Continuous Care',
    description:
      'Deploying to global edge infrastructure with automated backups, SEO verification, and ongoing maintenance retainers.',
  },
]

const trustItems = [
  { number: '30 Days', label: 'Avg. Delivery Time' },
]

export default function HomePage() {
  return (
    <div className="page-entrance flex min-h-screen flex-col bg-white text-black">
      <LoadingScreen />
      <Navbar />

      <main className="flex-1">
        <Hero />


        <Services />

        <section
          id="trust"
          className="border-b border-slate-200 bg-white py-16"
          aria-label="Trust metrics"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-center">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white px-16 py-8 text-center shadow-sm"
                >
                  <div className="font-['Space_Grotesk',sans-serif] text-3xl font-bold text-red-600 sm:text-4xl">
                    {item.number}
                  </div>
                  <div className="mt-2 font-['Inter',sans-serif] text-xs font-medium text-slate-600">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />

        <section
          id="process"
          className="relative overflow-hidden border-b border-slate-200 bg-white py-24 sm:py-32"
          aria-label="Our process"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-24 right-10 h-88 w-88 rounded-full border-2 border-black/15 bg-black/[0.02]" />
            <div className="absolute top-16 left-12 h-36 w-36 rounded-full border border-black/20" />
            <div className="absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-black/10" />
            <div className="absolute top-1/3 right-1/3 h-6 w-6 rounded-full bg-black/30" />
            <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full border-2 border-black/15 bg-black/[0.03]" />
            <div className="absolute bottom-20 right-24 h-44 w-44 rounded-full border border-black/25 bg-black/5" />
            <div className="absolute bottom-10 left-1/2 h-8 w-8 rounded-full bg-black/20" />
            <div className="absolute top-8 right-1/4 h-4 w-4 rounded-full bg-black/40" />
            <div className="absolute top-2/3 right-10 h-10 w-10 rounded-full border border-black/35" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Our Process
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-black sm:text-4xl">
                The Thoughtful Studio Approach
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                A transparent, collaborative workflow that prioritizes design integrity,
                fast delivery, and measurable brand growth.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="hover-card-elevation relative rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-sm p-7 transition hover:border-red-500/50 hover:shadow-lg"
                >
                  <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-red-600">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-['Space_Grotesk',sans-serif] text-lg font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative bg-white py-24 sm:py-32"
          aria-label="Contact and project inquiry"
        >
          <div className="studio-glow bottom-10 right-10 h-96 w-96 bg-red-500 opacity-5" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                  Start a Conversation
                </span>
                <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Let's Create Something Exceptional Together.
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  Ready to upgrade your web presence with high-performance design and engineering?
                  Share your requirements and receive a comprehensive proposal within 24 hours.
                </p>

                <ul className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-sm text-slate-800">
                  {[
                    'Guaranteed fixed-price quotes & transparent scopes',
                    'Direct collaboration with senior designers & developers',
                    'Complete source code ownership & frictionless handover',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 font-['Space_Grotesk',sans-serif] text-xs font-bold text-red-600 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-7">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
