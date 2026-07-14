# Image assets needed

Drop the real image files into this folder using the **exact filenames** below — every
page already references them by these names, so the site will pick them up automatically
once they're added. No code changes required.

| Filename | Used on | Notes |
|---|---|---|
| `logo.png` | Header + footer, all pages | Circular logo, transparent background |
| `logo-white.png` | Footer (dark background) | Optional reversed/white version of the logo |
| `vision2030.png` | Footer + Home Vision 2030 banner | Official Vision 2030 logo, provided by the owner — do not recreate |
| `favicon.png` | All pages (`<head>`) | 512x512 source image for favicon generation |
| `og-image.jpg` | All pages (`<head>` Open Graph tags) | 1200x630 social share image |
| `hero-home.jpg` | Home hero background | Wide construction/skyline shot |
| `about-storefront.jpg` | About page banner | Establishment exterior/signage photo |
| `owner-portrait.jpg` | About page, owner's message | Portrait orientation |
| `division-construction.jpg` | Services page, Construction & Contracting | |
| `division-manpower.jpg` | Services page, Manpower Supply | |
| `division-food.jpg` | Services page, Food Processing & Preservation | |
| `division-transport.jpg` | Services page, Transport & Logistics | |
| `division-hospitality.jpg` | Services page, Hospitality & Accommodation | |
| `values-safety.jpg` | About page, core values section | |
| `cta-handshake.jpg` | Home closing call-to-action | |
| `blog-thumb-1.jpg` | Blog listing + post 1 | Vision 2030 / construction post |
| `blog-thumb-2.jpg` | Blog listing + post 2 | Manpower supply post |
| `blog-thumb-3.jpg` | Blog listing + post 3 | Food safety post |
| `blog-thumb-4.jpg` | Blog listing + post 4 | Transport & logistics post |

## Placeholder behavior

Until these files are added, every `<img>` tag will fail to load. That's expected and
handled gracefully: `style.css` gives every image a fixed aspect ratio and a soft
gold/cream placeholder background (see the `img` rules near the top of the file), so
the layout does not break or collapse — you'll just see the alt text and a neutral
background block instead of a broken-image icon. As soon as a correctly named file is
dropped in, it replaces the placeholder automatically.
