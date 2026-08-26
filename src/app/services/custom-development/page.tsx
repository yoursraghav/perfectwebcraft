import { ServicePage } from '@/components/ServicePage'

const customDevData = {
  eyebrow: 'Full-Stack Web Engineering',
  title: 'Bespoke Web Applications Built for High Performance.',
  description:
    'We build tailored web applications and responsive brand websites from the ground up. Utilizing Next.js App Router, strictly typed TypeScript, and robust database architectures, we deliver digital platforms that load instantaneously, convert visitors, and scale without friction.',
  metrics: [
    { label: 'Avg. PageSpeed Score', value: '99/100' },
    { label: 'Turnaround Time', value: '10–14 Days' },
    { label: 'TypeScript Strictness', value: '100%' },
    { label: 'Code Ownership', value: 'Full IP' },
  ],
  modules: [
    {
      title: 'Full-Stack Architecture & Next.js App Router',
      description:
        'Engineered with React Server Components, server actions, and edge streaming for instantaneous page renders and sub-50ms data interactions.',
      specs: [
        'Next.js 16+ with Turbopack bundler',
        'Server actions with strictly typed schemas',
        'Zero-layout-shift asset optimization',
        'Granular caching & ISR revalidation',
      ],
    },
    {
      title: 'Design System & Component Library',
      description:
        'A comprehensive atomic UI system built specifically for your brand. Reusable, accessible, and responsive across every device breakpoint.',
      specs: [
        'Custom Tailwind CSS v4 design tokens',
        'WCAG AA accessible contrast & ARIA landmarks',
        'Micro-interactions & fluid viewport scaling',
        'Figma to clean React token synchronization',
      ],
    },
    {
      title: 'Relational Database Modeling & Prisma ORM',
      description:
        'Strictly typed relational database schemas with automated migrations, connection pooling, and secure mutation layers.',
      specs: [
        'PostgreSQL schema design with Prisma ORM',
        'ACID compliant transactions & data safety',
        'Automated database indexing & query tuning',
        'Serverless connection pooling (PgBouncer)',
      ],
    },
    {
      title: 'API Integrations & Third-Party Services',
      description:
        'Secure integrations with payment gateways, CRM intake funnels, webhook consumers, transactional email, and analytics suites.',
      specs: [
        'Stripe & Razorpay checkout integrations',
        'Resend / SendGrid transactional email pipelines',
        'Webhook signature verification & idempotency',
        'Real-time WebSocket & SSE data feeds',
      ],
    },
    {
      title: 'Enterprise Security & Data Validation',
      description:
        'Multi-layer defense against CSRF, XSS, rate-limiting abuse, and SQL injection with strict server-side validation on every input.',
      specs: [
        'Zod & TypeScript runtime schema validation',
        'Content Security Policy (CSP) & CORS headers',
        'DDoS & bot mitigation with Cloudflare/Vercel Edge',
        'Encrypted credential & environment management',
      ],
    },
    {
      title: 'Automated CI/CD & Production Tooling',
      description:
        'Zero-downtime deployment pipelines with preview environments, automated static typechecks, and regression testing on every pull request.',
      specs: [
        'GitHub Actions continuous integration pipeline',
        'Automated linting, typechecking & build verification',
        'Instant staging preview deployments',
        'Health check endpoints & real-time error alerts',
      ],
    },
  ],
  lifecycle: [
    {
      step: '01',
      phase: 'Discovery & System Blueprint',
      timeline: 'Days 1–3',
      summary:
        'Technical requirements mapping, database schema design, wireframe validation, and architectural specification approval.',
      deliverable: 'Complete Architecture Spec & Roadmap',
    },
    {
      step: '02',
      phase: 'UI/UX Design & Tokenization',
      timeline: 'Days 4–7',
      summary:
        'High-fidelity component design, typographic scale definition, and interactive prototyping reviewed directly with your team.',
      deliverable: 'Approved Interactive Design Prototype',
    },
    {
      step: '03',
      phase: 'Core Full-Stack Engineering',
      timeline: 'Days 8–12',
      summary:
        'Server component development, database integration, API wiring, and comprehensive multi-device performance tuning.',
      deliverable: 'Fully Functional Staging Environment',
    },
    {
      step: '04',
      phase: 'Audit, Launch & Handover',
      timeline: 'Days 13–14',
      summary:
        'PageSpeed 95+ verification, DNS/SSL propagation, domain cutover, and full GitHub source code repository transfer.',
      deliverable: 'Production Deployment & Full IP Handover',
    },
  ],
  deliverables: [
    'Complete Next.js & React source code in private GitHub repo',
    'PostgreSQL database schemas with Prisma migration scripts',
    'Atomic UI component library with Tailwind design tokens',
    'Automated CI/CD deployment configuration files',
    'Technical documentation & local developer setup guide',
    '30-Day post-launch warranty and bug-fix support',
    'SEO sitemap, robots.txt, and metadata suite',
    'Production SSL certificates & custom domain DNS configuration',
  ],
  faqs: [
    {
      question: 'Do I own 100% of the code and assets?',
      answer:
        'Yes. Upon final milestone release, the private GitHub repository, database configurations, and deployment accounts are completely transferred to your organization with full intellectual property ownership.',
    },
    {
      question: 'Can we integrate our existing CRM or payment processor?',
      answer:
        'Absolutely. We regularly engineer custom integrations with HubSpot, Salesforce, Stripe, Razorpay, Zapier, Slack webhooks, and proprietary REST/GraphQL APIs.',
    },
    {
      question: 'How do you guarantee high PageSpeed scores?',
      answer:
        'We enforce zero layout shifts (CLS), modern image formatting (WebP/AVIF), server-side rendering, tree-shaken minimal JS bundles, and global edge caching on every single build.',
    },
    {
      question: 'What happens if we need new features after launch?',
      answer:
        'We offer flexible monthly engineering retainers as well as scoped sprint engagements for continuous feature additions, design evolutions, and priority support.',
    },
  ],
}

export default function CustomDevelopmentPage() {
  return <ServicePage {...customDevData} />
}
