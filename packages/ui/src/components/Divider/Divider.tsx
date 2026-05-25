'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const dividerVariants = tv({
  base: 'shrink-0 bg-neutral-200',
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'w-px h-full',
    },
    variant: {
      fullWidth: '',
      inset: '',
      middle: '',
    },
    textAlign: {
      left: '',
      center: '',
      right: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      variant: 'inset',
      class: 'ml-16',
    },
    {
      orientation: 'horizontal',
      variant: 'middle',
      class: 'mx-4',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'fullWidth',
  },
});

type DividerVariants = VariantProps<typeof dividerVariants>;

export interface DividerProps
  extends React.HTMLAttributes<HTMLHRElement>,
    DividerVariants {
  children?: React.ReactNode;
  component?: React.ElementType;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      className,
      orientation,
      variant,
      textAlign = 'center',
      children,
      component: Component = 'hr',
      ...props
    },
    ref
  ) => {
    if (children && orientation === 'horizontal') {
      return (
        <div
          role="separator"
          className={cn(
            'flex items-center w-full',
            textAlign === 'left' && 'justify-start',
            textAlign === 'center' && 'justify-center',
            textAlign === 'right' && 'justify-end'
          )}
        >
          {textAlign !== 'left' && (
            <div className={cn(dividerVariants({ orientation, variant }), 'flex-1', className)} />
          )}
          <span className="px-3 text-sm text-neutral-500">{children}</span>
          {textAlign !== 'right' && (
            <div className={cn(dividerVariants({ orientation, variant }), 'flex-1', className)} />
          )}
        </div>
      );
    }

    return (
      <Component
        ref={ref}
        role="separator"
        className={cn(dividerVariants({ orientation, variant }), className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
