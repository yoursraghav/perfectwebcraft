// Every string, link and piece of seed data for the site lives here.
// Start editing from the top: SITE, then the page sections below it.

export const SITE = {
  name: 'Perfect WebCraft',
  tagline: 'Websites crafted to convert',
  email: 'perfectwebcraftteam@gmail.com',
  city: 'Mumbai',
  country: 'India',
}

/** Main navigation. The first four sit in the header; the menu shows all of them. */
export const NAV = [
  { label: 'About', to: '/studio' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'Testimony', to: '/#testimony' },
]
export const MENU = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/studio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Start a project', to: '/contact' },
]

/*
  Photography and renders. Every image on the site goes through this one
  constant: swap `src` for your own file in public/images/ (or any URL) and
  update `alt`. The placeholders are generated, not real client work.
  The `holo*` entries are the iridescent chrome objects (transparent webp);
  set one's `src` to '' to fall back to its SVG drawing in components/Holo.tsx.
*/
export const IMAGES = {
  aurora: { src: '/images/aurora.webp', alt: 'Soft translucent 3D forms in mint, peach and lilac on a pale background' },
  fold: { src: '/images/fold.webp', alt: 'Geometric shapes pressed into cream cotton paper beside a stack of colour-blocked book covers' },
  halcyon: { src: '/images/halcyon.webp', alt: 'Calm hotel lobby with a curved travertine reception desk and warm indirect light' },
  kite: { src: '/images/kite.webp', alt: 'Orange technical jacket hung against a green wall in hard sunlight' },
  meridian: { src: '/images/meridian.webp', alt: 'Two phones showing a banking app on a cobalt blue background' },
  nocturne: { src: '/images/nocturne.webp', alt: 'Swirling violet, magenta and teal liquid on black' },
  portrait: { src: '/images/portrait.webp', alt: 'The studio worktable with printed layouts, swatches and a moodboard in morning light' },
  ostra: { src: '/images/ostra.webp', alt: 'Ceramic jug and cups on linen in warm morning light' },
  glass: { src: '/images/glass.webp', alt: 'Clear glass carafe and tumbler casting light on a pale grey surface' },
  lookbook: { src: '/images/lookbook.webp', alt: 'Wooden bench with a folded throw beside a paper floor lamp in a bright room' },
  holoKnot: { src: '/images/holo/knot.webp', alt: '' },
  holoSphere: { src: '/images/holo/sphere.webp', alt: '' },
  holoCloud: { src: '/images/holo/cloud.webp', alt: '' },
  holoScissors: { src: '/images/holo/scissors.webp', alt: '' },
  holoStar: { src: '/images/holo/star.webp', alt: '' },
  holoPrism: { src: '/images/holo/prism.webp', alt: '' },
} as const satisfies Record<string, { src: string; alt: string }>
export type ImageKey = keyof typeof IMAGES

export const HOME = {
  stats: [
    { value: 28, label: ['Websites', 'shipped'] },
    { value: 33, label: ['Brands', 'designed'] },
    { value: 5, label: ['Months', 'of craft'] },
  ],
  captionTop: 'A Mumbai web studio for brands that mean it',
  captionBottom: 'Strategy, design and build in one senior team',
  headline: ['Websites', 'built to', 'convert'],
  reachOut: 'Reach out',
  servicesTitle: ['What we', 'do'],
  manifestoTitle: ['Small team', 'serious', 'craft'],
  manifesto:
    'Perfect WebCraft is a web studio in Mumbai. We design and build brand-led sites and digital products for founders and marketing teams who care how the details feel, and who want the site to keep working long after launch day.',
  approachTitle: ['How we', 'work'],
  workTitle: ['Selected', 'work'],
  testimonyTitle: ['Kind words', 'from clients'],
  clientsLabel: 'Trusted by teams at',
  cta: { title: ['Have a project', 'in mind?'], body: 'Tell us what you are building. We reply to every brief within two working days.', action: 'Start a project' },
}

