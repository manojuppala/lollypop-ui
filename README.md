# 🍭 Lollypop UI

A production-ready React component library with excellent DX, accessibility-first design, and comprehensive theming support.

## ✨ Features

- 🎨 **Beautiful Components** - Production-ready components built with Radix UI primitives
- ♿ **Accessibility First** - WCAG 2.1 compliant with full keyboard navigation and screen reader support
- 🎭 **Dark Mode** - Built-in dark mode support with system preference detection
- 🎯 **Type Safe** - Full TypeScript support with exported types
- 🌳 **Tree Shakable** - Optimized bundle size with ESM and CJS outputs
- 🚀 **Performance** - Minimal runtime overhead and optimized rendering
- 📦 **Monorepo** - Organized with Turborepo for scalability
- 🧪 **Well Tested** - Comprehensive test coverage with Vitest and React Testing Library
- 📚 **Documented** - Interactive Storybook documentation
- 🎨 **Themeable** - Customizable design tokens and CSS variables

## 📦 Packages

This monorepo contains the following packages:

- `@lollypop-ui/core` - Core component library
- `@lollypop-ui/hooks` - Reusable React hooks
- `@lollypop-ui/tokens` - Design tokens (colors, spacing, typography, etc.)
- `@lollypop-ui/icons` - Tree-shakable SVG icon library

## 🚀 Quick Start

### Installation

```bash
npm install @lollypop-ui/core
# or
yarn add @lollypop-ui/core
# or
pnpm add @lollypop-ui/core
```

### Usage

```tsx
import { Button, ThemeProvider } from '@lollypop-ui/core';
import '@lollypop-ui/core/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

## 🎨 Components

- **Buttons**: Button, IconButton, ButtonGroup
- **Inputs**: Input, Textarea, Select, Combobox
- **Layout**: Card, Tabs, Dialog, Toast
- **And many more...**

## 🛠️ Development

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run Storybook
pnpm storybook

# Run playground app
cd apps/playground && pnpm dev

# Run tests
pnpm test

# Lint
pnpm lint

# Format
pnpm format
```

## 📖 Documentation

Visit our [Storybook](http://localhost:6006) for interactive component documentation and examples.

```bash
pnpm storybook
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run E2E tests
pnpm test:e2e
```

## 📝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## 📄 License

MIT © Lollypop UI

## 🏗️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build**: tsup, Turborepo
- **Styling**: Tailwind CSS, tailwind-variants
- **Primitives**: Radix UI
- **Testing**: Vitest, React Testing Library, Playwright
- **Documentation**: Storybook
- **Versioning**: Changesets
