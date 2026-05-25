# GitHub Docs Theme Update

## 🎨 Overview

All components in `@lollypop-ui` have been updated to match the **GitHub Docs (Primer)** design system aesthetic.

## 🔄 Changes Made

### 1. Color Palette (`packages/tokens/src/colors.ts`)

Updated all color scales to match GitHub's Primer design system:

#### Primary (Blue)

- **500**: `#0969da` - GitHub's signature blue
- **600**: `#1f6feb` - Interactive blue
- Cooler, more professional blue tones

#### Success (Green)

- **400**: `#2da44e` - GitHub's signature green
- **500**: `#1a7f37` - Success states
- Matches GitHub's commit/success indicators

#### Neutral (Cool Grays)

- **50**: `#f6f8fa` - Light backgrounds
- **200**: `#d0d7de` - Borders
- **300**: `#afb8c1` - Subtle borders
- **900**: `#24292f` - Text
- Blue-tinted grays instead of warm grays

#### Error (Red)

- **500**: `#cf222e` - GitHub red
- **400**: `#fa4549` - Interactive red

### 2. Shadows (`packages/tokens/src/shadows.ts`)

More subtle, GitHub-style shadows:

```typescript
sm: '0 1px 0 rgba(27, 31, 35, 0.04), 0 0 0 1px rgba(27, 31, 35, 0.04)';
base: '0 3px 6px rgba(140, 149, 159, 0.15)';
md: '0 8px 24px rgba(140, 149, 159, 0.2)';
```

- Softer, lighter shadows
- GitHub-specific color references
- Less pronounced elevation

### 3. Border Radius (`packages/tokens/src/radius.ts`)

Adjusted to GitHub's 6px default:

```typescript
sm: '0.1875rem'; // 3px
base: '0.375rem'; // 6px (GitHub default)
md: '0.375rem'; // 6px
```

### 4. Component Updates

#### Button (`packages/ui/src/components/Button/Button.tsx`)

**Primary Variant:**

- Uses GitHub green (`success-400`)
- Subtle border with transparency
- Enhanced shadow on hover
- Smaller, more compact sizing

**Outline Variant:**

- Lighter border (`neutral-300`)
- White background
- Subtle hover states

**Sizes:**

- `sm`: h-7 (28px), text-xs
- `md`: h-8 (32px), text-sm (GitHub default)
- `lg`: h-10 (40px), text-base
- `xl`: h-12 (48px), text-base

#### Input (`packages/ui/src/components/Input/Input.tsx`)

- Border: `neutral-300` with hover effect
- Focus ring: `primary-400` (GitHub blue)
- Disabled state: 60% opacity with light gray background
- Smaller height: h-8 (32px) default
- Text size: `text-sm` (14px)

#### Card (`packages/ui/src/components/Card/Card.tsx`)

- Border radius: `rounded-md` (6px)
- Default variant now has border
- Lighter, more subtle borders

## 🎯 Design Principles Applied

### Typography

- Smaller font sizes (text-sm, text-xs more prevalent)
- GitHub uses 14px as body text standard

### Spacing

- More compact spacing
- Tighter padding on interactive elements

### Colors

- Cool, blue-tinted neutrals
- GitHub's signature green for primary actions
- Subtle, professional color palette

### Interactions

- Subtle hover states
- Border color changes on hover
- Shadow elevation on interaction
- 200ms transitions

## 📊 Before vs After

### Colors

| Element        | Before              | After                    |
| -------------- | ------------------- | ------------------------ |
| Primary Button | Purple (#a855f7)    | GitHub Green (#2da44e)   |
| Borders        | Warm Gray (#e4e4e7) | Cool Gray (#d0d7de)      |
| Backgrounds    | Pure Gray (#fafafa) | Blue-tint Gray (#f6f8fa) |

### Sizing

| Component     | Before      | After      |
| ------------- | ----------- | ---------- |
| Button (md)   | h-10 (40px) | h-8 (32px) |
| Input (md)    | h-10 (40px) | h-8 (32px) |
| Border Radius | 8px         | 6px        |

### Shadows

| Type  | Before      | After                  |
| ----- | ----------- | ---------------------- |
| Base  | 0.1 opacity | 0.15 opacity           |
| Style | Standard    | GitHub-specific colors |

## 🚀 Testing in Storybook

Storybook is currently running at `http://localhost:6006/`

### Components Updated

1. ✅ Button - All variants match GitHub style
2. ✅ Input - GitHub input styling
3. ✅ Card - Subtle borders and radius

### All Components Updated ✅

1. ✅ **Button** - GitHub green primary, compact sizes, subtle shadows
2. ✅ **Input** - GitHub input styling, compact height, focus states
3. ✅ **Card** - Subtle borders and 6px radius
4. ✅ **Dialog** - Lighter overlay, bordered header/footer, compact padding
5. ✅ **Select** - Compact trigger, GitHub-style dropdown
6. ✅ **Tabs** - Underline style (GitHub's tab pattern)
7. ✅ **Menu** - Smaller text, better spacing, GitHub dropdown style
8. ✅ **Toast** - Compact, GitHub notification colors
9. ✅ **Accordion** - Bordered container, hover states
10. ✅ **Tooltip** - Dark background, compact sizing

## 📝 Next Steps

To complete the GitHub theme:

1. **Review Radix Components** - Update remaining components:
   - Dialog overlay and content
   - Select dropdown styling
   - Menu/Dropdown styles
   - Tabs underline/background
   - Toast notifications

2. **Add More GitHub-specific Colors** (optional):

   ```typescript
   attention: '#9a6700', // Yellow/Warning
   danger: '#cf222e',    // Red/Destructive
   done: '#8250df',      // Purple/Complete
   sponsors: '#bf3989',  // Pink/Sponsors
   ```

3. **Typography Updates** (if needed):
   - Font family: System fonts (already using)
   - Line heights: Tighter for compact UI
   - Letter spacing: GitHub uses tight spacing

## 🔍 References

- **GitHub Primer**: https://primer.style/
- **GitHub Docs**: https://docs.github.com/
- **Primer Colors**: https://primer.style/foundations/color

## 📦 Build Status

✅ **All packages built successfully:**

- `@lollypop-ui/tokens` - Design tokens updated
- `@lollypop-ui/core` - Components updated
- `@lollypop-ui/docs` - Storybook running

## 🎉 Results

The component library now features:

- **Professional** - GitHub's trusted, familiar aesthetic
- **Accessible** - High contrast, clear focus states
- **Compact** - Space-efficient like GitHub's UI
- **Subtle** - Refined shadows and borders
- **Modern** - Cool color palette, smooth transitions
