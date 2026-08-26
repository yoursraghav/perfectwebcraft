import { Navbar } from '@/components/Navbar'
import { LeadForm } from '@/components/LeadForm'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                  Direct Studio Intake
                </span>
                <h1 className="mt-4 font-['Space_Grotesk',sans-serif] text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
                  Start Your Project With Confidence.
                </h1>
                <p className="mt-6 text-base leading-7 text-slate-700">
                  Submit your project requirements or website audit request below. We review all inquiries within 24 hours and provide a fixed-price technical scope.
                </p>

                <div className="mt-10 space-y-6 border-t border-slate-200 pt-8">
                  <div>
                    <div className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-600">
                      Direct Email
                    </div>
                    <a
                      href="mailto:hello@perfectwebcraft.com"
                      className="mt-1 block text-sm font-semibold text-red-600 hover:text-black transition"
                    >
                      hello@perfectwebcraft.com
                    </a>
                  </div>

                  <div>
                    <div className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-600">
                      Response Time
                    </div>
                    <div className="mt-1 text-sm font-semibold text-black">
                      Guaranteed within 1 business day
                    </div>
                  </div>

                  <div>
                    <div className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-600">
                      Studio Terms
                    </div>
                    <div className="mt-1 text-sm text-slate-700">
                      Fixed-price milestones, zero surprise costs, full IP transfer.
                    </div>
                  </div>
                </div>
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
