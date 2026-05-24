# @lollypop-ui/core

Production-ready React component library with accessibility-first design.

## Installation

```bash
npm install @lollypop-ui/core
```

## Usage

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

## Components

### Button

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

### Input

```tsx
<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Dialog

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

## Theming

The library includes built-in theming support with light and dark modes.

```tsx
import { ThemeProvider, useTheme } from '@lollypop-ui/core';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

## License

MIT