export const CLIENTS = ['Anvaya Finance', 'Aranya Living', 'Chitra Press', 'Kaveri Kitchen', 'Nimbara', 'Orbit Health', 'Solace Stay', 'Sundara Jewels', 'Trellis Labs', 'Vayu Outdoor']

export type Service = {
  slug: string
  title: string
  short: string
  art: HoloKind
  intro: string
  deliverables: string[]
}
export type HoloKind = 'knot' | 'sphere' | 'cloud' | 'scissors' | 'star' | 'prism'

export const SERVICES: Service[] = [
  {
    slug: 'brand-identity',
    title: 'Brand identity creation',
    short: 'Names, marks and systems built to work on screen',
    art: 'star',
    intro: 'Identity work designed for the web first: a mark that holds at 16 pixels, type that reads on a phone, and a palette your team can use without a designer in the room.',
    deliverables: ['Brand strategy and positioning', 'Logo and wordmark', 'Type, colour and graphic systems', 'Brand guidelines', 'Social and launch templates'],
  },
  {
    slug: 'web-mobile',
    title: 'Web & mobile design',
    short: 'Fast, accessible sites your team can run',
    art: 'cloud',
    intro: 'We design and build marketing sites, shops and web apps in React, with a content model your team can update. No page builders, no mystery plugins, no three-second loads.',
    deliverables: ['Marketing websites', 'E-commerce and headless shops', 'Progressive web apps', 'CMS and content models', 'Analytics and launch'],
  },
  {
    slug: 'ux-ui',
    title: 'UX/UI design',
    short: 'Interfaces that make the next step obvious',
    art: 'prism',
    intro: 'Research, flows and interface design for products that have outgrown their first version. We test with real customers in Mumbai before a pixel is signed off.',
    deliverables: ['User research and interviews', 'Information architecture', 'Wireframes and flows', 'Interface design', 'Usability testing'],
  },
  {
    slug: 'motion-3d',
    title: 'Motion & 3D',
    short: 'Bringing brands to life in movement and depth',
    art: 'sphere',
    intro: 'Logo animation, product renders and short films for launches and paid social. The iridescent objects on this site are our house style; yours will be your own.',
    deliverables: ['Logo and UI motion', '3D product renders', 'Launch films', 'Social content kits'],
  },
  {
    slug: 'campaigns',
    title: 'Campaigns & content',
    short: 'Launching ideas people actually share',
    art: 'knot',
    intro: 'Launch campaigns across display, social and OTT, from the first idea to the final asset sizes, built to be reused every quarter.',
    deliverables: ['Campaign concepts', 'Art direction', 'Digital and print', 'Social and paid assets'],
  },
]

export const APPROACH = [
  { title: 'Creative direction', body: 'One senior lead owns the idea from the first call to the final deploy.', art: 'knot' as HoloKind, tone: 'violet' as const },
  { title: 'Tailored design', body: 'Nothing off the shelf. Every layout is cut to fit your brand and your content.', art: 'scissors' as HoloKind, tone: 'white' as const },
  { title: 'Rapid iteration', body: 'Weekly reviews on a live staging link, so decisions get made in the browser.', art: 'star' as HoloKind, tone: 'white' as const },
  { title: 'Measured launch', body: 'We agree the numbers that matter before launch and report on them after.', art: 'sphere' as HoloKind, tone: 'night' as const },
]

export const PROCESS = [
  { step: '01', title: 'Discover', body: 'Workshops, interviews and an audit of what you have. We leave with a one-page brief everyone signs.' },
  { step: '02', title: 'Define', body: 'Strategy, sitemap and two or three design routes, each argued for in plain language.' },
  { step: '03', title: 'Design', body: 'One route developed in full and built in the browser, reviewed weekly with real content.' },
  { step: '04', title: 'Deliver', body: 'Launch, a short handover session for your team, and 30 days of support after go-live.' },
]

