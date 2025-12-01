# Graphics & Visual Assets

This directory contains all graphic components, icons, illustrations, and visual assets for the AI Centre of Enablement website.

## 🎨 New Enhanced Graphics (v0.85)

### IllustrationTech
Advanced technical illustrations for enterprise systems.

```tsx
import { IllustrationTech } from '@/components/graphics'

<IllustrationTech 
  variant="server" // 'server' | 'cloud' | 'security' | 'analytics' | 'automation' | 'integration'
  className="w-64 h-64 text-accent"
/>
```

**Variants:**
- `server`: Data center servers with status indicators
- `cloud`: Cloud computing with data flow
- `security`: Shield with lock icon
- `analytics`: Bar chart with trend line
- `automation`: Gear system with connections
- `integration`: Hub-and-spoke connectivity diagram

### BannerGraphic
Full-width decorative backgrounds for hero sections.

```tsx
import { BannerGraphic } from '@/components/graphics'

<div className="relative">
  <div className="absolute inset-0">
    <BannerGraphic variant="gradient-mesh" className="h-full opacity-30" />
  </div>
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

**Variants:**
- `hero`: Abstract shapes and particles
- `wave`: Flowing wave patterns
- `geometric`: Angular shapes and lines
- `particles`: Connected dot network
- `gradient-mesh`: Soft gradient blobs with grid

### FeatureIcon
Professional feature icons (64x64px SVG).

```tsx
import { FeatureIcon } from '@/components/graphics'

<FeatureIcon 
  type="prompt" // See types below
  className="text-accent"
/>
```

**Available Types:**
- `prompt`: Document with AI enhancement
- `workflow`: Process flow diagram
- `support`: Multi-user support
- `security`: Shield with checkmark
- `speed`: Speedometer with motion lines
- `innovation`: Light bulb with rays
- `collaboration`: Connected users
- `training`: Document with bookmark
- `deployment`: Upload arrow to platform
- `monitoring`: Analytics dashboard

### GovernmentBadge
Official government branding badges.

```tsx
import { GovernmentBadge } from '@/components/graphics'

<GovernmentBadge variant="esdc" />
<GovernmentBadge variant="canada" />
<GovernmentBadge variant="official" />
```

**Variants:**
- `esdc`: Employment and Social Development Canada badge
- `canada`: Canada flag emblem
- `official`: Official certification badge

### DataVisualization
Charts and data diagrams.

```tsx
import { DataVisualization } from '@/components/graphics'

<DataVisualization 
  type="progress-timeline"
  className="text-accent"
/>
```

**Types:**
- `progress-timeline`: Horizontal process tracker
- `tier-comparison`: Bar chart comparing 3 tiers
- `success-metrics`: Line graph with trend
- `workflow-funnel`: Conversion funnel diagram

### ProcessDiagram
Interactive step-by-step process visualizer.

```tsx
import { ProcessDiagram } from '@/components/graphics'

<ProcessDiagram 
  steps={[
    { label: "Submit", status: "complete" },
    { label: "Review", status: "active" },
    { label: "Deploy", status: "pending" }
  ]}
  orientation="horizontal" // or 'vertical'
/>
```

**Features:**
- Status indicators (complete/active/pending)
- Custom icons per step
- Horizontal or vertical layouts
- Responsive design

### LogoAI
AI Centre of Enablement logo component.

```tsx
import { LogoAI } from '@/components/graphics'

<LogoAI 
  variant="full"  // 'full' | 'icon' | 'text'
  size="md"       // 'sm' | 'md' | 'lg'
/>
```

## 📦 Existing Components

### CanadaWordmark
Government of Canada official wordmark with maple leaf symbol.

```tsx
import { CanadaWordmark } from '@/components/graphics'

<CanadaWordmark />
```

### HeroBanner
Large hero section with title, subtitle, description, and optional icon.

```tsx
import { HeroBanner } from '@/components/graphics'
import { Sparkle } from '@phosphor-icons/react'

<HeroBanner
  title="Page Title"
  subtitle="Optional Subtitle"
  description="Optional description text"
  variant="pattern" // 'default' | 'gradient' | 'pattern'
  icon={<Sparkle size={48} weight="fill" />}
/>
```

**Variants:**
- `default`: Card-style with primary border
- `gradient`: Colorful gradient background (primary → accent)
- `pattern`: Primary background with grid pattern overlay

### IconCard
Feature card with icon, title, and description.

```tsx
import { IconCard } from '@/components/graphics'
import { Lightbulb } from '@phosphor-icons/react'

