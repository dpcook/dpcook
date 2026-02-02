# David Cook - Personal Website

## Project Overview

Personal biography website for an academic scientist running a translational cancer research lab. This is NOT a lab website—it's a personal site focused on biography, career timeline, and occasional writing.

## Tech Stack

- **Framework:** Astro (static site generator with islands architecture for interactive components)
- **Styling:** Tailwind CSS (utility-first, great for minimalist design)
- **Animations:** CSS animations + Intersection Observer for scroll-triggered effects
- **Interactive components:** Can add React/Svelte/D3 components as needed for data visualizations
- **Deployment:** Vercel, Netlify, or GitHub Pages (all free for static sites)

## Site Structure

```
/                → Home (introduction, headshot, key highlights)
/about           → Full biography with integrated vertical timeline
/notes           → Writing/articles (not "blog")
/notes/[slug]    → Individual note/article
```

Optional future additions:
- `/projects` - If wanting to showcase specific work/visualizations
- `/contact` - If wanting a dedicated contact page (or just include in footer)

## Design System

### Philosophy
- Clean, minimalist, tech-forward aesthetic
- Generous whitespace
- No academic stuffiness—modern and approachable
- Content-first, let the writing breathe

### Typography
- **Font:** Clean sans-serif throughout (options: Inter, DM Sans, or system fonts)
- **Scale:** Clear hierarchy with restrained sizes
- **Line height:** Generous for readability (1.6-1.75 for body)

### Color Palette

**Light Mode:**
- Background: White (#FFFFFF) or very subtle warm gray
- Text: Near-black (#1a1a1a or similar)
- Accent: Warm orange (Claude-inspired, ~#E07A3A or similar)
- Secondary accent: Complementary blue (for links, highlights)

**Dark Mode:**
- Background: Deep charcoal (#0f0f0f or #1a1a1a)
- Text: Off-white (#f5f5f5)
- Accent: Same orange (may need slight adjustment for contrast)
- Secondary: Complementary blue

### Components

**Timeline (About page)**
- Vertical layout, scrolls naturally with page
- Subtle entrance animations (fade + slide) triggered on scroll
- Clean connector line
- Cards/entries for each milestone
- Dates on alternating sides or consistent left rail

**Notes listing**
- Clean cards or simple list
- Date, title, brief excerpt
- Tags optional

### Imagery
- High-quality headshot(s)
- Keep imagery minimal—let typography and whitespace do the work
- If adding scientific imagery, keep it abstract/tasteful

## Content Structure

### Home Page
- Brief introduction (2-3 sentences max)
- Headshot
- Quick navigation to About/Notes
- Optional: Featured note or recent writing

### About Page
- Extended biography narrative
- Integrated timeline showing career/education milestones
- Current focus/interests

### Notes
- Markdown-based content
- Frontmatter: title, date, description, tags (optional)
- Code syntax highlighting (for any technical posts)

## Development Guidelines

### File Organization
```
src/
├── components/      # Reusable UI components
├── layouts/         # Page layouts (Base, Note)
├── pages/           # Route pages
│   ├── index.astro
│   ├── about.astro
│   └── notes/
├── content/         # Markdown content (notes)
├── styles/          # Global styles, Tailwind config
└── assets/          # Images, fonts
```

### Conventions
- Use Astro components for static content
- Use React/Svelte only when interactivity is needed (islands)
- Mobile-first responsive design
- Semantic HTML for accessibility
- Lazy load images

### Performance Targets
- Lighthouse score: 95+ across all metrics
- First contentful paint: <1s
- No layout shift

## Future Considerations

- Interactive data visualizations (D3, Observable Plot)
- RSS feed for notes
- Search functionality
- Analytics (privacy-respecting: Plausible, Fathom)
