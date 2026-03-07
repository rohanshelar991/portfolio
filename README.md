# Legendary Portfolio (React + Tailwind + Node)

A premium, recruiter-focused portfolio rebuilt with a modern architecture:
- Frontend: React + Vite + Tailwind + Framer Motion
- Backend: Node.js + Express + Nodemailer
- Dynamic projects: admin token protected API
- Contact form: sends messages to `rmshelar11@gmail.com`

## Folder Structure

```text
.
├── client
│   ├── public/images
│   └── src
│       ├── data
│       ├── hooks
│       └── styles
├── server
│   └── src
│       ├── config
│       ├── controllers
│       ├── data
│       ├── middleware
│       ├── routes
│       └── utils
└── package.json
```

## Local Setup

1. Install dependencies:
```bash
npm install
npm --prefix client install
npm --prefix server install
```

2. Configure backend environment:
```bash
cp server/.env.example server/.env
```

3. Update `server/.env`:
- `MAIL_TO=rmshelar11@gmail.com`
- `MAIL_USER` and `MAIL_PASS` must be valid SMTP credentials.
- If using Gmail, generate an App Password and use that as `MAIL_PASS`.
- Set a strong `ADMIN_TOKEN`.

4. Start full stack:
```bash
npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5050`

## Contact Form Email Flow

When someone submits the form:
- Frontend POSTs to `/api/contact`
- Backend validates fields with Zod
- Nodemailer sends email to `MAIL_TO` (`rmshelar11@gmail.com`)
- Success/failure status is shown in UI

## Admin Project Updates

Use the `Admin Dashboard` section in the portfolio:
- Enter `ADMIN_TOKEN`
- Add project details
- Project is saved to `server/src/data/projects.json`
- Projects immediately appear in the Projects section

## Deploy (Vercel + Backend)

Recommended production setup:
1. Deploy `client` to Vercel.
2. Deploy `server` to Railway/Render/Fly (or any Node host).
3. Set `VITE_API_URL` in Vercel to your deployed backend URL.
4. Set backend env vars from `server/.env.example`.

## Performance & Quality Notes

- Responsive layout with accessibility-focused semantic sections.
- Lazy-loaded project/profile images.
- Scroll progress indicator, theme toggle, smooth animations.
- Security middleware: `helmet`, CORS control, API rate limiter.
- Input validation on contact and project APIs.

## Next Up (Optional)

- Replace placeholder social/demo/GitHub links with your real links.
- Add `/client/public/resume.pdf` for live download/preview.
- Add persistent DB (MongoDB) for production-grade admin CMS.
