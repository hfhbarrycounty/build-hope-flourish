# Image Assets Guide

All images live in `src/assets/`. To swap an image, just replace the file with the same name (keep the extension).

## Home Page
- `slideshow1.jpg` – `slideshow6.jpg` — Hero slideshow at top of home page (used in `src/components/HeroSlideshow.tsx`)
- `shelter.png` — "Shelter" icon (Building Strength section)
- `strength.png` — "Strength" icon
- `stability.png` — "Stability" icon
- `self-reliance.png` — "Self-Reliance" icon
- `news1.jpg` – `news5.jpg` — News carousel images (edit text in `src/lib/news.ts`)

## Page Hero Images
- `about.jpg` — About page hero
- `whatwedo.jpg` — What We Do page hero
- `whatwedo-detail.jpg` — What We Do content image (inside the body)
- `volunteer.jpg` — Volunteer page hero
- `donate.jpg` — Donate page hero
- `restore.jpg` — ReStore page hero

## Branding
- `header-logo.jpg` — Logo used in the header and footer

## How to replace an image
1. Prepare your new image (JPG for photos, PNG for logos/icons).
2. Save it over the existing file using the **exact same filename** (e.g. `about.jpg`).
3. Done — it will appear on the site automatically.

## How to add a new news article
See instructions at the top of `src/lib/news.ts`.
