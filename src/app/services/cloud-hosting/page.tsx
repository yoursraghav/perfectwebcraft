import { ServicePage } from '@/components/ServicePage'

const cloudHostingData = {
  eyebrow: 'Managed Cloud Infrastructure',
  title: 'Global Edge Hosting with Zero Downtime & Managed Postgres.',
  description:
    'A slow or fragile website quietly destroys brand trust and search ranking. We architect, configure, and actively manage ultra-low-latency edge hosting, serverless Postgres connection pooling, automated backups, and SSL certificates so your visitors always experience instant load times.',
  metrics: [
    { label: 'Global Uptime SLA', value: '99.99%' },
    { label: 'Edge TTFB Response', value: '< 45ms' },
    { label: 'Automated Backups', value: 'Daily / 24h' },
    { label: 'SSL & Security', value: 'Managed TLS' },
  ],
  modules: [
    {
      title: 'Global Edge CDN & Serverless Compute',
      description:
        'Content and dynamic SSR compute deployed across 300+ edge points-of-presence globally, routing visitors to the geographically closest server.',
      specs: [
        'Sub-50ms time to first byte worldwide',
        'Automatic gzip & brotli edge asset compression',
        'Smart image resizing & modern format conversion',
        'Dynamic serverless function scaling on demand',
      ],
    },
    {
      title: 'Managed PostgreSQL & Connection Pooling',
      description:
        'High-availability database hosting configured with automated connection pooling, instant read replicas, and zero-downtime scaling.',
      specs: [
        'PgBouncer connection pool management',
        'Automatic query optimization & indexing',
        'Point-in-time recovery (PITR) support',
        'Encrypted storage at rest & in transit (TLS 1.3)',
      ],
    },
    {
      title: 'Automated Disaster Recovery & Backups',
      description:
        'Continuous automated snapshot backups of your production database and media assets with instant one-click rollback capabilities.',
      specs: [
        'Daily automated database snapshots',
        'Multi-region redundancy & replication',
        'Zero-data-loss rollback pipelines',
        'Disaster recovery SLA (< 15 min restoration)',
      ],
    },
    {
      title: 'DDoS Protection & Web Application Firewall',
      description:
        'Layer 3, 4, and 7 DDoS shielding, malicious bot mitigation, and intelligent rate-limiting to prevent downtime and brute-force attacks.',
      specs: [
        'Automatic Layer 7 HTTP flood mitigation',
        'Custom Web Application Firewall (WAF) rules',
        'Automated IP reputation & bot challenge',
        'Brute-force login & endpoint rate limiting',
      ],
    },
    {
      title: 'Continuous Availability & Health Checks',
      description:
        '24/7 automated synthetic uptime pings, Core Web Vitals telemetry, and instant incident dispatch to senior engineering leads.',
      specs: [
        '60-second synthetic multi-region ping checks',
        'Core Web Vitals real-user monitoring (RUM)',
        'Instant Slack / SMS / Email incident alerting',
        'Historical uptime status dashboard access',
      ],
    },
    {
      title: 'Domain DNS & Automated SSL Lifecycle',
      description:
        'Complete DNS orchestration, automatic renewal of wildcard SSL/TLS certificates, and HSTS security header enforcement.',
      specs: [
        'Anycast low-latency DNS management',
        'Zero-configuration auto-renewing SSL certs',
        'Strict-Transport-Security (HSTS) preload ready',
        'Domain DKIM, SPF & DMARC email auth records',
      ],
    },
  ],
  lifecycle: [
    {
      step: '01',
      phase: 'Infrastructure Audit & Sizing',
      timeline: 'Day 1',
      summary:
        'Assessing real-world traffic requirements, geographic audience footprint, and database concurrency targets.',
      deliverable: 'Cloud Architecture & Capacity Plan',
    },
    {
      step: '02',
      phase: 'Environment Setup & Security Sizing',
      timeline: 'Days 2–3',
      summary:
        'Provisioning edge compute, Postgres cluster, SSL certificates, connection poolers, and WAF firewall rules.',
      deliverable: 'Provisioned Production & Staging Envs',
    },
    {
      step: '03',
      phase: 'Traffic Migration & DNS Propagation',
      timeline: 'Day 4',
      summary:
        'Zero-downtime DNS cutover, SSL verification, and edge caching cache-warming routines.',
      deliverable: 'Verified Live Edge Production Routing',
    },
    {
      step: '04',
      phase: 'Ongoing Monitoring & Maintenance',
      timeline: 'Continuous',
      summary:
        'Active 24/7 telemetry, daily automated backups, security patching, and monthly capacity optimization reviews.',
      deliverable: 'Active 99.99% Uptime Management',
    },
  ],
  deliverables: [
    'Managed cloud hosting configuration on high-performance Edge infrastructure',
    'High-availability PostgreSQL database cluster with connection pooling',
    'Automated daily backup schedule with instant rollback mechanisms',
    '24/7 Uptime monitoring with real-time alerting system',
    'Auto-renewing wildcard SSL/TLS certificates',
    'DDoS protection and custom Web Application Firewall rules',
    'DNS configuration for apex domains, subdomains, and email records',
    'Monthly server health and performance audit report',
  ],
  faqs: [
    {
      question: 'What happens if our site experiences a sudden traffic spike?',
      answer:
        'Our serverless edge infrastructure automatically scales compute and memory capacity in milliseconds without manual intervention or service interruption.',
    },
    {
      question: 'Can we use our own domain registrar (GoDaddy, Namecheap, Google Domains)?',
      answer:
        'Yes. We configure and manage your DNS records regardless of where your domain is registered, ensuring seamless routing and automatic SSL renewals.',
    },
    {
      question: 'How are database backups handled?',
      answer:
        'Automated database snapshots occur every 24 hours and are stored in multi-region encrypted cloud buckets with 30-day retention.',
    },
    {
      question: 'Do you manage database migrations when code changes?',
      answer:
        'Yes. All database schema migrations are executed automatically during zero-downtime deployment pipelines with rollback safety checks.',
    },
  ],
}

export default function CloudHostingPage() {
  return <ServicePage {...cloudHostingData} />
}
