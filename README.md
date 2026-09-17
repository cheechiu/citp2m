# CITP2M Playbook (Working Draft)

A Next.js site for the SCS playbook covering Project Management, Product Management, and
Outsourcing & Vendor Management. Content is adapted from the CITPM (2015) and COMIT (2008)
Bodies of Knowledge (rights held by SCS), GovTech Singapore's Agile Playbook and Software
Delivery Playbook, and PMI Disciplined Agile.

This is a first working draft, not approved SCS content. Section names, including "CITP2M,"
are provisional.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub (or GitLab/Bitbucket) repository.
2. In Vercel, click **Add New Project** and import that repository. Vercel auto-detects
   Next.js — no build configuration is needed.
3. Deploy.

Or, without a git remote, from inside this folder:

```bash
npx vercel
```

and follow the prompts (requires a Vercel account; `npx vercel login` first if not already
signed in).

## Gating the draft (optional)

The site ships with a simple HTTP Basic Auth gate (`proxy.js`) so it can be shared
privately before SCS approval. It's **off by default** — the site is open until you set two
Environment Variables in the Vercel project (Project Settings → Environment Variables):

- `SITE_USERNAME`
- `SITE_PASSWORD`

Once both are set (and the project is redeployed), every page prompts for that
username/password. Remove the variables to make the site public again.

## Structure

- `app/page.js` — front matter (purpose, how to use, certification landscape)
- `app/foundations/` — Section 1, Common Foundations
- `app/project-management/` — Section 2, Project Management
- `app/product-management/` — Section 3, Product Management
- `app/outsourcing/` — Section 4, Outsourcing & Vendor Management
- `app/progression/` — CITPM ↔ CITP2M progression notes
- `components/Nav.js` — sidebar navigation
- `components/Tag.js` — "Carried forward / Modernized / Net-new" labels used throughout

## Next content passes

See the outline doc shared with the review panel for the full open-questions list. In
particular: the "Managing AI Vendors & AI Agents" section (`app/outsourcing/page.js`) is
flagged as needing dedicated research before it's considered complete.
