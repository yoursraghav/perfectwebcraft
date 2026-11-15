import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { MENU, NAV, SITE } from '../data'
import { cx } from '../lib/cx'
import { IconButton } from './Button'
import { Logo } from './Bits'
import { Drawer } from './Overlay'

/** Header row that sits inside the first card of every page. */
export function Nav({ tone = 'white' }: { tone?: 'white' | 'night' }) {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const light = tone === 'night'
  return (
    <header className="relative z-10 flex h-14 items-center justify-between gap-4">
      <Link to="/" aria-label={`${SITE.name} home`} className="round -m-1 rounded-full p-1">
        <Logo light={light} />
      </Link>
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-[clamp(2rem,1rem+3.4vw,5.5rem)]">
          {NAV.map((item) => {
            const active = item.to.includes('#') ? pathname === '/' && hash === item.to.slice(1) : pathname.startsWith(item.to)
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={cx(
                    'caps relative inline-flex min-h-10 items-center text-[13px] transition-colors',
                    'after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-[var(--duration-base)] hov:after:scale-x-100',
                    active && 'after:scale-x-100',
                    light ? 'text-white' : 'text-ink',
                    active && !light && 'text-violet',
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <IconButton aria-label="Open menu" aria-expanded={open} aria-haspopup="dialog" tone={light ? 'light' : 'ink'} onClick={() => setOpen(true)}>
        <svg viewBox="0 0 20 20" className="size-[18px]" aria-hidden>
          <path d="M5 6.5h10M5 10h10M5 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} label="Site menu">
        <nav aria-label="Menu" className="mt-6 flex-1">
          <ul className="flex flex-col">
            {MENU.map((item, i) => (
              <motion.li key={item.to} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group display flex items-center justify-between border-b border-white/12 py-4 text-[clamp(2.2rem,1.6rem+2.4vw,3.6rem)] transition-colors hov:text-violet-light"
                >
                  {item.label}
                  <ArrowUpRight className="size-8 opacity-0 transition-[opacity,transform] duration-[var(--duration-base)] group-hov:opacity-100" strokeWidth={1.4} aria-hidden />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 grid gap-6 text-sm text-night-muted sm:grid-cols-2">
          <div>
            <p className="caps mb-2 text-white">Say hello</p>
            <a className="block min-h-10 py-2 text-white underline-offset-4 hov:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="caps mb-2 text-white">Studio</p>
            <p className="py-2 text-white">{SITE.city}, {SITE.country}</p>
          </div>
        </div>
      </Drawer>
    </header>
  )
}

/** The first card of an inner page: header row, a big title and an optional intro/aside. */
export function PageHero({
  title,
  eyebrow,
  intro,
  aside,
  art,
  children,
}: {
  title: string[]
  eyebrow?: string
  intro?: string
  aside?: React.ReactNode
  art?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden rounded-[var(--radius-card)] bg-card px-5 pt-3 pb-8 sm:px-8 sm:pb-10">
      <Nav />
      <div className="relative mt-10 grid gap-8 md:mt-16 lg:grid-cols-[minmax(0,20rem)_1fr_auto] lg:items-end lg:gap-6">
        <div className="order-3 max-w-sm lg:order-1">
          {eyebrow && <p className="caps mb-3 text-violet">{eyebrow}</p>}
          {intro && <p className="text-[17px] leading-relaxed text-pretty text-ink-2">{intro}</p>}
          {aside}
        </div>
        {art ? (
          <div className="pointer-events-none order-2 mx-auto w-[min(62vw,300px)] self-center lg:w-[min(22vw,340px)] lg:-translate-x-[8%]" aria-hidden>
            {art}
          </div>
        ) : (
          <div className="hidden lg:order-2 lg:block" />
        )}
        <h1 className="display order-1 text-right text-[clamp(3.4rem,0.8rem+9.2vw,10rem)] tracking-[-0.06em] lg:order-3">
          {title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h1>
      </div>
      {children}
    </section>
  )
}
