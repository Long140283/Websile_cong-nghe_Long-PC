# Architecture Guide

## Tech Stack
- **Frontend**: ReactJS + Vite
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router Dom

## Directory Structure
```text
src/
├── assets/        # Static assets (images, icons)
├── components/    # Reusable components
│   ├── layout/    # Navbar, Footer, Sidebar, Container
│   ├── ui/        # Button, Card, Badge, SkillCard, ProjectCard, etc.
│   ├── animations/ # Framer motion wrappers
│   └── sections/  # Page sections (Hero, About, Skills, etc.)
├── pages/         # Page components (Home, Blog, Downloads)
├── data/          # Static data (projects.js, skills.js, blogs.js, socials.js)
├── hooks/         # Custom React hooks
└── styles/        # Global styles and tailwind directives
```

## Routing Strategy
- `/`: Home (Landing page with all sections)
- `/blog`: Blog index
- `/blog/:id`: Blog post detail
- `/downloads`: Download center