export const ENGAGEMENTS = [
  { name: 'Sprint', price: 'From ₹1.5L', length: '2–3 weeks', body: 'A focused burst: a landing page, a logo refresh or a product concept.', points: ['One discipline', 'Two review rounds', 'Final files and handoff'] },
  { name: 'Project', price: 'From ₹4L', length: '6–12 weeks', body: 'A full identity or website, from strategy through to launch.', points: ['Strategy and design routes', 'Weekly reviews', 'Design system or CMS', '30 days of launch support'], featured: true },
  { name: 'Partnership', price: 'From ₹1.2L / month', length: 'Ongoing', body: 'A dedicated team that works as your in-house studio.', points: ['Reserved team capacity', 'Monthly planning', 'Priority turnaround'] },
]

export const FAQ = [
  { q: 'How soon can you start?', a: 'We usually start new projects three to five weeks after a brief is signed. Sprints can sometimes begin within a week.' },
  { q: 'Do you work with startups?', a: 'Yes. About half our clients are pre-seed to Series A. We launched in 2026 and have shipped twenty-eight sites since.' },
  { q: 'Who will I work with?', a: 'A creative director leads every project, with one designer and one engineer. You meet the whole team at kickoff and talk to them directly.' },
  { q: 'Do you build the websites too?', a: 'Yes. We design and build in React and TypeScript, deploy to Cloudflare, and hand over a repository your engineers can run. You own all of it.' },
  { q: 'How do you price work?', a: 'Fixed price per phase, quoted after the discovery call. Retainers start at ₹1.2L a month. GST is charged extra, and we invoice 50% to start and 50% at launch.' },
  { q: 'Where are you based?', a: 'In Mumbai, working with clients across India and abroad. Most meetings happen on video; workshops happen at our studio in Lower Parel or at your office.' },
]

export type Project = {
  slug: string
  client: string
  title: string
  year: number
  disciplines: string[]
  cover: ImageKey
  gallery: ImageKey[]
  summary: string
  challenge: string
  approach: string
  results: { value: string; label: string }[]
  quote?: { text: string; name: string; role: string }
  accent: string
}

export const DISCIPLINES = ['Branding', 'Digital', 'Motion', 'Campaign'] as const

