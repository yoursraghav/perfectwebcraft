import { ServicePage } from '@/components/ServicePage'

const maintenanceData = {
  eyebrow: 'Continuous Care & Support',
  title: 'Dedicated Engineering Sprints & Proactive Security Care.',
  description:
    'A high-performing website is a living digital product, not a one-time project. Our ongoing maintenance retainers give you guaranteed monthly engineering hours, 24/7 uptime monitoring, security patching, library upgrades, and rapid turnaround for new pages and feature additions.',
  metrics: [
    { label: 'Incident Response SLA', value: '< 2 Hours' },
    { label: 'Routine Feature Turnaround', value: '24–48 Hours' },
    { label: 'Security Patching', value: 'Continuous' },
    { label: 'Uptime Guarantee', value: '99.99%' },
  ],
  modules: [
    {
      title: 'Dedicated Monthly Engineering Sprints',
      description:
        'Guaranteed developer sprint hours each month to ship new landing pages, update design components, implement A/B tests, or extend functionality.',
      specs: [
        'Direct Slack/Email communication with senior leads',
        'Transparent sprint burndown and task tracking',
        'Unused sprint hour rollover policies',
        'Priority queue for urgent design & dev requests',
      ],
    },
    {
      title: 'Proactive Security & Dependency Patching',
      description:
        'Continuous automated vulnerability scanning and prompt upgrades of Next.js, React, Node packages, and database drivers before CVE exploits emerge.',
      specs: [
        'Weekly Dependabot & npm audit security checks',
        'Zero-breakage minor and patch version updates',
        'Regular penetration testing & vulnerability scanning',
        'SSL certificate validation and renewal assurance',
      ],
    },
    {
      title: 'Real-Time Telemetry & Uptime Monitoring',
      description:
        'Continuous synthetic traffic probes checking server health every 60 seconds from North America, Europe, and Asia with instant incident escalation.',
      specs: [
        'Multi-region global ping monitoring',
        'Core Web Vitals real-user performance tracking',
        'Instant SMS / Slack / Email error alerts',
        'Public and private status page access',
      ],
    },
    {
      title: 'Database Hygiene & Performance Optimization',
      description:
        'Regular database index optimization, unused connection cleanup, vacuuming, and log rotation to maintain lightning-fast response times.',
      specs: [
        'PostgreSQL query execution time profiling',
        'Deadlock and slow-query log analysis',
        'Storage footprint optimization & cleanup',
        'Automated daily backup integrity tests',
      ],
    },
    {
      title: 'Content & Visual Layout Updates',
      description:
        'Turnkey assistance with updating brand imagery, publishing new case studies, editing copy, and creating seasonal promotional banners.',
      specs: [
        'Same-day copy and asset replacement',
        'New case study and resource publishing',
        'Mobile responsive quality checks on every update',
        'Cross-browser rendering verification',
      ],
    },
    {
      title: 'Quarterly Strategic Roadmap Reviews',
      description:
        'Collaborative quarterly sessions to review website conversion metrics, user drop-offs, Core Web Vitals, and technical recommendations for growth.',
      specs: [
        'Quarterly traffic & conversion analytics audit',
        'UX optimization & conversion rate suggestions',
        'Competitive technology stack benchmarking',
        'Long-term feature roadmap planning',
      ],
    },
  ],
  lifecycle: [
    {
      step: '01',
      phase: 'Onboarding & Telemetry Setup',
      timeline: 'Month 1, Week 1',
      summary:
        'Configuring automated monitoring probes, security scanning bots, backup verification, and establishing direct Slack communication.',
      deliverable: 'Active Telemetry & Communication Hub',
    },
    {
      step: '02',
      phase: 'Sprint Planning & Backlog Prioritization',
      timeline: 'Monthly Cycle',
      summary:
        'Aligning on high-impact monthly goals: new pages, conversion improvements, design tweaks, or custom tool integrations.',
      deliverable: 'Monthly Sprint Roadmap & Milestones',
    },
    {
      step: '03',
      phase: 'Sprint Execution & QA Staging',
      timeline: 'Continuous Sprints',
      summary:
        'Implementing requested features in private preview branches, followed by automated typechecks and client approval.',
      deliverable: 'Staging Previews for Instant Sign-Off',
    },
    {
      step: '04',
      phase: 'Zero-Downtime Release & Health Audit',
      timeline: 'Continuous',
      summary:
        'Seamless production release followed by PageSpeed verification, backup snapshots, and monthly executive health summaries.',
      deliverable: 'Production Release & Monthly Audit Report',
    },
  ],
  deliverables: [
    'Guaranteed monthly engineering & design sprint hours',
    '24/7 Automated uptime monitoring with sub-2hr emergency response SLA',
    'Continuous security patching and framework library upgrades',
    'Automated daily database backups with verified restoration procedures',
    'Direct communication channel with lead developers',
    'Monthly site performance and analytics summary report',
    'Quarterly strategic roadmap & conversion review session',
    'Rollover policy for unused sprint hours',
  ],
  faqs: [
    {
      question: 'What is the turnaround time for standard maintenance tasks?',
      answer:
        'Standard requests (content updates, minor UI tweaks, asset swaps) are typically completed within 24 to 48 hours. Urgent bug fixes and downtime incidents are addressed immediately with priority SLA.',
    },
    {
      question: 'Can we roll over unused sprint hours to the next month?',
      answer:
        'Yes. Unused monthly engineering sprint hours roll over for up to 60 days, giving your team flexibility for larger seasonal feature releases.',
    },
    {
      question: 'Are there long-term contracts or lock-ins?',
      answer:
        'No. Our maintenance retainers are month-to-month and can be adjusted, upgraded, or cancelled with 30 days notice.',
    },
    {
      question: 'Do you maintain websites that were not originally built by your team?',
      answer:
        'Yes. We perform a preliminary code and architecture audit to evaluate technical health and migrate legacy projects to our modern hosting and maintenance workflows.',
    },
  ],
}

export default function OngoingMaintenancePage() {
  return <ServicePage {...maintenanceData} />
}
