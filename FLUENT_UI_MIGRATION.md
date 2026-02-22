# Fluent UI Migration Guide

This document outlines the transition from shadcn/Tailwind CSS to Microsoft Fluent UI v9 for the AI Centre of Enablement portal.

## Overview

The application has been refactored to use **Fluent UI (Microsoft's design system)** instead of the GC Design System and shadcn components. This provides:

- Modern, enterprise-grade React components
- Consistent Microsoft 365-like experience
- Built-in accessibility (WCAG 2.1 AA compliant)
- TypeScript-first development
- Theme customization aligned with Government of Canada branding

## Key Changes

### 1. **Dependencies Added**

```json
{
  "@fluentui/react-components": "^9.x",
  "@fluentui/react-icons": "^2.x"
}
```

### 2. **Theme Configuration**

Created `/src/lib/fluent-theme.ts` with custom GC-branded Fluent UI theme:
- Primary colors based on GC blue (#26374A)
- Accent colors using GC red (#AF3C43)
- Custom spacing and typography tokens

### 3. **Component Mapping**

| Old (shadcn/Tailwind) | New (Fluent UI) | Location |
|----------------------|-----------------|----------|
| `Button` | `Button` from `@fluentui/react-components` | Throughout |
| `Card` | Custom `FluentCardCustom` wrapping Fluent `Card` | `/src/components/fluent/FluentCard.tsx` |
| `Input` | `Input` from `@fluentui/react-components` | Forms |
| `Dialog` | `Dialog`, `DialogSurface`, etc. | Modal interactions |
| Custom breadcrumbs | `FluentBreadcrumbs` | `/src/components/fluent/FluentBreadcrumbs.tsx` |
| Phosphor Icons | `@fluentui/react-icons` | Icon imports |
| Tailwind classes | `makeStyles` from Fluent UI | Component styling |

### 4. **New Core Components**

#### **FluentHeader** (`/src/components/fluent/FluentHeader.tsx`)
- Government of Canada branded header
- Bilingual language toggle
- Navigation with active state highlighting
- Canada wordmark integration

#### **FluentFooter** (`/src/components/fluent/FluentFooter.tsx`)
- GC footer with required links
- Copyright and GC symbol
- Accessible footer navigation

#### **FluentContainer** (`/src/components/fluent/FluentContainer.tsx`)
- Max-width container (1200px)
- Responsive padding
- Replaces old GCContainer

#### **FluentCard** (`/src/components/fluent/FluentCard.tsx`)
- Custom-styled Fluent Card
- Hover effects
- GC-branded shadows and borders

#### **FluentBreadcrumbs** (`/src/components/fluent/FluentBreadcrumbs.tsx`)
- Hierarchical navigation
- Fluent icons for separators
- Accessible breadcrumb trail

#### **EVAAskMeFluent** (`/src/components/EVAAskMeFluent.tsx`)
- Complete Fluent UI redesign of EVA assistant
- Floating button with GC red branding
- Dialog-based chat interface
- Bilingual contextual help

### 5. **Styling Approach**

Replace Tailwind CSS classes with Fluent UI's `makeStyles`:

**Before (Tailwind):**
```tsx
<div className="flex items-center justify-between p-4 bg-primary text-white">
  <h1 className="text-2xl font-bold">Title</h1>
</div>
```

**After (Fluent UI):**
```tsx
import { makeStyles } from '@fluentui/react-components'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    backgroundColor: '#26374A',
    color: '#FFFFFF',
  },
  title: {
    fontSize: '24px',
    fontWeight: 600,
  },
})

function Component() {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Title</h1>
    </div>
  )
}
```

### 6. **Icon Migration**

**Before (Phosphor Icons):**
```tsx
import { Sparkle, Users, ArrowRight } from '@phosphor-icons/react'

<Sparkle size={24} weight="fill" />
```

**After (Fluent Icons):**
```tsx
import { 
  Sparkle24Filled, 
  People24Regular, 
  ArrowRight24Regular 
} from '@fluentui/react-icons'

<Sparkle24Filled />
```

## Migration Steps for Pages

### Step 1: Update Imports

```tsx
// Remove
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GCContainer } from '@/components/gc/GCContainer'

// Add
import { Button, makeStyles } from '@fluentui/react-components'
import { FluentContainer, FluentCardCustom } from '@/components/fluent'
import { Sparkle24Filled } from '@fluentui/react-icons'
```

### Step 2: Replace Components

```tsx
// Before
<GCContainer>
  <GCCard>
    <GCCardHeader>
      <GCCardTitle>Title</GCCardTitle>
    </GCCardHeader>
    <GCCardContent>Content</GCCardContent>
  </GCCard>
</GCContainer>

// After
<FluentContainer>
  <FluentCardCustom>
    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px' }}>
      Title
    </h3>
    <div>Content</div>
  </FluentCardCustom>
</FluentContainer>
```

### Step 3: Convert Styling

Create a `useStyles` hook for each component with custom styling:

```tsx
const useStyles = makeStyles({
  section: {
    padding: '48px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  // ... more styles
})

function MyPage() {
  const styles = useStyles()
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {/* content */}
      </div>
    </div>
  )
}
```

## Button Variants

Fluent UI buttons have different appearance options:

```tsx
<Button appearance="primary">Primary Action</Button>
<Button appearance="outline">Secondary Action</Button>
<Button appearance="subtle">Subtle Action</Button>
<Button appearance="transparent">Transparent Action</Button>
```

## Accessibility Features

All Fluent UI components include built-in accessibility:
- Keyboard navigation
- ARIA attributes
- Screen reader support
- Focus management

Always add appropriate labels:
```tsx
<Button 
  icon={<Send24Regular />}
  aria-label="Send message"
/>
```

## Theme Customization

Edit `/src/lib/fluent-theme.ts` to adjust:
- Brand colors
- Spacing scale
- Border radius
- Shadow definitions

## Resources

- [Fluent UI React Components](https://react.fluentui.dev/)
- [Fluent UI Icons](https://react.fluentui.dev/?path=/docs/icons-catalog--page)
- [makeStyles API](https://griffel.js.org/react/api/make-styles)

## TODO: Complete Migration

The following pages still need to be migrated to Fluent UI:

- [ ] HomePage.tsx
- [ ] ProgramOverviewPage.tsx
- [ ] HowItWorksPage.tsx
- [ ] ServicesPage.tsx
- [ ] IntakeOptimizationPage.tsx
- [ ] UseCasePage.tsx
- [ ] RoadmapPage.tsx
- [ ] ContactPage.tsx

Follow the patterns established in the FluentHeader, FluentFooter, and EVAAskMeFluent components.

## Testing

After migration:
1. Test all interactive elements with keyboard only
2. Verify bilingual content switching
3. Test responsive layouts on mobile (< 768px)
4. Validate color contrast (WCAG AA: 4.5:1 for text)
5. Screen reader testing with NVDA/JAWS

## Support

For questions about Fluent UI implementation, consult:
- [Fluent UI Documentation](https://react.fluentui.dev/)
- Microsoft Teams (uses Fluent UI extensively)
- [GitHub Issues](https://github.com/microsoft/fluentui/issues)
