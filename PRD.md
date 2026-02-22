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

**EVA AskMe Interactive Assistant**
- Functionality: Floating bilingual AI assistant widget providing comprehensive contextual help and guidance across all portal pages
- Purpose: Help users navigate the portal, understand features, get detailed answers to program questions, and access relevant information based on their current context
- Trigger: User clicks floating button in bottom-right corner (accessible on all pages)
- Progression: Click button → chat window opens with contextual greeting → user asks question or selects page-specific quick action → AI searches comprehensive knowledge base with 30+ detailed topics → receives accurate bilingual answer → can ask follow-up questions → close when done
- Success criteria: Provides accurate answers from extensive knowledge base covering program overview, 7-step workflow, service tiers, tools (EVA Chat/Copilot), intake optimization, SCORM use case, roadmap, and general guidance; adapts quick actions based on current page; maintains conversation history; supports both English and French seamlessly

## Edge Case Handling

- **Missing translations**: Fallback to English if French content unavailable
- **Long content on mobile**: Responsive stacking with maintained readability
- **Keyboard-only navigation**: Full tab order through all interactive elements
- **Screen reader use**: Semantic HTML with ARIA labels where needed
- **No JavaScript**: Progressive enhancement ensures core content remains accessible
- **EVA AskMe comprehensive knowledge**: Widget uses extensive local knowledge base (30+ topics) covering all portal content without requiring external API calls
- **EVA AskMe intelligent matching**: Uses keyword-based scoring system to find best matching answers; provides contextual boost for questions related to current page
- **EVA AskMe bilingual support**: All knowledge base content fully available in both English and French with seamless language switching
- **Repeated questions**: EVA AskMe provides consistent, detailed answers and can direct users to relevant pages
- **Widget on mobile**: Chat interface adapts to smaller screens (90vw width on mobile, fixed width on desktop)
- **Page-specific quick actions**: Quick action buttons change based on current page to offer most relevant suggestions
- **Unclear questions**: EVA provides helpful guidance suggesting specific topics users can ask about

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

- **Components** (Fluent UI v9): 
  - Header with language toggle, Canada wordmark, and top navigation (using Fluent UI Toolbar, Button)
  - Breadcrumbs for page hierarchy (Fluent UI Breadcrumb)
  - Hero banners with icon, title, subtitle, and description (3 variants, custom styled with Fluent UI tokens)
  - Cards for service tiers, use case options, and outcomes (Fluent UI Card)
  - Icon cards for feature highlights with hover animations (custom Card variants)
  - Stepper for workflow model and roadmap phases (custom implementation using Fluent UI primitives)
  - Details/accordion for expandable content (Fluent UI Accordion)
  - Button for CTAs and navigation (Fluent UI Button with various appearances)
  - Notice for important callouts (Fluent UI MessageBar)
  - Container and Grid for layout structure (CSS Grid with Fluent UI spacing tokens)
  - Service tier badges with distinctive icons (Fluent UI Badge)
  - Decorative pattern overlays (dots, grid, waves, circuit)
  - AI-themed illustrations (brain, network, workflow, collaboration)
  - EVA AskMe floating chat widget with contextual AI assistance (custom with Fluent UI Dialog/Popover)

- **Customizations**: 
  - Language switcher integrated into header (Fluent UI Button)
  - GC signature branding with Canada wordmark SVG component
  - Step indicator component for workflow visualization (custom styled)
  - Bilingual content wrapper components
  - Custom hero banner component with 3 visual variants (using Fluent UI makeStyles)
  - Icon card component with hover scale effects (Fluent UI Card with transitions)
  - Decorative background patterns for visual interest
  - Abstract AI illustrations for thematic reinforcement
  - EVA AskMe floating assistant widget with contextual awareness and bilingual support
  - Chat interface with message history, typing indicators, and quick action buttons (Fluent UI Dialog, Input, ScrollArea)

- **Icon System**:
  - Fluent UI Icons (@fluentui/react-icons) used consistently throughout
  - Key icons: Sparkle (innovation), Lightbulb (ideas), People (collaboration), 
    Rocket (deployment), Checkmark (success), Target (goals), ArrowSync (workflow),
    Map (roadmap), Warning (alerts), Mail (contact), Stack (services)
  - Icons sized appropriately: 48px for heroes, 32px for cards, 20-24px for lists
  - Regular and Filled variants available for different emphasis levels

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
