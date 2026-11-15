import type { HTMLAttributes } from 'react'

import { cx } from '../lib/cx'

export type CardTone = 'white' | 'violet' | 'night' | 'soft'

const tones: Record<CardTone, string> = {
  white: 'bg-card text-ink',
  violet: 'on-dark bg-violet text-white',
  night: 'on-dark bg-night text-white',
  soft: 'bg-soft text-ink',
}

/** The white panel every section sits on. `as="section"` for landmarks. */
export function Card({
  tone = 'white',
  size = 'lg',
  as: Tag = 'div',
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & { tone?: CardTone; size?: 'sm' | 'lg'; as?: 'div' | 'section' | 'article' | 'header' | 'aside' | 'figure' }) {
  return (
    <Tag
      className={cx(
        'relative overflow-hidden',
        size === 'lg' ? 'rounded-[var(--radius-card)]' : 'rounded-[var(--radius-card-sm)]',
        tones[tone],
        className,
      )}
      {...rest}
    />
  )
}

/** The canvas gutter between cards. Every page is a stack of these rows. */
export function Grid({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('grid gap-2', className)} {...rest} />
}