export const PROJECTS: Project[] = [
  {
    slug: 'anvaya-finance',
    client: 'Anvaya Finance',
    title: 'A lending app that explains itself',
    year: 2026,
    disciplines: ['Digital', 'Branding'],
    cover: 'meridian',
    gallery: ['meridian', 'aurora'],
    summary: 'A rebuild of Anvaya’s loan application: new brand, new flow and a design system their team now ships from.',
    challenge: 'Anvaya’s app lost most applicants somewhere between the KYC step and the offer. Support was drowning in “where is my loan?” calls, and the brand read like a bank rather than a lender for first-time borrowers.',
    approach: 'We sat with twelve applicants through the whole flow, cut the application from fourteen screens to six, and wrote every line of copy in plain Hindi and English. A component library went in alongside their engineers.',
    results: [
      { value: '4.7', label: 'Play Store rating, up from 3.4' },
      { value: '−41%', label: 'Drop-off in applications' },
      { value: '96', label: 'Components in the system' },
    ],
    quote: { text: 'They rebuilt the application flow while we kept shipping. Nothing broke, and support tickets halved.', name: 'Nikhil Rao', role: 'Head of Product, Anvaya Finance' },
    accent: '#3f5bff',
  },
  {
    slug: 'nimbara',
    client: 'Nimbara',
    title: 'A brand that makes dashboards feel human',
    year: 2026,
    disciplines: ['Branding', 'Motion'],
    cover: 'aurora',
    gallery: ['aurora', 'nocturne'],
    summary: 'Identity, motion system and marketing site for a retail analytics platform heading into its first raise.',
    challenge: 'Nimbara had a strong product and a deck that looked like everyone else’s. Buyers could not tell what it did from the homepage, and the founders were two weeks from a fundraise.',
    approach: 'We built the brand around one idea, seeing the shelf through your customer’s eyes, and made an animated data form the mark. The marketing site went live ten days before the round.',
    results: [
      { value: '₹48cr', label: 'Series A closed after launch' },
      { value: '3.1×', label: 'More inbound demos' },
      { value: '9', label: 'Weeks from kickoff to launch' },
    ],
    quote: { text: 'Investors opened with the homepage. That had never happened before.', name: 'Aditi Menon', role: 'Co-founder, Nimbara' },
    accent: '#b9a2ff',
  },
  {
    slug: 'solace-stay',
    client: 'Solace Stay',
    title: 'Quiet luxury for four heritage stays',
    year: 2025,
    disciplines: ['Branding', 'Digital'],
    cover: 'halcyon',
    gallery: ['halcyon', 'lookbook', 'ostra'],
    summary: 'One brand and one booking site for four small properties that share a philosophy rather than a look.',
    challenge: 'Each property had its own logo and website. Guests did not know they belonged together, and only 21% of bookings came direct instead of through travel portals.',
    approach: 'A calm master brand with a material palette per property, and a booking site that sells the stay before the room, built to load in under a second on Indian mobile networks.',
    results: [
      { value: '38%', label: 'Direct bookings, up from 21%' },
      { value: '4', label: 'Properties under one brand' },
      { value: '2.1×', label: 'Time on site' },
    ],
    quote: { text: 'Calm, precise and genuinely fast. Our four houses finally look like a family.', name: 'Luca Fernandes', role: 'Founder, Solace Stay' },
    accent: '#c7b49a',
  },
  {
    slug: 'vayu-outdoor',
    client: 'Vayu Outdoor',
    title: 'Colour-first campaign for monsoon gear',
    year: 2025,
    disciplines: ['Campaign', 'Motion'],
    cover: 'kite',
    gallery: ['kite', 'nocturne'],
    summary: 'A loud June campaign across display, social and OTT, built around a single colour.',
    challenge: 'Outdoor brands all shoot mountains. Vayu sells rainwear to people who commute through a Mumbai monsoon, and needed to look like it understood them.',
    approach: 'We left the mountains out, put the jackets against walls of pure colour, and cut six-second films for the commute: platform, auto rickshaw, office lift.',
    results: [
      { value: '24m', label: 'Campaign impressions' },
      { value: '+31%', label: 'June sales year on year' },
      { value: '7', label: 'Cities on digital out-of-home' },
    ],
    quote: { text: 'The bravest brief we ever wrote, and they made it look obvious.', name: 'Maya Kulkarni', role: 'Brand Director, Vayu Outdoor' },
    accent: '#ff6a1f',
  },
  {
    slug: 'aranya-living',
    client: 'Aranya Living',
    title: 'A shop for handmade homeware',
    year: 2024,
    disciplines: ['Branding', 'Digital'],
    cover: 'ostra',
    gallery: ['ostra', 'lookbook', 'glass'],
    summary: 'Warm, tactile packaging and an online shop that sells pottery like a morning ritual.',
    challenge: 'Aranya was moving from Mumbai exhibitions to online, with no photography, no packaging and no shop.',
    approach: 'We art-directed one week of shoots, designed recyclable packaging and built a shop where every product is shown in use, with a checkout that takes UPI first.',
    results: [
      { value: '₹2.4cr', label: 'Online sales in the first year' },
      { value: '3.6%', label: 'Shop conversion rate' },
      { value: '0', label: 'Plastic in the packaging' },
    ],
    accent: '#c2703d',
  },
  {
    slug: 'chitra-press',
    client: 'Chitra Press',
    title: 'A cover system for forty titles a year',
    year: 2024,
    disciplines: ['Branding'],
    cover: 'fold',
    gallery: ['fold', 'glass'],
    summary: 'A wordmark drawn for offset, a custom serif and a cover grid for forty new titles a year.',
    challenge: 'Chitra’s books were beautiful one by one but looked unrelated on a shelf, and each cover was taking a week of design time.',
    approach: 'A strict cover grid with one free zone per title, three stock papers, and a set of rules the editors could apply themselves.',
    results: [
      { value: '40', label: 'Titles a year on the system' },
      { value: '2', label: 'Design awards' },
      { value: '+22%', label: 'Bookshop orders' },
    ],
    accent: '#2b2b2b',
  },
  {
    slug: 'trellis-labs',
    client: 'Trellis Labs',
    title: 'Motion identity for a soil-health platform',
    year: 2024,
    disciplines: ['Motion', 'Digital'],
    cover: 'nocturne',
    gallery: ['nocturne', 'aurora'],
    summary: 'A visual system that turns field data into something a farmer and an investor can both read.',
    challenge: 'Trellis had seven years of soil data and no way to show it. Reports went out as spreadsheets, and the product looked like a research project.',
    approach: 'We built a generative growth pattern that reacts to live sensor data, so the brand, the dashboard and the field app share one language.',
    results: [
      { value: '7,400', label: 'Farmers on the platform' },
      { value: '4×', label: 'Engagement with monthly reports' },
      { value: '1', label: 'System across web, app and print' },
    ],
    accent: '#7b3cff',
  },
]

