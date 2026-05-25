'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const badgeVariants = tv({
  base: [
    'inline-flex items-center rounded-full border px-2.5 py-0.5',
    'text-xs font-semibold transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2',
  ],
  variants: {
    variant: {
      default: 'border-transparent bg-neutral-900 text-neutral-50',
      secondary: 'border-transparent bg-neutral-100 text-neutral-900',
      destructive: 'border-transparent bg-red-500 text-neutral-50',
      outline: 'text-neutral-950',
      success: 'border-transparent bg-green-500 text-white',
      warning: 'border-transparent bg-yellow-500 text-neutral-900',
      info: 'border-transparent bg-blue-500 text-white',
    },
    size: {
      sm: 'px-1.5 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-xs',
      lg: 'px-3 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
    );
  }
);

Badge.displayName = 'Badge';