<IconCard
  icon={<Lightbulb size={32} weight="fill" />}
  title="Feature Title"
  description="Feature description text"
  variant="accent" // 'default' | 'accent' | 'primary'
/>
```

**Variants:**
- `default`: Neutral styling with accent hover
- `accent`: Accent-colored styling
- `primary`: Primary-colored styling

### DecorativePattern
Background pattern overlays for visual interest.

```tsx
import { DecorativePattern } from '@/components/graphics'

<div className="relative">
  <DecorativePattern 
    type="dots" // 'dots' | 'grid' | 'waves' | 'circuit'
    opacity={0.1}
    className="text-accent"
  />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</div>
```

**Pattern Types:**
- `dots`: Repeating dot pattern
- `grid`: Grid lines
- `waves`: Wave pattern
- `circuit`: Circuit board style

### IllustrationAI
AI-themed abstract illustrations.

```tsx
import { IllustrationAI } from '@/components/graphics'

<IllustrationAI 
  variant="brain" // 'brain' | 'network' | 'workflow' | 'collaboration'
  className="w-48 h-48 text-accent"
/>
```

**Variants:**
- `brain`: Concentric circles representing AI/intelligence
- `network`: Connected nodes representing neural networks
- `workflow`: Process flow with boxes and connections
- `collaboration`: Three connected circles representing teamwork

### ServiceTierBadge
Badge component for service tier identification.

```tsx
import { ServiceTierBadge } from '@/components/graphics'

<ServiceTierBadge 
  tier={1} // 1 | 2 | 3
  size="md" // 'sm' | 'md' | 'lg'
/>
```

**Tiers:**
- Tier 1: Sparkle icon + Accent color
- Tier 2: Lightning icon + Accent color
- Tier 3: Rocket icon + Primary color

### StepConnector
Visual connector for step-based layouts.

```tsx
import { StepConnector } from '@/components/graphics'

<StepConnector 
  orientation="vertical" // 'vertical' | 'horizontal'
  variant="solid" // 'solid' | 'dashed' | 'dotted'
/>
```

## 🎯 Usage Best Practices

### Hero Sections
```tsx
<div className="relative mb-12">
  <div className="absolute inset-0 -z-10">
    <BannerGraphic variant="gradient-mesh" className="h-full opacity-30" />
  </div>
  <HeroBanner
    title="AI Centre of Enablement"
    subtitle="Transform Your Workflows"
    variant="pattern"
    icon={<FeatureIcon type="innovation" />}
  />
</div>
```

### Feature Grids
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <IconCard
    icon={<FeatureIcon type="security" className="text-accent" />}
    title="Enterprise Security"
    description="Built-in security and compliance"
    variant="accent"
  />
  {/* More cards */}
</div>
```

### Process Visualization
```tsx
<ProcessDiagram 
  steps={[
    { label: "Phase 1", icon: <FeatureIcon type="prompt" />, status: "complete" },
    { label: "Phase 2", icon: <FeatureIcon type="workflow" />, status: "active" },
    { label: "Phase 3", icon: <FeatureIcon type="deployment" />, status: "pending" },
  ]}
/>
```

### Data Presentations
```tsx
<div className="bg-card rounded-lg p-8">
  <h3 className="text-xl font-bold mb-6">Service Comparison</h3>
  <DataVisualization type="tier-comparison" className="text-accent" />
</div>
```

## 🎨 Design Guidelines

### Color Usage
- **Accent**: Primary interactive elements, highlights
- **Primary**: Headers, important elements
- **Muted**: Background patterns, subtle elements

### Opacity Levels
- **0.05-0.1**: Background patterns
- **0.2-0.3**: Decorative illustrations  
- **0.6-0.8**: Icons in cards
- **1.0**: Primary icons and graphics

### Sizing
- Small icons: `w-8 h-8` to `w-12 h-12`
- Feature icons: `w-16 h-16`
- Illustrations: `w-48 h-48` to `w-64 h-64`
- Banner graphics: Full width with `h-full`

## ♿ Accessibility

All graphics components follow accessibility best practices:
- SVGs include proper `aria-label` attributes where needed
- Color combinations meet WCAG AA contrast requirements
- Decorative elements use `aria-hidden` where appropriate
- Focus states are visible and clear

## ⚡ Performance

- All graphics are inline SVGs (no external requests)
- Patterns use CSS patterns for efficiency
- Illustrations are optimized for minimal DOM nodes
- Tree-shakeable imports for optimal bundle size

## Icons

