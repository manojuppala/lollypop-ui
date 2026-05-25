'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const appBarVariants = tv({
  base: [
    'sticky top-0 z-50 w-full border-b',
    'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60',
  ],
  variants: {
    position: {
      fixed: 'fixed',
      sticky: 'sticky',
      static: 'static',
      relative: 'relative',
    },
    color: {
      default: 'bg-white border-neutral-200',
      primary: 'bg-primary-600 text-white border-primary-700',
      transparent: 'bg-transparent border-transparent',
    },
    elevation: {
      0: 'shadow-none',
      1: 'shadow-sm',
      2: 'shadow',
      3: 'shadow-md',
      4: 'shadow-lg',
    },
  },
  defaultVariants: {
    position: 'sticky',
    color: 'default',
    elevation: 1,
  },
});

type AppBarVariants = VariantProps<typeof appBarVariants>;

export interface AppBarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    AppBarVariants {}

export const AppBar = React.forwardRef<HTMLElement, AppBarProps>(
  ({ className, position, color, elevation, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(appBarVariants({ position, color: color as AppBarVariants['color'], elevation }), className)}
        {...props}
      />
    );
  }
);

AppBar.displayName = 'AppBar';

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'regular' | 'dense';
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, variant = 'regular', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-4 px-4',
          variant === 'regular' ? 'min-h-16' : 'min-h-12',
          className
        )}
        {...props}
      />
    );
  }
);

Toolbar.displayName = 'Toolbar';
