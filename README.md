# AI Centre of Enablement - Prompt Services & Workflow Enablement Program

A production-ready, fully bilingual (EN/FR) website presenting Employment and Social Development Canada's (ESDC) Innovation, Information Technology Branch (IITB) AI Centre of Enablement "Prompt Services & Workflow Enablement Program".

## Overview

This website provides comprehensive information about the AI CoE's program designed to help ESDC employees leverage AI tools effectively through structured guidance, hands-on workflow development, and enterprise-grade support.

### Key Features

- ✅ **Fully Bilingual**: Complete English and French translations with persistent language preference
- ✅ **WCAG 2.2 AA Compliant**: Accessible design following Government of Canada standards
- ✅ **GC Design System Inspired**: Components and styling follow GC design principles and patterns
- ✅ **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
- ✅ **8 Comprehensive Pages**: Complete program information architecture
- ✅ **Production-Ready**: TypeScript, React 19, modern build tooling

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4 with custom GC color tokens
- **Components**: Custom GC-styled components + shadcn/ui base components
- **Icons**: Phosphor Icons
- **Fonts**: Noto Sans (Google Fonts)
- **State Management**: React hooks + Spark KV for persistence
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Project Structure

```
src/
├── App.tsx                           # Main app with routing
├── i18n/
│   ├── I18nContext.tsx              # Language context provider
│   └── translations.ts              # All EN/FR translations
├── components/
│   ├── gc/                          # GC Design System components
│   │   ├── GCHeader.tsx            # Site header with nav & language toggle
│   │   ├── GCFooter.tsx            # Site footer
│   │   ├── GCBreadcrumbs.tsx       # Breadcrumb navigation
│   │   ├── GCContainer.tsx         # Responsive container
│   │   ├── GCCard.tsx              # Card components
│   │   └── GCUtils.tsx             # Stepper, Notice components
│   └── ui/                          # shadcn base components
├── pages/
│   ├── HomePage.tsx                 # Landing page
│   ├── ProgramOverviewPage.tsx      # Program details & goals
│   ├── HowItWorksPage.tsx           # 7-step AI workflow model
│   ├── ServicesPage.tsx             # 3-tier service model
│   ├── IntakeOptimizationPage.tsx   # Early advisory benefits
│   ├── UseCasePage.tsx              # SCORM case study with 4 options
│   ├── RoadmapPage.tsx              # Implementation phases & outcomes
│   └── ContactPage.tsx              # How to engage
├── index.css                        # Custom GC color tokens & theme
└── main.tsx                         # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Edge, Safari)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spark-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Building for Production

1. **Create production build**
   ```bash
   npm run build
   ```

   This generates optimized static files in the `dist/` directory.

2. **Test production build locally**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist/` folder** to your hosting provider

## Deployment Options

### GitHub Pages

1. Build the project: `npm run build`
2. Install GitHub Pages package: `npm install -D gh-pages`
3. Add to `package.json`:
   ```json
   {
     "homepage": "https://<username>.github.io/<repo-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
4. Deploy: `npm run deploy`
5. Enable GitHub Pages in repository settings (branch: `gh-pages`)

### Azure Static Web Apps

1. Build the project: `npm run build`
2. Create Azure Static Web App resource
3. Configure build settings:
   - **App location**: `/`
   - **API location**: `` (leave empty)
   - **Output location**: `dist`
4. Deploy via Azure CLI or GitHub Actions integration

### Other Static Hosts

The `dist/` folder can be deployed to:
- **Netlify**: Drag & drop `dist/` folder or connect Git repository
- **Vercel**: Import project and set output directory to `dist`
- **AWS S3 + CloudFront**: Upload `dist/` contents to S3 bucket
- **GC Cloud**: Follow your department's static site deployment procedures

## Design System

### Color Tokens (GC-Inspired)

The design uses Government of Canada inspired color tokens defined in `src/index.css`:

- **Primary**: Deep Blue (#26374A) - Authority and trust
- **Accent**: Bright Blue (#335075) - Interactive elements
- **Secondary**: Neutral Gray (#535353) - Supporting content
- **Destructive**: Accent Red (#AF3C43) - Warnings and errors
- **Background**: White (#FFFFFF) - Page backgrounds
- **Card**: Light Gray (#F8F9FA) - Card backgrounds

All color combinations meet WCAG AA contrast requirements (4.5:1 minimum).

### Typography

- **Font Family**: Noto Sans (400, 600, 700 weights)
- **H1**: 32px bold (page titles)
- **H2**: 24px semibold (major sections)
- **H3**: 18px semibold (subsections)
- **Body**: 16px regular (1.6 line-height)
- **Small**: 14px regular (1.5 line-height)

### Spacing Scale

Based on 0.25rem (4px) increments:
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 3rem (48px)

## Content Architecture

### Pages

1. **Home** (`/`) - Hero introduction with quick links to key sections
2. **Program Overview** (`/program-overview`) - Executive summary, problem statement, opportunity, goals
3. **How It Works** (`/how-it-works`) - 7-step AI workflow model + enterprise tools
4. **Services & Tiers** (`/services`) - 3-tier support model (Prompt Advisory, Low-Code, Complex Solutions)
5. **Intake Optimization** (`/intake-optimization`) - Early advisory benefits and process
6. **Use Case: SCORM to Storyboard** (`/use-case`) - Featured case study with 4 solution options (expandable pros/cons)
7. **Roadmap & Outcomes** (`/roadmap`) - 3-phase implementation plan + expected outcomes
8. **Contact** (`/contact`) - How to engage, what to prepare, what to expect

### Internationalization (i18n)

All content is fully translated in `src/i18n/translations.ts`. The language toggle in the header switches between English and French, with preference stored in browser localStorage via Spark KV.

To add or modify translations:
1. Open `src/i18n/translations.ts`
2. Update the `en` and `fr` objects with matching keys
3. Reference translations in components using `const { t } = useI18n()`

## Accessibility Features

- **Skip to main content** link (visible on focus)
- **Semantic HTML** structure (header, nav, main, footer, section, article)
- **ARIA labels** on interactive elements
- **Keyboard navigation** support for all interactive elements
- **Focus visible** states on all interactive elements
- **Minimum 44×44px touch targets** on mobile
- **High contrast** text (WCAG AA compliant)
- **Bilingual** content (EN/FR)
- **Responsive** design (mobile-first)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a production website for ESDC IITB. For content updates or technical issues:

1. Review the content in `src/i18n/translations.ts`
2. Check component structure in `src/components/gc/` and `src/pages/`
3. Test changes locally with `npm run dev`
4. Ensure accessibility standards are maintained
5. Update both EN and FR translations

## License

© His Majesty the King in Right of Canada, represented by Employment and Social Development Canada

## Support

For questions about:
- **Program content**: Contact AI Centre of Enablement
- **Technical implementation**: Contact IITB Web Services
- **Accessibility**: Contact IITB Accessibility Office

---

**Built with React, TypeScript, and care for accessibility and bilingual excellence.**
