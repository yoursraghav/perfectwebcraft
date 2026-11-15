import { ArrowUpRight } from 'lucide-react'
import { animate, motion, useInView, useReducedMotion, type HTMLMotionProps } from 'motion/react'
import { useEffect, useRef, useState, type ButtonHTMLAttributes, type ImgHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router'

import { IMAGES, SITE, type ImageKey } from '../data'
import { findBrandLogo } from '../lib/brandLogo'
import { cx } from '../lib/cx'

/** The violet "Reach out ↗" link: caps text with an arrow that nudges on hover. */
export function ArrowLink({
  className,
  tone = 'violet',
  size = 'md',
  children,
  ...rest
}: LinkProps & { tone?: 'violet' | 'ink' | 'light'; size?: 'sm' | 'md' | 'lg'; 'data-force'?: string }) {
  return (
    <Link
      className={cx(
        'group inline-flex min-h-10 items-center gap-1.5 font-medium uppercase tracking-[-0.02em] transition-colors duration-[var(--duration-fast)]',
        size === 'sm' && 'text-sm',
        size === 'md' && 'text-[clamp(1.1rem,0.9rem+0.6vw,1.6rem)]',
        size === 'lg' && 'text-[clamp(1.4rem,1rem+1.2vw,2.25rem)]',
        tone === 'violet' && 'text-violet hov:text-violet-deep',
        tone === 'ink' && 'text-ink hov:text-violet',
        tone === 'light' && 'on-dark text-white hov:text-violet-light',
        className,
      )}
      {...rest}
    >
      {children}
      <ArrowUpRight
        className="size-[1.15em] shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-out-soft)] group-hov:translate-x-0.5 group-hov:-translate-y-0.5"
        strokeWidth={1.6}
        aria-hidden
      />
    </Link>
  )
}

/**
 * The browser-window PWC monogram and wordmark. Uses the owner's own artwork
 * (public/images/pwc-logo.svg, then .png) when present, else the drawn mark.
 */
export function Logo({ wordmark = false, className, light = false }: { wordmark?: boolean; className?: string; light?: boolean }) {
  const [src, setSrc] = useState<string | null>(null)
  useEffect(() => {
    let live = true
    findBrandLogo().then((found) => {
      if (live) setSrc(found)
    })
    return () => {
      live = false
    }
  }, [])
  return (
    <span className={cx('inline-flex items-center gap-2.5', className)}>
      {src ? (
        <img src={src} alt="" aria-hidden className={cx('size-8 shrink-0 object-contain', light && 'brightness-0 invert')} />
      ) : (
      <svg viewBox="0 0 100 100" className="size-8 shrink-0" aria-hidden>
        <g fill={light ? '#fff' : '#1262DB'}>
          {/* Browser chrome with three punched-out dots. */}
          <path
            fillRule="evenodd"
            d="M21.6 14.7H77.1A3 3 0 0 1 80.1 17.7V23.4H18.6V17.7A3 3 0 0 1 21.6 14.7ZM64 18.9a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0-3.6 0ZM69.5 18.9a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0-3.6 0ZM75 18.9a1.8 1.8 0 1 0 3.6 0 1.8 1.8 0 1 0-3.6 0Z"
          />
          {/* P: wide square counter, short stem with a slanted foot. */}
          <path fillRule="evenodd" d="M18.6 26.4H48.8V48.8H25.2V67L18.6 70.3ZM25.2 33H42.2V42H25.2Z" />
          {/* W: vertical left stroke, then a V that merges into the tall bar. */}
          <path d="M28.4 51.8H34.7V75.2H28.4Z" />
          <path d="M34.7 75.2L44.4 52.2L52.7 75.2" fill="none" stroke={light ? '#fff' : '#1262DB'} strokeWidth="7" strokeLinejoin="miter" strokeMiterlimit="8" />
          <path d="M52.7 26.4H58.6V75.2H52.7Z" />
          {/* C: opens left, notched top arm, chamfered bottom right. */}
          <path fillRule="evenodd" d="M63.5 26.4H80.1V68.9L74.2 75.2H63.5V66.4H73.2V34.2H63.5ZM63.5 34.2V31.2H68.2V34.2Z" />
        </g>
      </svg>
      )}
      {wordmark && <span className="text-lg font-semibold tracking-[-0.04em]">{SITE.name}</span>}
    </span>
  )
}

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ delay = 0, y = 24, ...rest }: HTMLMotionProps<'div'> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    />
  )
}

/** A photo from IMAGES in a frame. `zoom` scales it on parent hover (add `group`). */
export function Photo({
  image,
  ratio,
  zoom = false,
  className,
  imgClassName,
  alt,
  ...rest
}: { image: ImageKey; ratio?: string; zoom?: boolean; imgClassName?: string } & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>) {
  const p = IMAGES[image]
  return (
    <div className={cx('relative overflow-hidden bg-soft', className)} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={p.src}
        alt={alt ?? p.alt}
        loading="lazy"
        decoding="async"
        className={cx(
          'absolute inset-0 size-full object-cover',
          zoom && 'transition-transform duration-[900ms] ease-[var(--ease-out-soft)] group-hov:scale-[1.04]',
          imgClassName,
        )}
        {...rest}
      />
    </div>
  )
}

