# AI Centre of Enablement - Prompt Services & Workflow Enablement Program Website

A production-ready, bilingual website presenting ESDC IITB's AI CoE Prompt Services & Workflow Enablement Program.

**Experience Qualities**: 
1. Professional - Government-grade credibility with clear, authoritative presentation
2. Accessible - WCAG 2.2 AA compliant with full bilingual support
3. Practical - Action-oriented guidance that helps employees immediately understand next steps

**Complexity Level**: Light Application (multiple features with basic state)
  - Multi-page site with routing, language switching, and interactive disclosure elements

## Essential Features

**Language Toggle (EN/FR)**
- Functionality: Switch between English and French content
- Purpose: Meet GC bilingual requirements
- Trigger: User clicks language toggle in header
- Progression: Click toggle → state updates → all text content switches → URL reflects language
- Success criteria: All content available in both languages, language preference persists

**Multi-Page Navigation**
- Functionality: Navigate between 8 distinct pages with breadcrumbs
- Purpose: Organize complex program information into digestible sections
- Trigger: User clicks navigation links or breadcrumbs
- Progression: Click link → route changes → page content loads → breadcrumbs update
- Success criteria: Clear navigation hierarchy, current page highlighted, keyboard accessible

**7-Step AI Workflow Stepper**
- Functionality: Visual presentation of the AI workflow process
- Purpose: Help employees understand the structured approach
- Trigger: User views "How It Works" page
- Progression: Land on page → see numbered steps → read descriptions → understand flow
- Success criteria: Steps clearly numbered, descriptions concise, visual hierarchy clear

**Service Tiers Cards**
- Functionality: Display three tiers of support with clear distinctions
- Purpose: Help users identify appropriate support level
- Trigger: User views "Services & Tiers" page
- Progression: View page → scan tier cards → compare options → identify fit
- Success criteria: Tiers visually distinct, descriptions clear, easy to compare

**SCORM Use Case with 4 Solution Options**
- Functionality: Expandable cards showing pros/cons for each solution
- Purpose: Demonstrate real-world problem-solving approach
- Trigger: User views "Use Case" page
- Progression: Read problem → explore options → expand details → compare pros/cons → understand trade-offs
- Success criteria: Each option clearly explained, pros/cons balanced, actionable

**Implementation Roadmap Timeline**
- Functionality: Phase-based presentation of rollout plan
- Purpose: Set expectations and show structured approach
- Trigger: User views "Roadmap & Outcomes" page
- Progression: View timeline → understand phases → see activities → grasp timeline
- Success criteria: Phases sequential, activities clear, realistic timeline

## Edge Case Handling

- **Missing translations**: Fallback to English if French content unavailable
- **Long content on mobile**: Responsive stacking with maintained readability
- **Keyboard-only navigation**: Full tab order through all interactive elements
- **Screen reader use**: Semantic HTML with ARIA labels where needed
- **No JavaScript**: Progressive enhancement ensures core content remains accessible

## Design Direction

The design should evoke trust, clarity, and governmental authority while remaining approachable for employees exploring AI. It should feel official yet supportive, structured yet human. A clean, minimal interface serves the dense technical content better than rich visuals—letting the information hierarchy and white space guide attention.

## Color Selection

Custom palette following Government of Canada design standards

