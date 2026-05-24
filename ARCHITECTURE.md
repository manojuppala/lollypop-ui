# Lollypop UI Architecture

## Project Structure

```
lollypop-ui/
├── apps/
│   ├── docs/              # Storybook documentation
│   │   ├── .storybook/    # Storybook config
│   │   └── stories/       # Component stories
│   └── playground/        # Example application
│       └── src/
├── packages/
│   ├── ui/               # Core component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   ├── Input/
│   │   │   │   ├── Card/
│   │   │   │   ├── Dialog/
│   │   │   │   ├── Select/
│   │   │   │   ├── Tabs/
│   │   │   │   └── Toast/
│   │   │   ├── theme/
│   │   │   ├── utils/
│   │   │   └── styles/
│   │   ├── package.json
│   │   └── tsup.config.ts
│   ├── hooks/            # Reusable React hooks
│   │   ├── src/
│   │   └── package.json
│   ├── icons/            # SVG icon library
│   │   ├── src/
│   │   └── package.json
│   └── tokens/           # Design tokens
│       ├── src/
│       │   ├── colors.ts
│       │   ├── spacing.ts
│       │   ├── typography.ts
│       │   ├── radius.ts
│       │   ├── shadows.ts
│       │   ├── zIndex.ts
│       │   └── breakpoints.ts
│       └── package.json
├── .github/
│   └── workflows/        # CI/CD pipelines
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Key Design Decisions

### 1. Monorepo Architecture

- **Tool**: Turborepo for task orchestration
- **Package Manager**: pnpm for efficient dependency management
- **Benefits**: Shared dependencies, consistent tooling, atomic commits

### 2. Component Design

- **Base**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS + tailwind-variants
- **Patterns**:
  - Compound components (Card, Dialog)
  - Polymorphic components (Button with `asChild`)
  - Controlled/uncontrolled modes
  - Proper TypeScript typing

### 3. Theming System

- CSS variables for runtime theming
- Light/dark/system modes
- Design tokens package for consistency
- Tailwind integration for developer experience

### 4. Build System

- **Bundler**: tsup (esbuild-based)
- **Outputs**: ESM + CJS + Type declarations
- **Tree-shaking**: Enabled via sideEffects field
- **SSR**: Compatible with Next.js and other frameworks

### 5. Testing Strategy

- **Unit Tests**: Vitest + React Testing Library
- **Component Tests**: Interactive behavior and accessibility
- **E2E Tests**: Playwright for critical user flows
- **Coverage**: Target >90%

### 6. Documentation

- **Storybook**: Interactive component playground
- **Features**:
  - Auto-generated props tables
  - Dark mode preview
  - Accessibility addon
  - Code examples

### 7. Release Management

- **Tool**: Changesets
- **Versioning**: Semantic versioning
- **Publishing**: Automated via GitHub Actions
- **Workflow**: PR-based version bumps

## Component Development Guidelines

### Anatomy of a Component

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.test.tsx # Tests
└── index.ts              # Public exports
```

### Component Template

```tsx
import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const componentVariants = tv({
  base: '...',
  variants: { ... },
  defaultVariants: { ... },
});

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {}

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ className }))}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';
```

## Performance Considerations

1. **Code Splitting**: Each component is tree-shakable
2. **Bundle Size**: Minimal dependencies, optimized builds
3. **Runtime**: Memoization where beneficial
4. **SSR**: No hydration mismatches

## Accessibility Requirements

- Keyboard navigation
- ARIA attributes
- Focus management
- Screen reader support
- Color contrast (WCAG AA)
- Focus visible states

## Future Roadmap

- Additional components (DataGrid, Timeline, etc.)
- Animation utilities
- Form validation integration
- CLI for component scaffolding
- Figma design system
