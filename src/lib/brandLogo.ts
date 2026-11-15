// The owner's own artwork wins over the drawn mark. Drop a square, transparent
// logo at public/images/pwc-logo.svg (preferred) or public/images/pwc-logo.png
// and it is picked up in the header, footer and favicon. Nothing to configure.
const SOURCES = ['/images/pwc-logo.svg', '/images/pwc-logo.png'] as const

let pending: Promise<string | null> | undefined

async function probe(src: string) {
  try {
    const res = await fetch(src, { method: 'HEAD', cache: 'no-cache' })
    // A single-page host answers a missing file with index.html, so the
    // content type is what proves an image is really there.
    const type = res.headers.get('content-type') ?? ''
    return res.ok && type.startsWith('image/') ? src : null
  } catch {
    return null
  }
}

/** The first of the owner's logo files that exists, or null for the drawn fallback. */
export function findBrandLogo(): Promise<string | null> {
  pending ??= (async () => {
    for (const src of SOURCES) {
      const found = await probe(src)
      if (found) return found
    }
    return null
  })()
  return pending
}

/** Points the favicon at the owner's file when present, else keeps public/favicon.svg. */
export async function applyBrandFavicon() {
  const src = await findBrandLogo()
  if (!src) return
  const link = document.createElement('link')
  link.rel = 'icon'
  link.type = src.endsWith('.svg') ? 'image/svg+xml' : 'image/png'
  link.href = src
  document.querySelectorAll('link[rel="icon"]').forEach((el) => el.remove())
  document.head.appendChild(link)
}