- **Primary Color**: Deep Blue (#26374A / oklch(0.28 0.03 245)) - Communicates governmental authority, trust, and stability
- **Secondary Colors**: 
  - Accent Red (#AF3C43 / oklch(0.46 0.12 15)) - For important callouts and required actions
  - Neutral Gray (#535353 / oklch(0.40 0 0)) - Supporting text and borders
  - Light Gray (#F8F9FA / oklch(0.98 0 0)) - Card backgrounds and sections
- **Accent Color**: Bright Blue (#335075 / oklch(0.38 0.05 245)) - For interactive elements, links, and CTAs
- **Foreground/Background Pairings**:
  - Background (White #FFFFFF): Dark Gray text (#26374A) - Ratio 10.7:1 ✓
  - Primary (Deep Blue #26374A): White text (#FFFFFF) - Ratio 10.7:1 ✓
  - Accent (Bright Blue #335075): White text (#FFFFFF) - Ratio 7.2:1 ✓
  - Card (Light Gray #F8F9FA): Dark Gray text (#26374A) - Ratio 10.5:1 ✓
  - Secondary (Accent Red #AF3C43): White text (#FFFFFF) - Ratio 5.1:1 ✓

## Font Selection

Typography should convey clarity and professionalism while maintaining high readability for dense policy and technical content. Noto Sans provides excellent multilingual support for EN/FR and is approved for GC use.

- **Typographic Hierarchy**:
  - H1 (Page Titles): Noto Sans Bold / 32px / 1.2 line-height / 0.5rem bottom margin
  - H2 (Major Sections): Noto Sans SemiBold / 24px / 1.3 line-height / 0.375rem bottom margin
  - H3 (Subsections): Noto Sans SemiBold / 18px / 1.4 line-height / 0.25rem bottom margin
  - Body Text: Noto Sans Regular / 16px / 1.6 line-height
  - Small Text: Noto Sans Regular / 14px / 1.5 line-height
  - Button Text: Noto Sans SemiBold / 16px / uppercase spacing

## Animations

Animations should be minimal and functional, supporting usability without drawing attention to themselves. Motion communicates state changes and guides focus rather than decorating the interface.

- **Purposeful Meaning**: Subtle transitions on navigation (200ms) and disclosure widgets (150ms)
- **Hierarchy of Movement**: 
  - Page transitions: 300ms fade for route changes
  - Interactive feedback: 150ms for hover states
  - Expandable sections: 200ms height animation with easing

## Component Selection

- **Components**: 
  - Header with language toggle, Canada wordmark, and top navigation
  - Breadcrumbs for page hierarchy
  - Hero banners with icon, title, subtitle, and description (3 variants)
  - Cards for service tiers, use case options, and outcomes
  - Icon cards for feature highlights with hover animations
  - Stepper for workflow model and roadmap phases
  - Details/accordion for expandable content (pros/cons)
  - Button for CTAs and navigation
  - Notice for important callouts
  - Container and Grid for layout structure
  - Service tier badges with distinctive icons
  - Decorative pattern overlays (dots, grid, waves, circuit)
  - AI-themed illustrations (brain, network, workflow, collaboration)

- **Customizations**: 
  - Language switcher integrated into header
  - GC signature branding with Canada wordmark SVG component
  - Step indicator component for workflow visualization
  - Bilingual content wrapper components
  - Custom hero banner component with 3 visual variants
  - Icon card component with hover scale effects
  - Decorative background patterns for visual interest
  - Abstract AI illustrations for thematic reinforcement

- **Icon System**:
  - Phosphor Icons used consistently throughout
  - Key icons: Sparkle (innovation), Lightbulb (ideas), Users (collaboration), 
    Rocket (deployment), Check (success), Target (goals), FlowArrow (workflow),
    MapTrifold (roadmap), Warning (alerts), Envelope (contact), Stack (services)
  - Icons sized appropriately: 48px for heroes, 32px for cards, 20-24px for lists
  - Weight usage: "fill" for primary actions, "bold" for secondary elements

- **States**: 
  - Links: default (blue), hover (darker blue + underline), focus (outline ring), visited (purple tint)
  - Buttons: default (solid primary), hover (darker + shadow), active (pressed), disabled (gray + reduced opacity)
  - Cards: default (border + shadow), hover (deeper shadow)
  - Navigation: current page highlighted with bottom border

- **Icon Selection**: Minimal icon use - chevrons for expandable sections, check marks for benefits, arrow for external links

- **Spacing**: 
  - Section padding: 3rem vertical, 1.5rem horizontal
  - Card padding: 1.5rem
  - Element margins: 1rem default, 2rem between major sections
  - Grid gaps: 1.5rem

- **Mobile**: 
  - Navigation collapses to hamburger menu below 768px
  - Grid layouts stack to single column
  - Font sizes scale down 10-15%
  - Touch targets minimum 44×44px
  - Horizontal padding reduces to 1rem
