# agentsofone.com

Agents of One — by Jessie Gao. How one founder runs a global brand with an AI team instead of a payroll. Built with [Astro](https://astro.build), deployed to GitHub Pages, domain on Cloudflare.

## Run locally
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Write a note
Add a Markdown file to `src/content/notes/`, e.g. `src/content/notes/ai-photography-pilot.md`:
```md
---
title: "Ten outfits, two shoots: AI photography against the real thing"
description: "What it cost per look, where the AI fell short, and what I'd tell another brand owner."
date: 2026-12-01
kind: case-study        # note | case-study
tag: Photography
draft: false            # true hides it everywhere
---
Body in Markdown. Images go in `public/notes/` and are referenced as `/notes/filename.jpg`.
```
Commit and push to `main` — GitHub Actions rebuilds and deploys in about a minute.

## Where things live
- `src/pages/` — the pages (index, work, work-with-me, building, notes)
- `src/components/` — Nav, Footer, Brand (A·1 tile + name), Byline, Wordmark (Jessie Gao), Mark (the dandelion spark)
- `src/styles/global.css` — the brand system: palette variables, type, buttons, cards
- `public/` — favicon, touch icon, OG image, CNAME, robots

## Brand system (v1)
Ground #F5F4F1 · Ink #141414 · Hero (Tomato) #D4502A · Support #3A3A3A · Support light #CFCAC2 · Tint #F6E1D8
Display: DM Serif Display · Body/UI: Manrope · Mark: dandelion spark on the i of Jessie

## Deploy (one-time setup)
1. Create a GitHub repo `gaolujessie/theairunbrand` (public) and push this folder to `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` does the rest.
3. Repo → Settings → Pages → Custom domain: `agentsofone.com` (the `public/CNAME` file keeps it set). Tick "Enforce HTTPS" once the certificate is issued.
4. Cloudflare DNS for agentsofone.com (jessiegao.com redirects here via a Cloudflare redirect rule) (proxy status: DNS only / grey cloud while the GitHub certificate is issued; you can switch to proxied afterwards):
   - `A    @    185.199.108.153`
   - `A    @    185.199.109.153`
   - `A    @    185.199.110.153`
   - `A    @    185.199.111.153`
   - `CNAME www  gaolujessie.github.io`
5. Cloudflare → Email → Email Routing: forward `hello@agentsofone.com` (and `hello@jessiegao.com`) → your Gmail. Done 19 Nov 2026.

## Still to fill in
- Portrait (`public/portrait.jpg`, 4:5, ≥1600px wide) and three Work images
- `[AUDIT PRICE]` and `[MONTHLY PRICE]` in `src/pages/work-with-me.astro`
- Newsletter form action (Buttondown / Kit / Mailchimp) in `src/pages/index.astro`
- Application form action (Tally / Formspree) in `src/pages/work-with-me.astro`