/** Counts up to `value` the first time it is seen. */
export function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const seen = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)
  useEffect(() => {
    if (!seen) return
    if (reduce) {
      setN(value)
      return
    }
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [seen, value, reduce])
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  )
}

/** "+300 / Success project": the figure with a small violet plus and a two-line caps label. */
export function Stat({ value, label, align = 'center', tone = 'ink' }: { value: number; label: string[]; align?: 'center' | 'left'; tone?: 'ink' | 'light' }) {
  return (
    <div className={cx('flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start text-left')}>
      <p className="flex items-start text-[clamp(2rem,1.4rem+1.6vw,3rem)] leading-none font-normal tracking-[-0.05em]">
        <span className={cx('mt-[0.08em] mr-0.5 text-[0.45em] leading-none', tone === 'ink' ? 'text-violet' : 'text-violet-light')} aria-hidden>
          +
        </span>
        <span className="sr-only">More than </span>
        <CountUp value={value} />
      </p>
      <p className={cx('caps mt-2', tone === 'light' && 'text-night-muted')}>
        {label.map((l, i) => (
          <span key={l} className="block">
            {l}
            {i < label.length - 1 && <span className="sr-only"> </span>}
          </span>
        ))}
      </p>
    </div>
  )
}

/** Big right-or-left aligned uppercase title, one line per entry. */
export function Title({
  lines,
  as: Tag = 'h2',
  align = 'right',
  size = 'md',
  className,
  id,
}: {
  lines: string[]
  as?: 'h1' | 'h2' | 'h3' | 'p'
  align?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  id?: string
}) {
  return (
    <Tag
      id={id}
      className={cx(
        'display',
        align === 'right' ? 'text-right' : 'text-left',
        size === 'sm' && 'text-[clamp(1.5rem,1.1rem+1.2vw,2.25rem)] leading-[0.95]',
        size === 'md' && 'text-[clamp(2rem,1.2rem+2.4vw,3.25rem)] leading-[0.92] tracking-[-0.05em]',
        size === 'lg' && 'text-[clamp(2.8rem,1.4rem+4.6vw,6.5rem)]',
        size === 'xl' && 'text-[clamp(3.4rem,0.6rem+9.6vw,10.5rem)] tracking-[-0.06em]',
        className,
      )}
    >
      {lines.map((l) => (
        <span key={l} className="block">
          {l}
        </span>
      ))}
    </Tag>
  )
}

export type BadgeTone = 'neutral' | 'violet' | 'outline' | 'success' | 'light'

export function Badge({ tone = 'neutral', children, className }: { tone?: BadgeTone; children: ReactNode; className?: string }) {
  return (
    <span
      className={cx(
        'round inline-flex h-7 items-center rounded-full px-3 text-[13px] font-medium whitespace-nowrap',
        tone === 'neutral' && 'bg-soft text-ink',
        tone === 'violet' && 'bg-violet-soft text-violet-deep',
        tone === 'outline' && 'border border-line-strong text-ink',
        tone === 'success' && 'bg-success/10 text-success',
        tone === 'light' && 'bg-white/14 text-white',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** A toggleable pill (filters, multi-choice form answers). */
export function Chip({
  selected = false,
  className,
  children,
  role,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean; 'data-force'?: string }) {
  return (
    <button
      type="button"
      role={role}
      aria-pressed={role ? undefined : selected}
      aria-checked={role === 'radio' || role === 'checkbox' ? selected : undefined}
      className={cx(
        'round inline-flex h-11 items-center gap-2 rounded-full border px-5 text-[15px] font-medium transition-[background-color,color,border-color] duration-[var(--duration-fast)] prs:scale-[0.98] disabled:pointer-events-none disabled:opacity-45',
        selected ? 'border-violet bg-violet text-white hov:bg-violet-deep' : 'border-line-strong bg-card text-ink hov:border-ink',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

/** Empty, loading-free placeholder: art, title, body and an action. */
export function EmptyState({ title, body, action, className }: { title: string; body: string; action?: ReactNode; className?: string }) {
  return (
    <div className={cx('flex flex-col items-center px-6 py-16 text-center', className)}>
      <div className="mb-4 size-24 opacity-90" aria-hidden>
        <svg viewBox="0 0 96 96" className="size-full">
          <circle cx="48" cy="48" r="38" fill="none" stroke="var(--color-violet)" strokeWidth="2" strokeDasharray="4 6" />
          <circle cx="48" cy="48" r="12" fill="var(--color-violet)" opacity="0.85" />
        </svg>
      </div>
      <p className="display text-3xl">{title}</p>
      <p className="mt-3 max-w-sm text-muted">{body}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

/** Initials on an iridescent disc, until the owner adds team photos. */
export function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
  return (
    <span
      aria-hidden
      className={`round holo-fill grid shrink-0 place-items-center rounded-full font-medium tracking-[-0.04em] text-white ${size === 'lg' ? 'size-28 text-3xl' : size === 'md' ? 'size-16 text-xl' : 'size-10 text-sm'}`}
    >
      {initials}
    </span>
  )
}

