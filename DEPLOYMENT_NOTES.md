# Deployment Notes

## Current Project State (Iteration 32)

This is the **AI Centre of Enablement - Prompt Services & Workflow Enablement Program** website for Employment and Social Development Canada (ESDC).

### Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **UI Library**: Fluent UI 9 (Microsoft's enterprise design system)
- **Routing**: React Router DOM v7
- **Internationalization**: Custom i18n implementation (EN/FR)
- **Styling**: Fluent UI tokens + custom CSS
- **Icons**: Fluent UI Icons + Phosphor Icons

### Key Features

1. **Multi-page Application** with 8 main routes:
   - Home (`/`)
   - Program Overview (`/program-overview`)
   - How It Works (`/how-it-works`)
   - Services (`/services`)
   - Intake Optimization (`/intake-optimization`)
   - Use Case: SCORM to Storyboard (`/use-case`)
   - Roadmap & Outcomes (`/roadmap`)
   - Contact (`/contact`)

2. **Bilingual Support** (EN/FR):
   - Language toggle in header
   - All content translated
   - i18n context provider

3. **EVA AskMe Chat Widget**:
   - Floating chat button with Canadian flag icon
   - Collapsible chat window
   - Bilingual support
   - Dark red theme matching GC branding

4. **Official Government of Canada Branding**:
   - GC signatures in header/footer
   - Canada wordmark
   - Proper bilingual formatting

5. **Accessibility**:
   - WCAG 2.2 compliant
   - Semantic HTML
   - Keyboard navigation
   - Screen reader support

### Project Structure

```
/workspaces/spark-template/
├── src/
│   ├── App.tsx                        # Main app with routing
│   ├── components/
│   │   ├── fluent/
│   │   │   ├── FluentHeader.tsx       # Site header with nav & language toggle
│   │   │   └── FluentFooter.tsx       # Site footer with GC branding
│   │   ├── gc/                        # Government of Canada specific components
│   │   ├── graphics/                  # Graphic components
│   │   ├── EVAAskMeFluent.tsx         # EVA chat widget
│   │   └── ui/                        # shadcn components (40+)
│   ├── pages/
│   │   ├── HomePageFluent.tsx
│   │   ├── ProgramOverviewPage.tsx
│   │   ├── HowItWorksPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── IntakeOptimizationPage.tsx
│   │   ├── UseCasePage.tsx
│   │   ├── RoadmapPage.tsx
│   │   └── ContactPage.tsx
│   ├── i18n/
│   │   ├── I18nContext.tsx            # i18n provider
│   │   └── translations.ts            # All translations
│   ├── lib/
│   │   ├── fluent-theme.ts            # Fluent UI theme config
│   │   └── utils.ts
│   ├── assets/                        # Images, icons, etc.
│   ├── index.css                      # Global styles
│   └── main.tsx                       # Entry point
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

### To Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### To Deploy to GitHub

Since this is a Spark workspace, you need to configure the git remote manually:

```bash
# Check current git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Iteration 32: Fluent UI implementation complete"

# Add remote repository (if not already added)
git remote add origin https://github.com/eva-foundry/43-aicoe-page.git

# Push to main branch
git push -u origin main
```

### GitHub Pages Deployment (Optional)

To deploy as a static site on GitHub Pages:

1. Update `vite.config.ts` to set the correct base path:
   ```typescript
   base: '/43-aicoe-page/'
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Push the `dist` folder to the `gh-pages` branch or configure GitHub Pages in repository settings.

### Azure Static Web Apps Deployment (Optional)

1. Create an Azure Static Web App resource
2. Connect to your GitHub repository
3. Set build configuration:
   - App location: `/`
   - Api location: `` (leave empty)
   - Output location: `dist`

### Dependencies Overview

- `@fluentui/react-components`: ^9.73.0
- `@fluentui/react-icons`: ^2.0.319
- `react`: ^19.0.0
- `react-router-dom`: ^7.13.0
- `typescript`: ^5.7.3
- `vite`: ^6.4.1

### Known Issues & Notes

- The project was originally built with GC Design System, then migrated to Fluent UI
- Some legacy files may reference Tailwind or shadcn (in `components/ui/`) but are not actively used
- EVA AskMe widget is a client-side implementation; for production, connect to actual EVA backend API
- All official GC symbols are loaded from CDN URLs (see `components/fluent/FluentHeader.tsx` and `FluentFooter.tsx`)

### Next Steps

1. ✅ Complete Fluent UI migration
2. ✅ Add bilingual support
3. ✅ Implement EVA AskMe widget
4. ✅ Add all page content
5. ⏳ Configure git remote and push to GitHub
6. ⏳ Set up CI/CD pipeline (optional)
7. ⏳ Connect EVA AskMe to production API (optional)
8. ⏳ Add analytics tracking (optional)

### Contact

For questions about this implementation, refer to the original program documentation in `PRD.md` or contact the ESDC IITB AI Centre of Enablement team.

---

**Last Updated**: Iteration 32  
**Status**: Ready for deployment
