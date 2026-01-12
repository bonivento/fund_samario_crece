# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Samario Crece** is a multi-page Next.js website for a Colombian foundation dedicated to restoring family bonds for vulnerable youth (ages 12-20) in Santa Marta through sports programs. The foundation also manages the **Reino Samario** sports club.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking without emitting files
npm run type-check

# Linting
npm run lint
```

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **Deployment:** Vercel

## Architecture

### Multi-Page Structure

The project follows a **multi-page architecture** with separate routes for each main section:

```
/                 - Home page (Hero + key sections preview + Partners)
/nosotros         - About Us (includes Mission, Vision, and Values)
/programas        - Programs page
/noticias         - News listing page
/noticias/[slug]  - Individual news article page
/contacto         - Contact page
```

### Component Organization Pattern

This project uses a **three-tier component architecture**:

1. **UI Components** (`src/components/ui/`)
   - Atomic, reusable building blocks (Button, Card, Container, SectionTitle)
   - Pure presentational components with no business logic
   - All components use barrel exports via `index.ts`

2. **Layout Components** (`src/components/layout/`)
   - Header and Footer components
   - Defined once in `src/app/layout.tsx` and shared across all pages
   - Header uses `usePathname()` to highlight active navigation
   - Header is always visible with white background and shadow

3. **Section Components** (`src/components/sections/`)
   - Reusable page sections (Hero, About, Mission, Programs, Values, Contact, Partners)
   - Imported into individual pages as needed
   - Each section is a complete block with its own layout and styling
   - All sections use `'use client'` directive for Framer Motion animations

### Page Composition

Pages are composed by combining section components:

- **Home (`/`)**: Hero + Preview Cards + Partners + CTA
- **Nosotros (`/nosotros`)**: About + Mission + Values
- **Programas (`/programas`)**: Programs section
- **Contacto (`/contacto`)**: Contact form and info
- **Noticias (`/noticias`)**: News grid listing
- **Noticia Detail (`/noticias/[slug]`)**: Individual article with breadcrumbs and related news

All pages add `pt-20` (padding-top) to `<main>` to account for the fixed header.

### Data Management

- **Centralized Constants** (`src/lib/constants.ts`): All content including:
  - Navigation links (now page routes instead of hash anchors)
  - Mission, vision, values, and programs data
  - Contact info and social links
  - **Partners data** (PARTNERS array) for the Aliados section
  - **News data** (NEWS array) for the news/blog section (prepared for future CMS)

- **Server Components by Default**: Most pages are server-rendered
- **Client Components**: Header (navigation state), Hero (animations), and all section components (Framer Motion)

### Styling System

**Color Palette** (defined in `tailwind.config.ts`):
- Primary: `#00B4B4` (turquoise/cyan) - Foundation brand color
- Primary Dark: `#008B8B`
- Primary Light: `#4DD4D4`
- Secondary: `#1a1a1a` (black for text)
- Accent: `#F5F5F5` (light gray backgrounds)

**Typography:**
- Headings: Poppins
- Body: Inter

**Utilities:**
- `cn()` helper in `src/lib/utils.ts` for conditional className merging (uses clsx)
- `section-padding` utility class for consistent section spacing

### Navigation System

- **Route-based navigation** using Next.js Link component
- Active page detection via `usePathname()` hook in Header
- Header highlights current page in navigation
- Smooth page transitions handled by Next.js
- Mobile menu with active state indication

### News/Blog System

Currently uses **hardcoded data** from constants.ts:
- News listing at `/noticias` displays all articles in a grid
- Individual articles at `/noticias/[slug]` with:
  - Breadcrumb navigation
  - Category badges and dates
  - Featured image placeholder
  - Share buttons placeholder
  - Related news section
- **Prepared for CMS integration**: Data structure supports easy migration to Contentful, Sanity, or similar

### Partners Section

- Displays foundation allies/sponsors
- Grid layout with placeholder logos
- Includes CTA to contact page
- Data stored in `constants.ts` PARTNERS array

## Environment Variables

Copy `.env.example` to `.env.local`:
- `NEXT_PUBLIC_SITE_URL`: Public site URL
- `RESEND_API_KEY`: Email service API key (future contact form backend)
- `CONTACT_EMAIL`: Destination for contact form submissions
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

## Path Aliases

TypeScript configured with `@/*` alias mapping to `./src/*`:
```typescript
import { Button } from '@/components/ui'
import { NAV_LINKS, NEWS } from '@/lib/constants'
```

## Image Optimization

- Next.js Image component used throughout
- Configured formats: AVIF and WebP (`next.config.js`)
- Logo at `/public/images/logo.png`
- Priority loading for above-the-fold images (Hero)
- Placeholder images in components (ready for real images)

## Content Updates

To update site content, edit `src/lib/constants.ts`:
- `NAV_LINKS`: Navigation menu items
- `MISSION`, `VISION`, `VALUES`: Organization info
- `PROGRAMS`: Available programs
- `CONTACT_INFO`: Contact details and social media
- `PARTNERS`: Allies and sponsors
- `NEWS`: News articles (temporary until CMS integration)

## SEO Configuration

- Each page has its own `Metadata` export
- Spanish locale (`es_CO`)
- Open Graph tags configured in root layout
- Dynamic metadata for news articles based on slug

## Future Enhancements

### CMS Integration (Planned)
The news system is prepared for CMS integration:
- Replace `NEWS` constant with API calls to Contentful/Sanity
- Keep the same data structure for easy migration
- Add rich text rendering for article content
- Implement image upload and optimization

### Backend for Contact Form
- API route ready to be implemented at `src/app/api/contact/route.ts`
- Form validation already in place with Zod schema
- Email service integration pending (Resend recommended)

### Donations System
- Future expansion for payment gateway integration
- Planned routes: `src/app/api/donations/`
- Support for PayU/MercadoPago for Colombian market

## Language & Locale

- Primary language: Spanish (Colombia)
- All content in Spanish
- Future roadmap includes English version for international donors
