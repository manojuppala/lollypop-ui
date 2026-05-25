# @lollypop-ui/docs - Storybook Documentation

Interactive documentation for the Lollypop UI component library.

## 📚 Overview

This package contains Storybook documentation for all `@lollypop-ui` components, showcasing their usage, variants, and interactive examples.

## 🚀 Quick Start

### Development Mode

Run Storybook in development mode with hot-reloading:

```bash
pnpm storybook
```

This will start the Storybook dev server at `http://localhost:6006`

### Build Static Documentation

Build a static version of the documentation:

```bash
pnpm build-storybook
```

The static files will be generated in `apps/docs/storybook-static/`

### Clean Build Artifacts

Remove build artifacts and cache:

```bash
pnpm clean
```

## 📖 Available Stories

### Radix-Based Components (9 components)
Interactive, accessible components built with Radix UI:

- **Dialog** - Modal dialogs with overlay and animations
- **Select** - Dropdown select with keyboard navigation
- **Tabs** - Tabbed interface with ARIA support
- **Menu** - Dropdown menus with submenus and checkboxes
- **Drawer** - Side drawers (top, right, bottom, left)
- **Accordion** - Collapsible accordion panels
- **Slider** - Range slider with customizable steps
- **Tooltip** - Positioned tooltips with animations

### Manual Components (3+ components)
Custom-built components with full styling control:

- **Button** - Interactive buttons with variants
- **Input** - Form inputs with labels
- **Card** - Content containers

## 🎨 Features

- **Interactive Examples** - Try components with live editing
- **Multiple Variants** - See all component variations
- **Accessibility Info** - Built-in a11y testing
- **Responsive Preview** - Test components at different viewports
- **Code Snippets** - Copy-paste ready examples
- **Auto-generated Docs** - Component props documentation

## 📦 Component Stories

Each component includes multiple story variations:

### Dialog Stories
- Default - Basic modal dialog
- WithForm - Dialog with form inputs

### Menu Stories
- Default - Basic dropdown menu
- WithCheckboxes - Menu with checkbox items
- WithRadioGroup - Menu with radio group selection

### Drawer Stories
- Right - Drawer sliding from right
- Left - Drawer sliding from left
- Top - Drawer sliding from top
- Bottom - Drawer sliding from bottom

### Accordion Stories
- Single - One item open at a time
- Multiple - Multiple items can be open

### Slider Stories
- Default - Single value slider
- WithRange - Range slider with two handles
- WithSteps - Slider with step increments
- Disabled - Non-interactive state

### Tooltip Stories
- Default - Basic tooltip
- Top, Right, Bottom, Left - Positioned variations

### Select Stories
- Default - Basic select dropdown

### Tabs Stories
- Default - Basic tabbed interface

### Button Stories
- Various button variants and sizes

### Card Stories
- Different card layouts

### Input Stories
- Form input variations

## 🛠️ Configuration

Storybook is configured with:

- **Vite** - Fast build tool and dev server
- **React** - Component framework
- **TailwindCSS** - Utility-first styling
- **Accessibility Addon** - Automated a11y testing
- **Themes Addon** - Theme switching support
- **Interactions Addon** - Component interaction testing

## 📂 Project Structure

```
apps/docs/
├── .storybook/          # Storybook configuration
│   ├── main.ts         # Main config (addons, framework)
│   └── preview.tsx     # Global decorators and parameters
├── stories/            # Component stories
│   ├── Accordion.stories.tsx
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   ├── Dialog.stories.tsx
│   ├── Drawer.stories.tsx
│   ├── Input.stories.tsx
│   ├── Menu.stories.tsx
│   ├── Select.stories.tsx
│   ├── Slider.stories.tsx
│   ├── Tabs.stories.tsx
│   └── Tooltip.stories.tsx
├── styles/             # Global styles
│   └── storybook.css  # Storybook-specific styles
└── storybook-static/  # Build output (generated)
```

## 🔗 Links

- **Storybook Documentation**: https://storybook.js.org
- **Component Library**: `@lollypop-ui/core`
- **Design Tokens**: `@lollypop-ui/tokens`
- **Hooks**: `@lollypop-ui/hooks`
- **Icons**: `@lollypop-ui/icons`

## 📝 Adding New Stories

To add a new component story:

1. Create a new file: `stories/YourComponent.stories.tsx`
2. Import the component from `@lollypop-ui/core`
3. Define the meta configuration
4. Export story variations
5. Run `pnpm storybook` to see changes

Example:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@lollypop-ui/core';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <YourComponent>Hello World</YourComponent>,
};
```

## 🚢 Deployment

The static build can be deployed to any static hosting service:

- **Vercel**: Deploy the `storybook-static` folder
- **Netlify**: Configure build command as `pnpm build-storybook`
- **GitHub Pages**: Push `storybook-static` to gh-pages branch
- **AWS S3**: Upload `storybook-static` contents to S3 bucket

## 📄 License

Part of the `@lollypop-ui` monorepo. See root LICENSE file.
