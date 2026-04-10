# Shivam Rajput — Portfolio

Personal developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

**Live:** https://shivam-codes.vercel.app/

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 (CSS custom properties for theming)
- **Fonts:** Geist Sans + Geist Mono via `geist` package
- **Icons:** Phosphor Icons (`@phosphor-icons/react`)
- **Animation:** Framer Motion (spring physics, scroll-linked parallax, staggered reveals)
- **Scrolling:** react-scroll (nav spy, smooth scroll)
- **Email:** EmailJS (contact form)
- **Toasts:** react-toastify

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout — Geist fonts, ThemeProvider, skip-link
│   ├── page.js            # Entry — imports Main
│   ├── main.jsx           # Section orchestrator
│   └── globals.css         # CSS custom properties (dark/light), noise overlay, focus rings
├── context/
│   └── ThemeContext.jsx    # Theme state, localStorage, prefers-color-scheme, circle transition
├── components/
│   ├── Navbar/Navbar.jsx   # Floating glass pill nav, mobile hamburger, theme toggle
│   ├── ThemeToggle/ThemeToggle.jsx  # Sun/moon button with Nothing-style circle transition
│   ├── Lander/Lander.jsx  # Ghost text parallax hero, eyebrow badge, double-bezel photo
│   ├── About/About.jsx    # Editorial two-column split — bio + tech pills
│   ├── Experience/Experience.jsx  # Timeline with emerald dots — RUH AI, Rapid Innovation
│   ├── Projects/Projects.jsx      # Double-bezel card grid — Secret Share, ETH Share
│   ├── Contact/Contact.jsx        # Glass-border form with EmailJS integration
│   └── Footer/Footer.jsx          # Minimal footer with Phosphor social icons
```

## Design System

### Theming

All colors use CSS custom properties defined in `globals.css` under `[data-theme="dark"]` and `[data-theme="light"]`. Tailwind resolves them via `var()` in `tailwind.config.js`.

**Dark theme (default):** OLED canvas `#0e1011`, emerald accent `#34d399`, zinc neutrals
**Light theme:** Warm off-white `#f8f8f6`, green accent `#16a34a`, inverted glass morphism

Theme toggle triggers a Nothing OS-style expanding circle animation that covers the viewport before swapping.

### Key Patterns

- **Double-bezel cards:** Outer shell (`bg-glass`, `border-glass-border`, `rounded-3xl`, `p-1.5`) wrapping inner core (`bg-surface-light`, calculated smaller radius)
- **Glass morphism:** `bg-glass`, `border-glass-border`, `backdrop-blur-xl`
- **Spring animations:** `type: "spring"`, `stiffness: 100`, `damping: 20` via Framer Motion
- **Scroll reveals:** `whileInView` + `staggerChildren` on all sections
- **Ghost text parallax:** `useScroll` + `useTransform` for hero background text

### Anti-Patterns (Intentionally Avoided)

- No purple/blue AI aesthetic
- No Inter/Roboto fonts
- No FontAwesome icons
- No centered hero layouts
- No 3-column card grids
- No carousels
- No separate CSS files — all Tailwind utility classes

## Changelog (Redesign from Original)

### Phase 1 — Full Redesign

1. **Dependency swap** — Removed FontAwesome, react-slick, styled-components, @next/font. Added Phosphor Icons, Geist fonts.
2. **OLED dark theme** — Custom Tailwind config with canvas/surface/accent color system, Geist fonts, custom easings.
3. **Floating glass pill navbar** — Centered glassmorphism nav with blur, mobile hamburger with spring-animated morph, full-screen overlay menu.
4. **Ghost text hero** — Giant "SHIVAM RAJPUT" parallax background text, offset content layout, floating double-bezel profile photo.
5. **Editorial about section** — Two-column grid with bio and glass-border tech pills.
6. **Double-bezel project cards** — Static 2-col grid replacing carousel, hover overlays with live/GitHub links.
7. **Dark contact form** — Glass-border inputs, EmailJS preserved, loading spinner, dark toast container.
8. **Footer** — Replaced floating social sidebar with minimal border-top footer with Phosphor icons.
9. **Deleted** — All separate CSS files, SocialCard component, duplicate assets.
10. **Accessibility** — Skip-to-content link, semantic HTML, aria-labels, form labels, focus-visible rings.

### Phase 2 — Light/Dark Theme Toggle

11. **ThemeProvider context** — React context managing theme state with localStorage persistence and `prefers-color-scheme` detection on first visit.
12. **CSS custom properties** — All hardcoded colors replaced with `var()` references. Both dark and light palettes defined in `globals.css`.
13. **Nothing OS-style transition** — Expanding circle animation from toggle button covers viewport, theme swaps behind it, circle fades out to reveal new theme. Zero flicker.
14. **ThemeToggle component** — Circular button with animated sun/moon icon swap (spring rotation + AnimatePresence).
15. **Navbar updated** — Removed "SR" logo, added theme toggle with divider, mobile toggle next to hamburger.

### Phase 3 — Content Updates

16. **Hero intro updated** — "I'm a full-stack and AI developer who's worked mostly with AI products."
17. **Experience section added** — Timeline layout with RUH AI (2025–Present) and Rapid Innovation (2024–2025).
18. **Projects trimmed** — Kept Secret Share and ETH Share. Removed Facebook Clone (phishing repo name) and Weather App (tutorial-level).
19. **Secret Share updated** — New live URL (`secret-share-ebon.vercel.app`), fresh screenshot from live site.
20. **Nav updated** — Added "experience" link.

## Environment Variables

For the contact form to work, set these in `.env.local`:

```
NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_API_KEY=your_emailjs_public_key
```

## Deploy

```bash
npm run build    # Verify build passes
```

Deploy to Vercel — connect repo and push. No additional config needed.
