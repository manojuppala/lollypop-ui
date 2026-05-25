'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const progressVariants = tv({
  slots: {
    root: 'relative w-full overflow-hidden rounded-full bg-neutral-200',
    indicator: [
      'h-full w-full flex-1 bg-primary-600 transition-all',
      'duration-500 ease-in-out',
    ],
  },
  variants: {
    variant: {
      default: {},
      indeterminate: {
        indicator: 'animate-pulse',
      },
    },
    size: {
      sm: { root: 'h-2' },
      md: { root: 'h-4' },
      lg: { root: 'h-6' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

type ProgressVariants = VariantProps<typeof progressVariants>;

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ProgressVariants {
  value?: number;
  max?: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, variant, size, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    const { root, indicator } = progressVariants({ variant, size });

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(root(), className)}
        {...props}
      >
        <div
          className={indicator()}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';
