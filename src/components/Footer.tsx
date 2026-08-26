import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 shrink-0 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-slate-300">
                <Image
                  src="/logomain.png"
                  alt="PerfectWebCraft"
                  width={32}
                  height={32}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-['Space_Grotesk',sans-serif] text-sm font-bold tracking-tight text-black">
                PerfectWebCraft
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700 font-['Inter',sans-serif]">
              Bespoke digital product design, web applications, and high-performance digital platforms for thoughtful brands.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs">🇮🇳</span>
              <span className="font-['Inter',sans-serif] text-xs text-black font-medium">HQ: India &amp; Global Studio</span>
            </div>
            <a
              href="mailto:hello@perfectwebcraft.com"
              className="mt-4 inline-block font-['Space_Grotesk',sans-serif] text-xs font-semibold text-red-600 transition hover:text-black"
            >
              hello@perfectwebcraft.com
            </a>
          </div>

          <div className="col-span-1">
            <p className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-black">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-700 transition hover:text-red-600 font-['Inter',sans-serif]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <p className="font-['Space_Grotesk',sans-serif] text-xs font-bold uppercase tracking-widest text-black">
              Studio Standards
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" aria-hidden="true" />
              <span className="font-['Space_Grotesk',sans-serif] text-xs text-slate-800 font-medium uppercase tracking-wider">
                Accepting new projects
              </span>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-2xs">
              <p className="font-['Space_Grotesk',sans-serif] text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Initial Response SLA
              </p>
              <p className="mt-1 font-['Space_Grotesk',sans-serif] text-2xl font-bold text-black">
                &lt; 24 Hours
              </p>
              <p className="mt-1 text-xs text-slate-600 font-['Inter',sans-serif]">
                Direct review from our senior design &amp; engineering leads.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-['Space_Grotesk',sans-serif] text-xs text-slate-500 transition hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
