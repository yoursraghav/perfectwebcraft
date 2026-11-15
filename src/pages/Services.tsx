import { ArrowRight, Check } from 'lucide-react'

import { ArrowLink, Badge, Reveal, Title } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Accordion } from '../components/Content'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { ENGAGEMENTS, FAQ, PRICING_NOTE, PROCESS, SERVICES } from '../data'
import { cx } from '../lib/cx'
import { useDocumentTitle } from '../lib/storage'

export function Services() {
  useDocumentTitle('Services')
  return (
    <div className="grid gap-2 p-2">
      <PageHero
        title={['What', 'we do']}
        eyebrow="Three disciplines, one studio"
        intro="Brand, web and product design under one roof, so the mark, the site and the interface come from the same idea."
        art={<Holo kind="sphere" motion />}
        aside={
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className="round inline-flex h-10 items-center rounded-full border border-line-strong px-4 text-sm font-medium transition-colors hov:border-violet hov:text-violet">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        }
      />

      {SERVICES.map((s, i) => (
        <Card key={s.slug} as="section" id={s.slug} aria-labelledby={`${s.slug}-title`} tone={i === 1 ? 'violet' : 'white'} className="grid scroll-mt-2 gap-8 p-6 sm:p-8 lg:grid-cols-[auto_1fr_1fr] lg:items-center">
          <div className="mx-auto w-[min(60vw,260px)] lg:mx-0 lg:w-[220px]" aria-hidden>
            <Holo kind={s.art} motion />
          </div>
          <div>
            <p className={cx('caps tabular-nums', i === 1 ? 'text-white/80' : 'text-muted')}>0{i + 1}</p>
            <h2 id={`${s.slug}-title`} className="display mt-3 text-[clamp(2.2rem,1.4rem+2.4vw,4rem)] leading-[0.9]">
              {s.title}
            </h2>
            <p className={cx('mt-5 max-w-md text-pretty', i === 1 ? 'text-white/90' : 'text-ink-2')}>{s.intro}</p>
          </div>
          <div>
            <h3 className={cx('caps', i === 1 ? 'text-white/80' : 'text-muted')}>Deliverables</h3>
            <ul className={cx('mt-3 divide-y border-y', i === 1 ? 'divide-white/20 border-white/20' : 'divide-line border-line')}>
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-center justify-between gap-4 py-3 text-[15px]">
                  {d}
                  <Check className={cx('size-4 shrink-0', i === 1 ? 'text-white' : 'text-violet')} aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}

      <section aria-labelledby="process-title" className="grid gap-2">
        <Card className="p-6 sm:p-8">
          <Title id="process-title" lines={['How a project', 'runs']} />
        </Card>
        <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <li key={p.step}>
              <Reveal delay={i * 0.06} className="h-full">
                <Card className="flex h-full min-h-[260px] flex-col p-6 sm:p-7">
                  <p className="text-[3.5rem] leading-none font-normal tracking-[-0.06em] text-violet tabular-nums">{p.step}</p>
                  <h3 className="mt-auto pt-10 text-2xl font-medium tracking-[-0.03em] uppercase">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{p.body}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="engage-title" className="grid gap-2">
        <Card className="grid gap-4 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="order-2 max-w-sm text-muted md:order-1">Three packages, each fixed-scope. Pick the one that matches where your business is; we confirm the exact price after the brief.</p>
          <Title id="engage-title" lines={['Packages', 'and prices']} className="order-1 md:order-2" />
        </Card>
        <ul className="grid gap-2 lg:grid-cols-3">
          {ENGAGEMENTS.map((e) => (
            <li key={e.name}>
              <Card tone={e.featured ? 'night' : 'white'} className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] uppercase">{e.name}</h3>
                    <p className={cx('caps mt-1.5 text-[13px]', e.featured ? 'text-night-muted' : 'text-muted')}>{e.tier}</p>
                  </div>
                  {e.featured && <Badge tone="light">Most chosen</Badge>}
                </div>
                <p className="mt-7 text-[1.6rem] leading-none tracking-[-0.05em] tabular-nums md:text-[2.3rem] lg:text-[1.7rem] xl:text-[2.2rem]">{e.price}</p>
                <p className={cx('mt-3 text-sm', e.featured ? 'text-night-muted' : 'text-muted')}>One-off, fixed price</p>
                <p className={cx('mt-5 md:max-w-[58ch] lg:max-w-none', e.featured ? 'text-white/90' : 'text-ink-2')}>{e.lead}</p>
                <dl className={cx('mt-6 grid gap-3.5 border-t pt-5 text-[14px] md:grid-cols-2 md:gap-x-10 md:gap-y-4 lg:grid-cols-1 lg:gap-x-0', e.featured ? 'border-white/20' : 'border-line')}>
                  {e.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className={cx('caps text-[11px]', e.featured ? 'text-night-muted' : 'text-muted')}>{spec.label}</dt>
                      <dd className="mt-1 leading-snug md:max-w-[38ch] lg:max-w-none">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto pt-8">
                  <ButtonLink to="/contact" variant={e.featured ? 'light' : 'outline'} className="w-full justify-center md:w-auto lg:w-full" iconRight={<ArrowRight className="size-4" />}>
                    Start with {e.name}
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <p className="max-w-[72ch] px-1 text-[13px] leading-relaxed text-muted">{PRICING_NOTE}</p>
      </section>

      <Card as="section" aria-labelledby="faq-title" className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col justify-between gap-8">
          <Title id="faq-title" lines={['Questions', 'we hear']} align="left" />
          <ArrowLink to="/contact" size="sm">
            Ask us something else
          </ArrowLink>
        </div>
        <Accordion items={FAQ} />
      </Card>
    </div>
  )
}
