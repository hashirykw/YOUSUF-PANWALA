# Maths by Yousuf Panwala

The new website for **Sir Yousuf Panwala (YP)**: Cambridge O Level (4024), IGCSE, AS & A2 (9709) Mathematics and Additional Maths, taught in Karachi and live online.

It is a static site with no build step. `index.html` is one self-contained page with its styles and scripts inlined. It deploys on Vercel as it is.

## Design

The look is a **working notebook**, built new for this site and not based on any older version:

- **Paper theme:** cream graph paper, ink navy, cobalt and tomato.
- **Chalkboard theme:** a dark mode with the same layout. The toggle is in the nav and the choice is remembered.
- **Typefaces:** Instrument Serif, Instrument Sans, IBM Plex Mono, plus Kalam for the handwritten notes. All are self-hosted in `/fonts`.

## What's on the page

| Section | What it does |
|---|---|
| Hero | Headline, photo plate, "World distinction" seal and a margin note. |
| § 00 Unit circle | Interactive. Move the cursor or tap to turn θ, and the sine curve draws itself. |
| The result | Elsa Irfan's World Distinction in O Level Mathematics, with a tap-to-load Instagram reel. The reel only loads when tapped, so the page stays fast. |
| A letter | Sir Yousuf's "Dear Guddos" message. |
| § 01 Six "theorems" | Why Sir Yousuf, plus panels for students and parents. |
| § 02 Courses | O Level, IGCSE, AS & A2, and Additional Maths. |
| Try one | A chalkboard with three real problems. The working is revealed one line at a time. |
| § 03 Stories | Four student messages, plus the Batch of 2026 reel. |
| § 04 How you join | Three steps and the portal charges (Rs 199 O Level/AS, Rs 399 A2). |
| § 05 FAQ | Common questions. |
| § 06 Enroll | A validated form that opens WhatsApp (+92 302 2581159) with the details already written. Nothing is stored on the site. |
| Contact cards, footer, Nexlyr bar | Contact details, portal and policy links, Nexlyr branding. |
| "Ask yp" assistant | Answers questions about levels, fees, the portal, demos and joining. |

The site also includes PWA files (manifest, icons, service worker), `og.jpg` for share previews, a 404 page, a sitemap and robots.txt.

## Things to confirm or supply

1. **Photo.** Add Sir Yousuf's portrait as `yousuf-panwala.jpg` in the repo root (portrait, about 800×1000).
   - Until then, the page tries the photo URL from the current site.
   - If that fails, it shows the designed "yp" plate instead, so nothing ever looks broken.
   - Once this site replaces the current platform on yousufpanwala.com, that old URL will stop working. The local file is needed then.
2. **Portal links.** Sign in, Register and the Terms, Privacy, Refund and Cancellation policies stay on the current portal platform, which is run by Hamza's Tech Solution.
   - Every link is built from one constant, `const PORTAL = 'https://yousufpanwala.com'`, in `index.html`.
   - If the portal moves to a subdomain (for example `portal.yousufpanwala.com`), change that one line.
3. **Domain.**
   - The canonical URL and the share-image URLs point to `https://yousufpanwala.com/`.
   - If the site goes live on another domain first, update the `og:*`, `twitter:image` and `canonical` tags.
   - Also update `sitemap.xml` and `robots.txt`.
4. **Student stories** are retold in reported speech from the messages on the current site. They are not invented and not quoted word for word. Swap in exact quotes if the students agree.
5. **Old-site stats bug.** The current site's stats strip shows "0% concept-based teaching". That figure is not used here, and no numbers were invented.

## Local preview

```
npx serve .
```