The site uses **Phosphor Icons** (`@phosphor-icons/react`) throughout for consistency.

### Common Icons Used

```tsx
import { 
  Sparkle,        // Innovation, features
  Lightbulb,      // Ideas, insights
  Users,          // Collaboration, people
  Rocket,         // Launch, deployment
  Check,          // Confirmation, success
  ArrowRight,     // Navigation, next
  Target,         // Goals, objectives
  FlowArrow,      // Workflow, process
  MapTrifold,     // Roadmap, planning
  Warning,        // Alerts, problems
  Envelope,       // Contact, email
  Stack,          // Services, tiers
  ChatCircleDots, // Communication
  UsersFour,      // Teams, groups
  FlagCheckered   // Completion, outcomes
} from '@phosphor-icons/react'
```

### Icon Usage Best Practices

1. **Size**: Use consistent sizes (24, 32, 48 for key elements)
2. **Weight**: Use `"fill"` for primary actions, `"bold"` for secondary
3. **Color**: Match theme colors (accent for primary, primary for headings)

```tsx
// Good examples
<Sparkle size={48} weight="fill" className="text-accent" />
<Check size={20} weight="bold" className="text-accent" />
<ArrowRight size={18} weight="bold" />
```

## Usage Examples

### Page Hero Section
```tsx
import { HeroBanner } from '@/components/graphics/HeroBanner'
import { IllustrationAI } from '@/components/graphics/IllustrationAI'
import { Sparkle } from '@phosphor-icons/react'

<HeroBanner
  title="AI Centre of Enablement"
  subtitle="Empowering ESDC with AI Solutions"
  description="Transform your workflows with enterprise AI tools"
  variant="pattern"
  icon={<Sparkle size={48} weight="fill" />}
/>

<div className="flex justify-center my-12">
  <IllustrationAI variant="collaboration" className="w-64 h-64 opacity-20" />
</div>
```

### Feature Grid
```tsx
import { IconCard } from '@/components/graphics/IconCard'
import { Lightbulb, Users, Rocket } from '@phosphor-icons/react'

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <IconCard
    icon={<Lightbulb size={32} weight="fill" />}
    title="AI-Powered Innovation"
    description="Leverage cutting-edge AI tools"
    variant="accent"
  />
  <IconCard
    icon={<Users size={32} weight="fill" />}
    title="Collaborative Support"
    description="Expert guidance at every step"
    variant="accent"
  />
  <IconCard
    icon={<Rocket size={32} weight="fill" />}
    title="Rapid Deployment"
    description="Get solutions into production faster"
    variant="accent"
  />
</div>
```

### Decorative Section
```tsx
import { DecorativePattern } from '@/components/graphics/DecorativePattern'

<div className="relative mb-12">
  <DecorativePattern type="dots" className="text-accent" opacity={0.05} />
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-8">Quick Links</h2>
    {/* Content */}
  </div>
</div>
```

### Service Tier Display
```tsx
import { ServiceTierBadge } from '@/components/graphics/ServiceTierBadge'

<div className="flex items-start justify-between">
  <h3>Self-Serve Support</h3>
  <ServiceTierBadge tier={1} />
</div>
```

## Asset Management

### Adding New Images
Place images in `/src/assets/images/` and import them:

```tsx
import logoImage from '@/assets/images/logo.png'

<img src={logoImage} alt="Logo" />
```

### Creating Custom Icons
For custom SVG icons, create a new component in this directory following the existing pattern:

```tsx
// CustomIcon.tsx
export function CustomIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      {/* SVG content */}
    </svg>
  )
}
```

## Design Guidelines

### Color Usage
- **Accent**: Primary interactive elements, highlights
- **Primary**: Headers, important elements
- **Muted**: Background patterns, subtle elements

### Opacity Levels
- **0.05-0.1**: Background patterns
- **0.2-0.3**: Decorative illustrations
- **0.6-0.8**: Icons in cards
- **1.0**: Primary icons and graphics

### Spacing
- Icons in cards: 32px
- Hero icons: 48px
- Decorative illustrations: 48-64px (w-48 to w-64)

## Accessibility

All graphics components follow accessibility best practices:
- SVGs include proper `aria-label` attributes where needed
- Color combinations meet WCAG AA contrast requirements
- Decorative elements use `aria-hidden` where appropriate
- Focus states are visible and clear

## Performance

- All graphics are inline SVGs (no external requests)
- Patterns use CSS patterns for efficiency
- Illustrations are optimized for minimal DOM nodes
- Icons from Phosphor are tree-shakeable
