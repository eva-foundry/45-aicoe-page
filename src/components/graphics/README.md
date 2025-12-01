# Graphics & Visual Assets

This directory contains all graphic components, icons, illustrations, and visual assets for the AI Centre of Enablement website.

## Components

### CanadaWordmark
Government of Canada official wordmark with maple leaf symbol.

```tsx
import { CanadaWordmark } from '@/components/graphics/CanadaWordmark'

<CanadaWordmark />
```

### HeroBanner
Large hero section with title, subtitle, description, and optional icon.

```tsx
import { HeroBanner } from '@/components/graphics/HeroBanner'
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
import { IconCard } from '@/components/graphics/IconCard'
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
import { DecorativePattern } from '@/components/graphics/DecorativePattern'

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
import { IllustrationAI } from '@/components/graphics/IllustrationAI'

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
import { ServiceTierBadge } from '@/components/graphics/ServiceTierBadge'

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
import { StepConnector } from '@/components/graphics/StepConnector'

<StepConnector 
  orientation="vertical" // 'vertical' | 'horizontal'
  variant="solid" // 'solid' | 'dashed' | 'dotted'
/>
```

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
