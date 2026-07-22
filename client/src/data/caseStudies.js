export const caseStudies = {
  'mo-portfolio-site': {
    title: 'Building This Portfolio',
    subtitle: 'A developer-first rebuild: React, Node, MongoDB, and a working admin panel.',
    year: '2026',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
    sections: [
      {
        heading: 'The Problem',
        body: `My previous portfolio was a Next.js build with a mixtape/liner-notes concept — fun, but it read more "designer" than "software developer." I wanted something that signaled full-stack ability clearly: a real backend, a real database, and a way to update project content without redeploying every time I ship something new.`
      },
      {
        heading: 'Stack Decisions',
        body: `Frontend: React + Vite instead of Next.js this time — no SSR requirement for a personal site, so a lighter, faster dev loop won out. Tailwind for styling, kept minimal and custom rather than leaning on component libraries.

Backend: Node + Express + MongoDB (via Mongoose), with a small JWT-protected admin API for project CRUD. Overkill for a handful of static pages, appropriate the moment you need dynamic, self-managed content — which was the actual requirement here.`
      },
      {
        heading: 'Architecture',
        body: `Two independent apps in one repo: a client that fetches from /api/projects on load and falls back to cached content if the API is unreachable, and a server exposing public read routes plus authenticated write routes behind a single-admin JWT login. No user accounts, no roles — just one password, hashed with bcrypt, because that's all this needed.`
      },
      {
        heading: 'The Debugging Reality',
        body: `The build itself came together fast. The friction was in the infrastructure: MongoDB Atlas IP whitelisting blocking the first connection attempt, an .env file that Windows silently saved without recognizing as the intended file, and getting the bcrypt password hash generated and wired through correctly. None of it was complicated in isolation — it was the kind of "why isn't this connecting" debugging that's mostly about checking assumptions one at a time until the actual mismatch surfaces. Working through it methodically, rather than guessing, is what got it running.`
      },
      {
        heading: 'Outcome',
        body: `A live site where I can log into /admin, add or edit a project, and see it reflected on the homepage immediately — no code changes, no redeploy. It's a small piece of infrastructure, but it's the difference between a portfolio that's frozen at last deploy and one that can grow as fast as the actual work does.`
      }
    ]
  }
}
