# @lollypop-ui/icons

Tree-shakable SVG icon library for Lollypop UI.

## Installation

```bash
npm install @lollypop-ui/icons
```

## Usage

```tsx
import { SearchIcon, XIcon, CheckIcon } from '@lollypop-ui/icons';

function MyComponent() {
  return (
    <div>
      <SearchIcon size={24} color="currentColor" />
      <XIcon size={20} />
      <CheckIcon size={16} className="text-green-500" />
    </div>
  );
}
```

## Available Icons

- `SearchIcon` - Search/magnifying glass
- `ChevronDownIcon` - Chevron pointing down
- `XIcon` - Close/X icon
- `CheckIcon` - Checkmark
- `AlertCircleIcon` - Alert/warning circle
- `InfoIcon` - Information circle
- `LoaderIcon` - Loading spinner

## Props

All icons accept the following props:

- `size?: number | string` - Icon size (default: 24)
- `color?: string` - Icon color (default: 'currentColor')
- All standard SVG attributes

## Features

- ✅ Tree-shakable - Only imports what you use
- ✅ TypeScript support
- ✅ Customizable size and color
- ✅ Based on Lucide icons
- ✅ SSR compatible

## License

MIT
