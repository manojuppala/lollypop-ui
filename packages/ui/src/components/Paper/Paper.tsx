'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const paperVariants = tv({
  base: 'bg-white text-neutral-900',
  variants: {
    variant: {
      elevation: 'shadow',
      outlined: 'border border-neutral-200',
    },
    elevation: {
      0: 'shadow-none',
      1: 'shadow-sm',
      2: 'shadow',
      3: 'shadow-md',
      4: 'shadow-lg',
      8: 'shadow-xl',
      16: 'shadow-2xl',
    },
    square: {
      false: 'rounded-lg',
      true: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'elevation',
    elevation: 1,
    square: false,
  },
});

type PaperVariants = VariantProps<typeof paperVariants>;

export interface PaperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PaperVariants {
  component?: React.ElementType;
}

export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ className, variant, elevation, square, component: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(paperVariants({ variant, elevation, square }), className)}
        {...props}
      />
    );
  }
);

Paper.displayName = 'Paper';
