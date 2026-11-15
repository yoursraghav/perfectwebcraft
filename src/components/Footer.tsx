import { ArrowRight } from 'lucide-react'
import { useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router'

import { FOOTER, MENU, SITE } from '../data'
import { postJson } from '../lib/api'
import { cx } from '../lib/cx'
import { validateSubscribe } from '../shared/validation'
import { Logo } from './Bits'
import { IconButton } from './Button'
import { Card } from './Card'

/** Email signup posting to /api/subscribe. */
export function NewsletterForm({ tone = 'night' }: { tone?: 'night' | 'white' }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle')
  const uid = useId()
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errors = validateSubscribe({ email })
    if (errors.email) return setError(errors.email)
    setError('')
    setState('loading')
    const res = await postJson('/api/subscribe', { email })
    if (!res.ok) {
      setState('idle')
      return setError(res.fieldErrors?.email ?? res.error)
    }
    setState('done')
  }
  const dark = tone === 'night'
  if (state === 'done')
    return (
      <p role="status" className={cx('flex h-14 items-center text-[15px]', dark ? 'text-violet-light' : 'text-violet')}>
        Thanks. The next studio notes land in your inbox next month.
      </p>
    )
  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor={uid} className="sr-only">
        Email address
      </label>
      <div
        className={cx(
          'round flex h-14 items-center gap-2 rounded-full border pr-1.5 pl-5 transition-colors has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-3',
          dark ? 'border-white/25 bg-white/6 has-[input:focus-visible]:outline-white' : 'border-line-strong bg-card has-[input:focus-visible]:outline-violet',
          error && 'border-danger',
        )}
      >
        <input
          id={uid}
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${uid}-error` : undefined}
          className={cx('h-full min-w-0 flex-1 bg-transparent text-[15px] outline-none focus-visible:outline-none', dark ? 'placeholder:text-night-muted' : 'placeholder:text-muted')}
        />
        <IconButton type="submit" aria-label="Subscribe" tone="violet" disabled={state === 'loading'} aria-busy={state === 'loading' || undefined}>
          <ArrowRight className={cx('size-5', state === 'loading' && 'animate-pulse')} />
        </IconButton>
      </div>
      {error && (
        <p id={`${uid}-error`} role="alert" className={cx('mt-2 pl-5 text-[13px]', dark ? 'text-[#ff9a9f]' : 'text-danger')}>
          {error}
        </p>
      )}
    </form>
  )
}

export function Footer() {
  return (
    <footer className="px-2 pb-2">
      <Card tone="night" className="px-5 pt-10 pb-6 sm:px-8 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="display text-[clamp(1.8rem,1.4rem+1.2vw,2.6rem)] leading-[0.95]">{FOOTER.newsletter.title}</p>
            <p className="mt-3 mb-6 text-night-muted">{FOOTER.newsletter.body}</p>
            <NewsletterForm />
          </div>
          <nav aria-label="Footer">
            <p className="caps mb-3 text-night-muted">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {[...MENU, { label: 'Style guide', to: '/styleguide' }].map((m) => (
                <li key={m.to}>
                  <Link to={m.to} className="inline-flex min-h-10 items-center text-white transition-colors hov:text-violet-light">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            <address className="text-night-muted not-italic">
              <p className="caps mb-3">Studio</p>
              <span className="block text-white">{SITE.city}</span>
              <span className="block text-white">{SITE.country}</span>
            </address>
            <div>
              <p className="caps mb-3 text-night-muted">Contact</p>
              <a href={`mailto:${SITE.email}`} className="inline-flex min-h-10 items-center break-all text-white hov:text-violet-light">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
        <p aria-hidden className="display mt-16 -mb-[0.12em] text-center text-[clamp(1.75rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.05em] text-white select-none">
          {SITE.name}
        </p>
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-5 text-sm text-night-muted sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <Logo light className="[&_svg]:size-6 [&_img]:size-6" />
            {FOOTER.legal}
          </span>
          <a href="#top" className="inline-flex min-h-10 items-center text-white hov:text-violet-light">
            Back to top
          </a>
        </div>
      </Card>
    </footer>
  )
}
