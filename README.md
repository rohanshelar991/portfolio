# Rohan Shelar — Portfolio

A personal portfolio built with Next.js to present my experience, technical skills, selected projects, and contact information.

## Highlights

- Animated portfolio sections for my introduction, experience, skills, and projects
- Project cards linking to live apps and source repositories
- Resume available at [`public/resume.pdf`](public/resume.pdf)
- Contact form powered by the Resend email API
- Privacy, terms, and refund policy pages
- Optional Google Analytics and social sharing metadata

## Featured Projects

- **Collabathon** — AI-powered team formation based on students' skills and goals
- **DataWeb LLM** — natural language dataset exploration with Groq and DuckDB
- **BizBill** — Flutter and Firebase business accounting with GST invoicing, 8 Indian languages, and a Groq-powered AI assistant
- **AirScope Intelligence** — global air quality and weather dashboard

## Tech Stack

- Next.js 16 and React 19
- Tailwind CSS and SCSS
- Framer Motion, GSAP, and Lenis
- Three.js, React Three Fiber, and Drei
- Zustand
- Resend and React Email

## Run Locally

### Requirements

- Node.js
- npm

### Install and start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create `.env.local` in the project root. The contact form requires a Resend API key; the other values are optional.

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="Portfolio <onboarding@resend.dev>"
CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS=
```

`RESEND_FROM` must be an address verified with Resend when sending email in production. `CONTACT_EMAIL` defaults to the portfolio contact address in the API route. Set `NEXT_PUBLIC_SITE_URL` to the deployed site URL so canonical and social metadata use the correct address. Leave `NEXT_PUBLIC_GOOGLE_ANALYTICS` empty to disable analytics.

## Scripts

```bash
npm run dev    # Start the development server
npm run build  # Create a production build
npm run start  # Serve the production build locally
npm run lint   # Run the configured lint command
```

## Deploy on Vercel

1. Push this repository to GitHub: [rohanshelar991/portfolio](https://github.com/rohanshelar991/portfolio).
2. Import the repository into Vercel and keep the detected Next.js settings.
3. Add the environment variables above in the Vercel project settings. Add `RESEND_API_KEY` and a verified `RESEND_FROM` address to enable contact email delivery.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain, then deploy.

After the Git integration is connected, pushes to the configured production branch deploy to production; other branches create preview deployments.

## Contact

Use the contact form on the portfolio or email [rmshelar11@gmail.com](mailto:rmshelar11@gmail.com).