export const TESTIMONIALS = [
  { quote: 'They rebuilt the application flow while we kept shipping. Nothing broke, and support tickets halved.', name: 'Nikhil Rao', role: 'Head of Product, Anvaya Finance', project: 'anvaya-finance' },
  { quote: 'Investors opened with the homepage. That had never happened before.', name: 'Aditi Menon', role: 'Co-founder, Nimbara', project: 'nimbara' },
  { quote: 'The bravest brief we ever wrote, and they made it look obvious. June was our best month yet.', name: 'Maya Kulkarni', role: 'Brand Director, Vayu Outdoor', project: 'vayu-outdoor' },
  { quote: 'Calm, precise and genuinely fast. Our four houses finally look like a family.', name: 'Luca Fernandes', role: 'Founder, Solace Stay', project: 'solace-stay' },
]

export const STUDIO = {
  title: ['Independent', 'by design'],
  intro: 'Perfect WebCraft is a studio of eight designers and engineers in Mumbai. We launched in 2026, and in five months we have shipped twenty-eight websites and designed thirty-three brands.',
  stats: [
    { value: 8, label: 'People in the studio' },
    { value: 5, label: 'Months independent' },
    { value: 28, label: 'Sites launched' },
    { value: 33, label: 'Brands designed' },
  ],
  values: [
    { title: 'Bold by default', body: 'The safe option is always available. We start from the braver one and earn our way back if we have to.' },
    { title: 'Small senior teams', body: 'No pyramid of juniors. The people you meet on the first call are the people who design and build your work.' },
    { title: 'Open files', body: 'You own everything: design files, the repository, the fonts we licensed. No lock-in, ever.' },
  ],
  team: [
    { name: 'Raghav Harshwal', role: 'Head Developer, CEO' },
    { name: 'Dhanashree Ingale', role: 'Owner' },
    { name: 'Ajit Nath', role: 'Head of Marketing' },
    { name: 'Ananya Iyer', role: 'Design Director' },
    { name: 'Kabir Mehta', role: 'Lead Engineer' },
    { name: 'Priya Nair', role: 'Head of Strategy' },
    { name: 'Arjun Deshpande', role: 'Motion Designer' },
    { name: 'Sneha Kulkarni', role: 'Studio Manager' },
  ],
  awards: [
    { year: 2026, name: 'Awwwards', note: 'Site of the Day — Solace Stay' },
    { year: 2026, name: 'CSS Design Awards', note: 'Best UI — Anvaya Finance' },
    { year: 2026, name: 'Kyoorius', note: 'Blue Elephant, Digital — Chitra Press' },
  ],
}

