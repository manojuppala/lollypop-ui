'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const containerVariants = tv({
  base: 'w-full mx-auto px-4 sm:px-6 lg:px-8',
  variants: {
    maxWidth: {
      xs: 'max-w-screen-xs',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      false: 'max-w-none',
    },
    disableGutters: {
      true: 'px-0',
    },
    fixed: {
      true: '',
    },
  },
  defaultVariants: {
    maxWidth: 'lg',
    disableGutters: false,
    fixed: false,
  },
});

type ContainerVariants = VariantProps<typeof containerVariants>;

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ContainerVariants {
  component?: React.ElementType;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, maxWidth, disableGutters, fixed, component: Component = 'div', ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ maxWidth, disableGutters, fixed }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
