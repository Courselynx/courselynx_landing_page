# CourseLynx Landing Page

Official marketing website for CourseLynx - the chat platform for .edu students.

## Overview

CourseLynx brings all of your college campus into one app, providing chats exclusively for verified .edu students. This repository contains the static HTML landing pages for the CourseLynx website.

## Pages

- **index.html** - Main homepage with hero section, feature carousel, and university slider
- **features.html** - Detailed features showcase with screenshots
- **use-cases.html** - Display of various use cases (classes, clubs, gaming, etc.)
- **become-intern.html** - Application page for CourseLynx campus internships
- **privacy-policy.html** - Privacy policy
- **eula.html** - End User License Agreement
- **terms.html** - Terms and Conditions
- **success.html** - Success confirmation page

## Project Structure

```
.
├── README.md
├── assets/
│   ├── images/          # App screenshots, UI elements, brand assets
│   └── logos/           # University logos
├── index.html
├── features.html
├── use-cases.html
├── become-intern.html
├── privacy-policy.html
├── eula.html
├── terms.html
└── success.html
```

## Features

### Landing Page
- Animated announcement banner with scrolling text
- Responsive navigation with pill-style buttons
- Hero section with headline and CTA
- 3-screen carousel showcasing Classes, Clubs, and Community features
- Floating label animations with liquid glass effects
- University logo slider showcasing partner institutions
- Mobile-responsive design

### Features Page
- Split-screen layout with image carousel and feature descriptions
- Glassmorphism design elements
- Mobile-optimized stacked layout

### Use Cases Page
- Floating bubble grid with various use cases
- Hover animations and effects
- Emoji-based visual representation

## Design Elements

- **Color Scheme**: Black background (#000000) with white text and blue accents (#DCECFC, blue gradients)
- **Typography**: Anton for headlines, Apple system fonts for body text
- **Effects**:
  - Glassmorphism with backdrop-filter blur
  - Gradient borders and shadows
  - Smooth animations and transitions
  - Levitating/floating animations

## Assets

### Images Folder (`assets/images/`)
- App screenshots (classes.png, clubs.png, community.png, etc.)
- Brand assets (cllogo.png, chrome.png)
- Store badges (appstore.png, googleplay.png)
- Background images (link.png, link2.png)
- Social proof (100k.png)

### Logos Folder (`assets/logos/`)
University partner logos including:
- UC Berkeley (cal.png)
- University of Florida (uf.png)
- Arizona State University (asu.png)
- Texas A&M (a&m.png)
- And 13 more universities

## External Links

- App Store: https://apps.apple.com/us/app/courselynx/id6475077109
- Google Play: https://play.google.com/store/apps/details?id=com.courselynx.courselynx_phoenix
- Chrome Extension: https://chromewebstore.google.com/detail/courselynx/jlkkmogoppoeklmphegjnapbahappopj

## Contact

Email: support@courselynx.com

## Technologies

- Pure HTML5 & CSS3
- No JavaScript frameworks or build tools
- Responsive design with CSS media queries
- CSS animations and transitions
- Google Fonts (Anton)

## Browser Support

Optimized for modern browsers with support for:
- CSS backdrop-filter (for glassmorphism effects)
- CSS animations
- CSS Grid and Flexbox
- Modern CSS selectors

## Cloudflare Workers deployment

This site is configured for [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/). The build step stages only deployable pages and assets in `public/`; Wrangler then uploads that directory.

```bash
pnpm install
pnpm build     # prepare the public/ deployment directory
pnpm dev       # local preview
pnpm check     # validate the upload without publishing
pnpm deploy    # publish to Cloudflare Workers
```

On the first deployment, Wrangler opens a browser so you can sign in to the
Cloudflare account that should own the Worker. The deployed Worker is named
`courselynx-landing-page`; edit `name` in `wrangler.jsonc` if a different name
is required.

## License

All rights reserved - CourseLynx © 2024