export type Role = {
  slug: string
  title: string
  team: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const CAREERS = {
  title: ['Make', 'with us'],
  intro: 'We hire rarely and carefully. If you care about craft and like working in small, senior teams, we would love to see your work.',
  perks: [
    { title: 'Four-day weeks in August', body: 'The whole studio works Monday to Thursday through the monsoon.' },
    { title: '₹40,000 learning budget', body: 'Courses, books, conferences or a type design workshop. Your call.' },
    { title: 'Hybrid, Mumbai-first', body: 'Three days in the Lower Parel studio, two wherever you work best.' },
    { title: 'Your own projects', body: 'One Friday a month for self-initiated work, shown at the studio crit.' },
  ],
}

export const ROLES: Role[] = [
  {
    slug: 'senior-web-designer',
    title: 'Senior Web Designer',
    team: 'Digital',
    location: 'Mumbai, hybrid',
    type: 'Full time',
    summary: 'Lead website projects from first routes to launch, working directly with clients and our creative director.',
    responsibilities: ['Develop design routes and argue for them', 'Design responsive layouts and type systems', 'Present to clients and run weekly reviews', 'Mentor two mid-level designers'],
    requirements: ['Five or more years designing websites', 'A portfolio of sites you led, live today', 'Excellent typography and layout', 'English is required; Hindi or Marathi a plus'],
  },
  {
    slug: 'front-end-engineer',
    title: 'Front-end Engineer',
    team: 'Digital',
    location: 'Mumbai or remote (India)',
    type: 'Full time',
    summary: 'Build the sites we design in React and TypeScript, and own performance, accessibility and the handover.',
    responsibilities: ['Build marketing sites in React and Vite', 'Wire CMS models and form endpoints', 'Own performance and accessibility budgets', 'Pair with designers from the first route'],
    requirements: ['Three or more years with React and TypeScript', 'Careful CSS and an eye for motion', 'Comfortable with Node and CI', 'Clear writing'],
  },
  {
    slug: '3d-motion-designer',
    title: '3D & Motion Designer',
    team: 'Motion',
    location: 'Mumbai, hybrid',
    type: 'Full time',
    summary: 'Make the iridescent objects, product renders and logo animations our clients are known for.',
    responsibilities: ['Model, light and render in Blender or Cinema 4D', 'Animate logos and interfaces', 'Produce launch films', 'Build reusable asset kits'],
    requirements: ['A reel that shows taste and range', 'Strong lighting and materials', 'After Effects and one 3D tool', 'Real-time experience is a plus'],
  },
  {
    slug: 'new-business-lead',
    title: 'New Business Lead',
    team: 'Studio',
    location: 'Mumbai',
    type: 'Full time',
    summary: 'Find and win the projects we want to be known for, and look after clients from first call to signed brief.',
    responsibilities: ['Qualify inbound briefs', 'Write proposals and estimates', 'Plan our pipeline with the founders', 'Represent the studio at events'],
    requirements: ['Four or more years in agency new business', 'You love design and can talk about it', 'Organised and calm under deadlines'],
  },
]

export const CONTACT = {
  title: ['Start a', 'project'],
  intro: 'Three short steps. We read every brief ourselves and reply within two working days.',
  budgets: ['Under ₹1L', '₹1L–3L', '₹3L–6L', '₹6L+'] as const,
  timelines: ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just exploring'] as const,
  services: ['Brand identity', 'Web & mobile', 'UX/UI', 'Motion & 3D', 'Campaign'] as const,
  steps: ['What you need', 'Budget and timing', 'About you'],
}

export const FOOTER = {
  newsletter: { title: 'Studio notes', body: 'One email a month: new work, open roles, nothing else.' },
  legal: `© ${new Date().getFullYear()} ${SITE.name}`,
}
