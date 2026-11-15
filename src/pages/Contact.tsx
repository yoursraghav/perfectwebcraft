import { BriefForm } from '../components/BriefForm'
import { Badge } from '../components/Bits'
import { Card } from '../components/Card'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { CONTACT, SITE } from '../data'
import { KEYS, useDocumentTitle, usePersistentState, type SentBrief } from '../lib/storage'

export function Contact() {
  useDocumentTitle('Start a project')
  const [briefs, setBriefs] = usePersistentState<SentBrief[]>(KEYS.briefs, [])
  return (
    <div className="grid gap-2 p-2">
      <PageHero title={CONTACT.title} eyebrow="Contact" intro={CONTACT.intro} art={<Holo kind="cloud" motion />} />
      <div className="grid gap-2 lg:grid-cols-[1.6fr_1fr] lg:items-start">
        <Card className="p-6 sm:p-10">
          <BriefForm onSent={(b) => setBriefs((list) => (list.some((x) => x.reference === b.reference) ? list : [b, ...list]))} />
        </Card>
        <div className="grid gap-2">
          <Card tone="night" className="grid gap-6 p-6 sm:p-8">
            <div>
              <p className="caps text-night-muted">New business</p>
              <a href={`mailto:${SITE.email}`} className="mt-2 inline-flex min-h-10 items-center text-[clamp(1.2rem,1rem+0.6vw,1.6rem)] tracking-[-0.03em] break-all text-white hov:text-violet-light">
                {SITE.email}
              </a>
            </div>
            <address className="text-white not-italic">
              <p className="caps mb-2 text-night-muted">Studio</p>
              <span className="block">{SITE.city}</span>
              <span className="block">{SITE.country}</span>
            </address>
          </Card>
          <Card as="section" aria-labelledby="sent-title" className="p-6 sm:p-8">
            <h2 id="sent-title" className="caps text-muted">
              Your briefs
            </h2>
            {briefs.length ? (
              <ul className="mt-4 divide-y divide-line">
                {briefs.map((b) => (
                  <li key={b.reference} className="flex flex-wrap items-center justify-between gap-2 py-3">
                    <div>
                      <p className="font-medium tabular-nums">{b.reference}</p>
                      <p className="text-sm text-muted">
                        {new Date(b.sentAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}, {b.budget}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {b.services.map((s) => (
                        <Badge key={s} tone="violet">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-[15px] text-muted">Briefs you send from this browser appear here with their reference, so you can quote it when we reply.</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
