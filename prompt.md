# Project Master Guidelines: Perfect Webcraft

## 1. Project Overview & Role

- **Project Name:** Perfect Webcraft (PWC)
- **Business Purpose:** Custom web development, UI/UX design, and managed cloud hosting for growing businesses.
- **Role:** Act as a Principal Full-Stack Engineer and Senior UI/UX Designer.

---

## 2. File Organization & Language Separation Rules

- **Strict File Isolation:** Write each language or domain logic in its own dedicated file. Do not combine database schemas, backend server logic, client UI, or style rules into single bloated files.
- **File Types & Extensions:**
  - TypeScript / React Components: `.tsx` (under `src/components/` and `src/app/`)
  - Server Actions & Backend Utilities: `.ts` (under `src/app/` and `src/lib/`)
  - Database Schemas: `.prisma` (under `prisma/`)
  - Global CSS & Tailwind Directives: `.css` (under `src/app/`)
  - Environment Configuration: `.env`
- **Zero Comments Policy:** DO NOT include code comments (no `//`, `/* */`, or `<!-- -->`). Write self-documenting, clean, and concise code.

---

## 3. Technical Stack

- **Framework:** Next.js (App Router, `src/` directory layout)
- **Language:** TypeScript (Strict mode, no `any` types)
- **Styling:** Tailwind CSS (Swiss/Dev-Studio minimal theme)
- **Database & ORM:** PostgreSQL (Neon) with Prisma ORM
- **State & Server Logic:** Next.js Server Actions (`src/app/actions.ts`)

---

## 4. Design System & UI Specifications

- **Logo:** Located at `/public/logo.jpeg` (Browser icon with blue PWC monogram).
- **Brand Colors:**
  - Primary CTA / Accent: Electric Blue (`#2563EB`)
  - Backgrounds: `#0B0F19` (Dark) / `#F8FAFC` (Light)
  - Card Borders: `border-slate-800` (Dark) or `border-slate-200` (Light)
- **Typography:**
  - Headings: Geometric Sans (`Space Grotesk`, `Syne`, or `Outfit`)
  - Body: `Plus Jakarta Sans` or `Inter`
  - Metrics / Stats: Monospace (`JetBrains Mono`)
- **Aesthetic:** Minimalist, high contrast, clean grid layout, zero placeholder gibberish.

---

## 5. File Map to Maintain

- `prisma/schema.prisma` -> Lead data model
- `src/lib/db.ts` -> Prisma client singleton
- `src/app/actions.ts` -> Server Actions for lead capture
- `src/components/Navbar.tsx` -> Header navigation with PWC logo
- `src/components/Hero.tsx` -> Hero section with headline and dual CTAs
- `src/components/Services.tsx` -> 4-column service grid cards
- `src/components/Portfolio.tsx` -> Case studies grid with tech badges
- `src/components/LeadForm.tsx` -> Client contact/quote intake form
- `src/components/Footer.tsx` -> Footer navigation and copyright
- `src/app/page.tsx` -> Main entry assembling all components

---

## 6. Execution Rules for AI Agent

1. Output production-ready, complete code without placeholders or omissions.
2. Never add comments inside code blocks.
3. Import the shared Prisma singleton (`@/lib/db`) for any database operations.
4. Ensure all layout components are fully responsive across mobile, tablet, and desktop viewports.
