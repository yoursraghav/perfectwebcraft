'use client'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HeadingReveal } from '@/components/HeadingReveal'

const baseTiers = [
  {
    id: 'launchpad',
    name: 'Launchpad Studio',
    tagline: 'Ideal for early-stage brands and high-impact website launches.',
    priceDisplay: '₹2,000',
    period: 'one-time milestone',
    highlight: false,
    features: [
      'Bespoke Next.js & React engineering',
      'Tailored modern typography & design system',
      'PostgreSQL with Prisma database setup',
      'Integrated direct lead intake form',
      '100% Mobile & tablet responsive layouts',
      '95+ PageSpeed performance benchmark',
      '2 Weeks turnaround time',
    ],
    cta: 'Select Launchpad',
  },
  {
    id: 'growth',
    name: 'Growth Architecture',
    tagline: 'Comprehensive digital platform for expanding companies.',
    priceDisplay: '₹5,000',
    period: 'one-time milestone',
    highlight: true,
    features: [
      'Everything in Launchpad Studio',
      'Multi-page application architecture',
      'Custom database schema & relations',
      'Dynamic filtering, search & pagination',
      'Advanced search & OpenGraph metadata suite',
      'Automated cloud deployment setup',
      '30 Days post-launch warranty & care',
    ],
    cta: 'Engage Growth Tier',
  },
  {
    id: 'enterprise',
    name: 'Custom Studio Engagement',
    tagline: 'Dedicated design & engineering team for specialized software.',
    priceDisplay: 'Custom',
    period: 'scoped to requirements',
    highlight: false,
    features: [
      'Bespoke web application & SaaS platform',
      'Managed cloud & edge caching infrastructure',
      'Custom API & third-party integrations',
      'Comprehensive security & performance audit',
      'Dedicated direct communication with leads',
      'Guaranteed SLA (< 24hr response time)',
      'Ongoing quarterly feature sprints',
    ],
    cta: 'Discuss Custom Scope',
  },
]

const faqs = [
  {
    question: 'How do you guarantee no surprise invoices?',
    answer: 'We scope every project down to exact component deliverables and milestones prior to starting. All quotes are fixed-price milestones.',
  },
  {
    question: 'What is your typical turnaround timeline?',
    answer: 'Standard projects launch in 10 to 14 business days. Larger multi-page platforms typically take between 3 to 5 weeks.',
  },
  {
    question: 'Do I own 100% of the source code and design assets?',
    answer: 'Yes. Upon final milestone release, complete GitHub repository ownership and deployment credentials are fully transferred to you.',
  },
  {
    question: 'What happens after launch?',
    answer: 'Every project includes a 30-day warranty. We also offer ongoing monthly maintenance retainers for continuous improvements and hosting management.',
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      <main className="flex-1 page-transition">
        <section id="plans" className="relative border-b border-slate-200 bg-slate-50 py-20 sm:py-28">
          <div className="bg-grid-pattern absolute inset-0 opacity-40" />
          <div className="studio-glow top-1/4 right-1/4 h-80 w-80 bg-red-500 opacity-5" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <HeadingReveal
                align="center"
                eyebrow="Transparent Pricing"
                title="Straightforward, Value-Driven Packages."
                subtitle="Zero hidden fees. Thoughtful design and precision engineering tailored for maximum brand impact."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {baseTiers.map((tier) => (
              <div
                key={tier.name}
                className={`hover-card-elevation relative flex flex-col justify-between rounded-3xl border p-8 ${
                  tier.highlight
                    ? 'border-red-600 bg-white shadow-xl ring-1 ring-red-600'
                    : 'border-slate-200 bg-white shadow-2xs'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-0.5 font-['Space_Grotesk',sans-serif] text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <h2 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-black">
                    {tier.name}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {tier.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2 border-b border-slate-100 pb-6">
                    <span className="font-['Space_Grotesk',sans-serif] text-4xl font-extrabold text-red-600">
                      {tier.priceDisplay}
                    </span>
                    <span className="font-['Space_Grotesk',sans-serif] text-xs text-slate-500">
                      /{tier.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-slate-800">
                        <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 pt-4">
                  <Link
                    href={`/contact?plan=${tier.id}`}
                    className={`inline-flex w-full items-center justify-center rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition ${
                      tier.highlight
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/20 hover:bg-red-700'
                        : 'bg-white text-black hover:bg-slate-50 border border-slate-300'
                    }`}
                  >
                    {tier.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-red-600">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 font-['Space_Grotesk',sans-serif] text-3xl font-bold text-black">
                Everything You Need to Know
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs">
                  <h3 className="font-['Space_Grotesk',sans-serif] text-base font-bold text-black">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-xs leading-6 text-slate-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
