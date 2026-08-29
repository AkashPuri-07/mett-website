# CLAUDE.md — Project Rules for METT Website

These are standing rules for how you (Claude Code) work on this repo. Follow them for every task, not just the first one.

## Working style
- Before making any change, explain in plain, simple terms what you're about to do and why — no jargon dumps.
- Never `git add`, `git commit`, or `git push` without asking first and getting an explicit yes.
- Work in small, reviewable steps. Don't batch unrelated changes into one commit.
- I'm on Windows 11 using Command Prompt (not PowerShell, not WSL) — give commands that work there.
- This is a static site for GitHub Pages. Don't introduce anything that needs a Node server at runtime — build output must be static HTML/CSS/JS only.

## Tech stack (already decided — don't change without asking)
- Vite + React + Tailwind CSS + Framer Motion
- Output: static build deployed via GitHub Pages, custom domain `mett.co.in`
- No backend, no database, no server-side code

## Content & images
- Use only the content in `PROJECT_BRIEF.md` and the source brochure — don't invent facts about METT.
- Download the images listed in the Image Manifest into `/public/images/` and reference them locally. Do not hotlink directly to Unsplash URLs in production — self-hosted images are faster and won't break if the source deletes the photo.
- Compress/optimize images on the way in (WebP where practical) — this is a performance + SEO factor (Core Web Vitals).

## SEO — non-negotiable checklist for this build
- Every page: unique `<title>` and `<meta name="description">`
- Open Graph + Twitter Card meta tags (title, description, image, url)
- Canonical tag pointing to `https://mett.co.in/...`
- `sitemap.xml` and `robots.txt` at the root, sitemap referencing the live domain (not a github.io URL)
- Semantic HTML: one `<h1>` per page, logical heading order, `alt` text on every image
- JSON-LD structured data: `Organization` (or `EducationalOrganization`) schema with name, url, logo, description
- Fast load: static assets, no render-blocking scripts, images sized/optimized

## Analytics & Search Console (prep now, verify later)
- Add the GA4 `gtag.js` snippet with a placeholder measurement ID (`G-XXXXXXXXXX`) — I'll swap in the real ID once I create the GA4 property.
- Leave a clear spot/instructions for the Google Search Console verification meta tag (or note that I'll do domain verification via DNS TXT record through Hostinger instead — that avoids needing to touch the code at all).
- Once live: I'll submit `sitemap.xml` in Search Console and confirm GA4 is receiving data — flag if anything in the build would block either.

## Deploy
- Confirm the build output and `CNAME` file (containing `mett.co.in`) are correct before I push to GitHub Pages.
- Always show me what changed before committing.
