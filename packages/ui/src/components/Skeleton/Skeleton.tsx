'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const skeletonVariants = tv({
  base: 'animate-pulse rounded-md bg-neutral-200',
  variants: {
    variant: {
      text: 'h-4 w-full',
      circular: 'rounded-full',
      rectangular: 'rounded-md',
      rounded: 'rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'rectangular',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, width, height, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant }), className)}
        style={{
          width,
          height,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
