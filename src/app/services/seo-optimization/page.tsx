import { ServicePage } from '@/components/ServicePage'

const seoData = {
  eyebrow: 'Technical & Organic SEO',
  title: 'Search Optimization & High-Performance Core Web Vitals.',
  description:
    'We engineer the technical, architectural, and on-page foundations required to rank in competitive search results. By combining structured JSON-LD schema markup, algorithmic sitemap generation, and 95+ PageSpeed Core Web Vitals, we ensure your brand gets discovered by qualified buyers.',
  metrics: [
    { label: 'Avg. Google PageSpeed', value: '98+' },
    { label: 'Structured Schema', value: '100% Valid' },
    { label: 'Crawl Indexing Rate', value: '< 48 Hours' },
    { label: 'Core Web Vitals Pass', value: 'All 3 Vitals' },
  ],
  modules: [
    {
      title: 'Core Web Vitals & Speed Optimization',
      description:
        'Auditing and tuning Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) for optimal Google ranking signals.',
      specs: [
        'Sub-1.2s LCP on mobile and desktop',
        'Zero layout shifts with aspect-ratio containers',
        'Tree-shaken JavaScript & CSS delivery',
        'Automatic WebP & AVIF next-gen image compression',
      ],
    },
    {
      title: 'Structured JSON-LD Schema Architecture',
      description:
        'Injecting rich semantic microdata for Organizations, Local Businesses, FAQs, Services, and Articles to earn high-visibility Google Rich Snippets.',
      specs: [
        'Schema.org JSON-LD compliant markup',
        'BreadcrumbList & Navigation hierarchy',
        'Rich FAQ and Service rich snippet cards',
        'Verified in Google Rich Results testing suite',
      ],
    },
    {
      title: 'Programmatic Metadata & OpenGraph Engine',
      description:
        'Dynamic meta titles, descriptions, canonical links, and social preview cards generated automatically across every URL and subpage.',
      specs: [
        'Automated OpenGraph (OG) image generation',
        'Twitter/X summary card optimization',
        'Strict canonical URL tagging to prevent duplicate penalties',
        'Robots meta tags with fine-grained index control',
      ],
    },
    {
      title: 'Dynamic XML Sitemaps & Search Console Integration',
      description:
        'Automated sitemap.xml and robots.txt generation synced directly with Google Search Console and Bing Webmaster Tools for fast URL discovery.',
      specs: [
        'Dynamic sitemap generation on every publish',
        'Clean robots.txt routing and crawler prioritization',
        'Google Search Console domain property verification',
        'Indexing API ping workflows for new content',
      ],
    },
    {
      title: 'Semantic HTML5 & Internal Linking Hierarchy',
      description:
        'Hierarchical document structure, single H1 enforcement, logical heading cascades, and internal keyword link clusters that guide web spiders.',
      specs: [
        'Strict HTML5 semantic sectioning landmarks',
        'Optimized anchor text linking networks',
        'Descriptive alt text for all image assets',
        'Zero broken links & 301 redirect management',
      ],
    },
    {
      title: 'Local SEO & Regional Discovery Signals',
      description:
        'Optimizing regional search signals, Google Business Profile metadata alignments, and geo-targeted schema for domestic and international discovery.',
      specs: [
        'Geo-coordinate & NAP schema injection',
        'Hreflang language and region tagging',
        'Local citation consistency validation',
        'Google Maps embed & location schema alignment',
      ],
    },
  ],
  lifecycle: [
    {
      step: '01',
      phase: 'Comprehensive Technical Audit',
      timeline: 'Days 1–2',
      summary:
        'Analyzing current indexation, crawl errors, page speed bottlenecks, duplicate content, and keyword ranking baseline.',
      deliverable: 'Technical SEO Diagnostic Report',
    },
    {
      step: '02',
      phase: 'Schema & Architecture Implementation',
      timeline: 'Days 3–5',
      summary:
        'Injecting JSON-LD schema, dynamic metadata templates, XML sitemaps, canonical tags, and OpenGraph social cards.',
      deliverable: 'Implemented Metadata & Schema Engine',
    },
    {
      step: '03',
      phase: 'Core Web Vitals Performance Tuning',
      timeline: 'Days 6–8',
      summary:
        'Eliminating render-blocking assets, lazy-loading media, and tuning font rendering for green Core Web Vitals scores.',
      deliverable: 'PageSpeed 95+ Score Certification',
    },
    {
      step: '04',
      phase: 'Search Console Verification & Reporting',
      timeline: 'Days 9–10',
      summary:
        'Submitting sitemaps to search engines, verifying crawl coverage, and configuring ranking telemetry dashboards.',
      deliverable: 'Active Search Console & Baseline Dashboard',
    },
  ],
  deliverables: [
    'Complete technical SEO code implementation across all pages',
    'Schema.org JSON-LD structured data integration for all services',
    'Automated XML sitemap and robots.txt generation engine',
    'OpenGraph & Twitter social card image templates',
    'Google PageSpeed Core Web Vitals optimization to 95+ score',
    'Google Search Console setup and sitemap indexation submission',
    'Canonical URL structure & redirect mapping rules',
    'Detailed post-implementation technical SEO report',
  ],
  faqs: [
    {
      question: 'How quickly will our website start ranking on Google?',
      answer:
        'Technical indexing and sitemap validation usually complete within 48 to 72 hours. Organic keyword ranking improvements typically build momentum within 4 to 8 weeks as search engines index content authority.',
    },
    {
      question: 'Do you use keyword stuffing or black-hat tactics?',
      answer:
        'Never. We follow strictly white-hat, Google-compliant technical practices focused on speed, clean semantic structure, structured schema, and genuine user value.',
    },
    {
      question: 'Will our social media links show rich image previews?',
      answer:
        'Yes. Every page includes custom OpenGraph and Twitter card metadata so links shared on WhatsApp, LinkedIn, X, and iMessage display beautiful titles, descriptions, and preview images.',
    },
    {
      question: 'Can we track how many visitors find us through search?',
      answer:
        'Yes. We integrate privacy-compliant analytics or Google Analytics 4 / Google Search Console so you have direct visibility into keyword queries and organic traffic.',
    },
  ],
}

export default function SeoOptimizationPage() {
  return <ServicePage {...seoData} />
}
