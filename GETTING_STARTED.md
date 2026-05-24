# Getting Started with Lollypop UI

This guide will help you get the Lollypop UI component library up and running.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 18.0.0
- **pnpm**: >= 8.0.0

## Installation

### 1. Install pnpm (if not already installed)

```bash
npm install -g pnpm
```

### 2. Clone and Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

## Development Workflow

### Running Storybook

View and develop components interactively:

```bash
pnpm storybook
```

This will start Storybook at `http://localhost:6006`

### Running the Playground

Test components in a real application:

```bash
cd apps/playground
pnpm dev
```

This will start the playground app at `http://localhost:5173`

### Building Packages

Build all packages:

```bash
pnpm build
```

Build a specific package:

```bash
cd packages/ui
pnpm build
```

### Running Tests

Run all tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run tests for a specific package:

```bash
cd packages/ui
pnpm test
```

### Linting and Formatting

Check code quality:

```bash
pnpm lint
pnpm format:check
```

Fix issues:

```bash
pnpm format
```

## Project Structure

```
lollypop-ui/
├── apps/
│   ├── docs/        # Storybook documentation
│   └── playground/  # Example app
├── packages/
│   ├── ui/         # Main component library
│   ├── hooks/      # React hooks
│   ├── icons/      # SVG icons
│   └── tokens/     # Design tokens
```

## Creating a New Component

### 1. Create Component Files

```bash
cd packages/ui/src/components
mkdir MyComponent
cd MyComponent
```

### 2. Create Component File (MyComponent.tsx)

```tsx
import { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const myComponentVariants = tv({
  base: 'your-base-classes',
  variants: {
    variant: {
      default: 'variant-classes',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface MyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof myComponentVariants> {}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(myComponentVariants({ variant, className }))} {...props} />;
  }
);

MyComponent.displayName = 'MyComponent';
```

### 3. Create Test File (MyComponent.test.tsx)

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent data-testid="my-component">Hello</MyComponent>);
    expect(screen.getByTestId('my-component')).toBeInTheDocument();
  });
});
```

### 4. Create Index File (index.ts)

```tsx
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';
```

### 5. Export from Main Index

Add to `packages/ui/src/index.ts`:

```tsx
export * from './components/MyComponent';
```

### 6. Create Storybook Story

Create `apps/docs/stories/MyComponent.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '@lollypop-ui/core';

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'My Component',
  },
};
```

## Publishing

### Creating a Changeset

```bash
pnpm changeset
```

Follow the prompts to describe your changes.

### Version Bump

```bash
pnpm version-packages
```

### Publish

```bash
pnpm release
```

## Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
pnpm clean
pnpm install
pnpm build
```

### Type Errors

Ensure all packages are built:

```bash
pnpm build
```

## Next Steps

- Read the [Architecture Guide](./ARCHITECTURE.md)
- Explore components in Storybook
- Check out the playground app
- Read component documentation
