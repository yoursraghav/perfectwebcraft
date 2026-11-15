# Creative agency

A site for an independent web studio, "Perfect WebCraft" in Mumbai. The home page opens on a
white panel with a slowly turning iridescent chrome knot, three count-up figures and
a huge uppercase headline. The page is a stack of white, violet and black
panels on a pale grey canvas: services (hover one and it turns violet), a
manifesto, the studio's approach, selected work, testimonials, clients and a
call to action. Behind it is a complete site:

- **Work** (`/work`): case studies filtered by discipline and searched by
  client. Filters live in the URL, so a reload keeps them.
- **Case study** (`/work/:slug`): overview, challenge and approach, results,
  gallery, client quote and the next project.
- **Services** (`/services`): five disciplines with deliverables, the
  four-step process, three ways to engage with starting prices, and an FAQ.
- **Studio** (`/studio`): numbers, values, team, awards and clients.
- **Careers** (`/careers`) and **role pages** (`/careers/:slug`) with an
  application form.
- **Start a project** (`/contact`): a three-step brief. The draft is kept in
  the browser as you type; sent briefs are listed with their reference.
- A 404 page and a live style guide at `/styleguide` (also linked in the footer).

## Run it

```sh
bun install
bun run dev        # http://localhost:5305 (Vite + the Worker in workerd)
bun run build      # dist/client (assets) + dist/creative_agency/index.js (Worker)
bun run typecheck
```

## Edit it

- **`src/data.ts` holds every string, figure and piece of seed data.** Start there.
  - `SITE`, `NAV`, `MENU`: name, contact details, socials and navigation.
  - `HOME`: the home page copy. `SERVICES`, `APPROACH`, `PROCESS`, `ENGAGEMENTS`, `FAQ`.
  - `PROJECTS`: the case studies. `TESTIMONIALS`, `CLIENTS`, `STUDIO`, `CAREERS`, `ROLES`, `CONTACT`.
- **Every image goes through one constant, `IMAGES`, in `src/data.ts`.** The
  placeholders in `public/images/` are generated (project and studio
  photography, plus the iridescent objects in `public/images/holo/`), not
  real client work. To use your own, change each entry's `src` (a file in
  `public/images/` or any URL) and its `alt`. Projects pick their cover and
  gallery by key. Ten photos and six renders, about 1.9 MB of webp.
- **The 3D objects** (`knot`, `sphere`, `cloud`, `scissors`, `star`, `prism`)
  are transparent webp renders, the `holo*` entries in `IMAGES`, shown by
  `<Holo kind="…">` in `src/components/Holo.tsx`. Each one also has an SVG
  drawing (`HoloSvg`) that stands in when its `src` is `''` or the file fails
  to load. Swap in your own renders as square transparent PNG or webp.
- **Pages** are in `src/pages/`; routes are declared in `src/App.tsx` with
  react-router. Pages fade between each other.
- **What the browser keeps** (`src/lib/storage.ts`): the brief draft, sent
  briefs and sent job applications, in `localStorage`.
- **`src/worker/index.ts`** is the Cloudflare Worker:
  - `POST /api/briefs`, `POST /api/applications` and `POST /api/subscribe`
    check their input and return `201` (with a `reference` for briefs and
    applications), `422` with `fieldErrors` for bad fields, and `400` when the
    body is not a JSON object.
  - `GET /api/health` returns `{ ok: true }`; any other `/api/*` is a JSON 404.

  The checks live in `src/shared/validation.ts`, shared by the forms and the
  Worker. To keep briefs, connect these routes to email, a CRM or a D1 table.

### Tokens (`src/styles.css`)

| Group | Tokens |
| --- | --- |
| Colour | `canvas`, `card`, `soft`, `line`, `line-strong`, `ink`, `ink-2`, `muted`, `faint` (decoration only), `night`, `night-2`, `night-muted`, `violet`, `violet-deep`, `violet-soft`, `violet-light`, `pink`, `cyan`, `success`, `danger`, `scrim` |
| Type | `--font-sans` Inter Tight; utilities `display` (big uppercase) and `caps` (12px captions) |
| Radius | `xs` 10px, `control` 16px, `card-sm` 22px, `card` 30px; pills use `rounded-full` + `.round` |
| Shadow | `card`, `float`, `violet`, `focus` |
| Motion | `--duration-fast/base/slow/hero`, `--ease-out-soft`, `--ease-in-out-soft`; keyframes `spin-slow`, `float`, `marquee`, `shimmer` |
| State variants | `hov:`, `prs:`, `fv:` and `group-hov:` match the real hover, active and focus-visible states and also `data-force="hover|pressed|focus"`, which the style guide uses to pin states |

The site is light only. With `prefers-reduced-motion`, the knot stops
turning, the objects stop floating, the marquee stops and figures show their
final value; fades remain.

### Components (`src/components/`)

| File | Components |
| --- | --- |
| `Button.tsx` | `Button` / `ButtonLink` (solid, violet, outline, ghost, light; sm/md/lg; loading), `IconButton` (ink, outline, violet, light) |
| `Field.tsx` | `Field` + `Input` / `Select` / `Textarea`, `Checkbox`, `ChoiceGroup` (radios or checkboxes as pills), `FormMessage` |
| `Bits.tsx` | `ArrowLink`, `Logo`, `Reveal`, `Photo`, `CountUp`, `Stat`, `Title`, `Badge`, `Chip`, `EmptyState`, `Avatar` |
| `Card.tsx` | `Card` (white, soft, violet, night) |
| `Content.tsx` | `Marquee`, `TestimonialSlider`, `Accordion`, `Stepper` |
| `Overlay.tsx` | `Modal`, `Drawer`, `useFocusTrap` (Tab trapped, Esc closes, focus restored), `ToastProvider` / `useToast` |
| `Nav.tsx` | `Nav` (header row and site menu), `PageHero` |
| Others | `Holo`, `ServiceCard`, `ProjectCard`, `RoleRow`, `BriefForm`, `ApplyForm`, `Footer` + `NewsletterForm` |

## Deploy with Freebuff Sites

`deploy.json` already points at the build output. After `bun run build`, deploy
it with the `sites_deploy` tool (or the Sites API) from this directory.
