import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { ArrowLink, Photo, Reveal, Stat, Title } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Marquee, TestimonialSlider } from '../components/Content'
import { Holo } from '../components/Holo'
import { Nav } from '../components/Nav'
import { ProjectCard } from '../components/ProjectCard'
import { ServiceCard } from '../components/ServiceCard'
import { APPROACH, CLIENTS, HOME, PROJECTS, SERVICES, TESTIMONIALS } from '../data'
import { cx } from '../lib/cx'
import { useDocumentTitle } from '../lib/storage'

const EASE = [0.22, 1, 0.36, 1] as const

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-[var(--radius-card)] bg-card px-5 pt-3 pb-6 sm:px-8 lg:pb-9">
      <Nav />
      <div className="relative flex flex-col lg:block lg:h-[clamp(560px,calc(100svh-262px),860px)]">
        {/* Stats, top right */}
        <div className="order-1 mt-8 grid grid-cols-3 gap-4 sm:mt-10 lg:absolute lg:top-[6%] lg:right-0 lg:mt-0 lg:flex lg:gap-[clamp(1.5rem,0.5rem+1.6vw,2.75rem)]">
          {HOME.stats.map((s) => (
            <Stat key={s.value} value={s.value} label={s.label} />
          ))}
        </div>

        {/* The chrome knot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="order-3 mx-auto -my-4 w-[min(92vw,480px)] lg:absolute lg:top-[3%] lg:left-[11%] lg:m-0 lg:w-[min(39vw,calc((100svh-262px)*0.86),640px)]"
        >
          <Holo kind="knot" motion priority />
        </motion.div>

        {/* Captions, left */}
        <p className="caps relative z-10 order-2 mt-10 max-w-[11.5rem] lg:absolute lg:top-[40%] lg:left-0 lg:mt-0">{HOME.captionTop}</p>
        <p className="caps relative z-10 order-5 mt-8 max-w-[14rem] self-end text-right lg:absolute lg:top-[80%] lg:left-[11%] lg:mt-0 lg:self-auto">{HOME.captionBottom}</p>

        {/* Reach out + headline, bottom right */}
        <div className="relative z-10 order-4 mt-6 flex flex-col items-end lg:absolute lg:right-0 lg:bottom-0 lg:mt-0">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: EASE }} className="mb-[clamp(1rem,4svh,2.6rem)]">
            <ArrowLink to="/contact">{HOME.reachOut}</ArrowLink>
          </motion.div>
          <h1 id="hero-title" className="display text-right text-[clamp(3.3rem,17.2vw,6rem)] sm:text-[clamp(4rem,13vw,8rem)] lg:text-[min(10.1vw,17svh,10.6rem)]">
            {HOME.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [active, setActive] = useState(1)
  const shown = SERVICES.slice(0, 3)
  return (
    <section aria-labelledby="services-title" className="grid gap-2 md:grid-cols-2">
      <Card className="flex min-h-[340px] flex-col p-6 sm:p-8 md:min-h-0">
        <Title id="services-title" lines={HOME.servicesTitle} className="relative z-10 self-end" />
        <div aria-hidden className="pointer-events-none absolute bottom-[-16%] left-[-6%] w-[min(78%,480px)]">
          <Holo kind="sphere" motion />
        </div>
        <ArrowLink to="/services" tone="ink" size="sm" className="relative z-10 mt-auto self-end">
          All services
        </ArrowLink>
      </Card>
      <ul className="grid gap-2">
        {shown.map((s, i) => (
          <li key={s.slug}>
            <ServiceCard service={s} active={active === i} onActivate={() => setActive(i)} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function Manifesto() {
  return (
    <Card as="section" tone="night" aria-labelledby="manifesto-title" className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div className="flex flex-col justify-between gap-10">
        <Reveal>
          <Title id="manifesto-title" lines={HOME.manifestoTitle} align="left" size="lg" />
        </Reveal>
        <div className="grid max-w-lg grid-cols-3 gap-4">
          {HOME.stats.map((s) => (
            <Stat key={s.value} value={s.value} label={s.label} align="left" tone="light" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="caps ml-auto max-w-[26rem] text-right text-[13px] leading-[1.2] text-white">{HOME.manifesto}</p>
        <Photo image="nocturne" ratio="4/3" className="rounded-[var(--radius-card-sm)]" />
      </div>
    </Card>
  )
}

function Approach() {
  return (
    <section aria-labelledby="approach-title" className="grid gap-2">
      <Card className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="order-2 max-w-sm text-muted md:order-1">Four habits that shape every project, whatever its size.</p>
        <Title id="approach-title" lines={HOME.approachTitle} className="order-1 md:order-2" />
      </Card>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {APPROACH.map((a, i) => (
          <li key={a.title} className="h-full">
            <Reveal delay={i * 0.06} className="h-full">
              <Card tone={a.tone} className="flex h-full min-h-[380px] flex-col p-6 sm:p-7">
                <p className={cx('caps tabular-nums', a.tone === 'white' ? 'text-muted' : 'text-white/80')}>0{i + 1}</p>
                <h3 className="mt-2 self-end text-right text-[clamp(1.35rem,1.05rem+0.8vw,1.75rem)] leading-[1.05] tracking-[-0.03em] uppercase">
                  {a.title.split(' ').map((w) => (
                    <span key={w} className="block">
                      {w}
                    </span>
                  ))}
                </h3>
                <div className="mx-auto my-4 w-[62%] max-w-[220px]" aria-hidden>
                  <Holo kind={a.art} />
                </div>
                <p className={cx('mt-auto text-[15px] leading-snug', a.tone === 'white' ? 'text-muted' : 'text-white/85')}>{a.body}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Work() {
  return (
    <section aria-labelledby="work-title" className="grid gap-2">
      <Card className="flex flex-wrap items-end justify-between gap-6 p-6 sm:p-8">
        <Title id="work-title" lines={HOME.workTitle} align="left" />
        <ArrowLink to="/work">All projects</ArrowLink>
      </Card>
      <div className="grid gap-2 md:grid-cols-2">
        {PROJECTS.slice(0, 4).map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} size="lg" className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Testimony() {
  return (
    <section id="testimony" aria-labelledby="testimony-title" className="grid scroll-mt-4 gap-2 lg:grid-cols-[1fr_1.45fr]">
      <Card className="flex min-h-[320px] flex-col justify-between gap-8 p-6 sm:p-8">
        <Title id="testimony-title" lines={HOME.testimonyTitle} align="left" />
        <div className="flex items-end justify-between gap-6">
          <div className="w-28" aria-hidden>
            <Holo kind="star" motion />
          </div>
          <p className="max-w-[16rem] text-right text-muted">
            <span className="block text-4xl font-normal tracking-[-0.05em] text-ink">4.9 / 5</span>
            Average client rating across 28 launches since 2026.
          </p>
        </div>
      </Card>
      <Card tone="violet" className="p-6 sm:p-10">
        <TestimonialSlider items={TESTIMONIALS} />
      </Card>
    </section>
  )
}

function Clients() {
  return (
    <Card as="section" aria-label={HOME.clientsLabel} className="px-6 py-8 sm:px-8">
      <p className="caps mb-5 text-muted">{HOME.clientsLabel}</p>
      <Marquee items={CLIENTS} />
    </Card>
  )
}

function Cta() {
  return (
    <Card as="section" aria-labelledby="cta-title" className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-end">
      <div className="mx-auto w-[min(70vw,340px)] md:mx-0" aria-hidden>
        <Holo kind="cloud" motion />
      </div>
      <div className="flex flex-col items-end gap-6 text-right">
        <Title id="cta-title" lines={HOME.cta.title} size="lg" />
        <p className="max-w-md text-muted">{HOME.cta.body}</p>
        <ButtonLink to="/contact" variant="violet" size="lg" iconRight={<ArrowRight className="size-5" />}>
          {HOME.cta.action}
        </ButtonLink>
      </div>
    </Card>
  )
}

export function Home() {
  useDocumentTitle()
  return (
    <div className="grid gap-2 p-2">
      <Hero />
      <Services />
      <Manifesto />
      <Approach />
      <Work />
      <Testimony />
      <Clients />
      <Cta />
    </div>
  )
}
