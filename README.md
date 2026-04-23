# Rohan Shelar Portfolio

Personal portfolio website built with Next.js, React, and modern motion/3D libraries.

## Overview

This project showcases:

- About, skills, and experience sections
- Project highlights
- Contact form with email delivery via Resend
- Smooth scrolling, animated transitions, and 3D visuals
- SEO-friendly metadata and social preview support

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS + SCSS
- Three.js, React Three Fiber, Drei
- GSAP + Framer Motion
- Zustand
- Resend + React Email

## Project Structure

- `app/` - App Router pages and API routes
- `components/` - Reusable UI and section components
- `assets/` - SCSS styles
- `public/` - Static assets
- `lib/` - Utilities like analytics and smooth scroll helpers
- `stores/` - Client state stores

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment file

Create `.env.local` in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="Portfolio <onboarding@resend.dev>"
CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS=
```

### 3. Run development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Run in development mode
- `npm run build` - Build for production
- `npm run start` - Start the production build
- `npm run lint` - Run lint checks

## Contact API

The contact form submits to `POST /api/email`.

For successful email delivery, `RESEND_API_KEY` must be configured.

## Deployment

Recommended: Vercel.

Set all environment variables from `.env.local` in your hosting provider before deploying.

## License

This project is for personal portfolio use.
