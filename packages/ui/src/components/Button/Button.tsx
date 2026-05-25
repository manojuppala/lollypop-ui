import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

// Simple Slot component to replace Radix Slot
const Slot = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement> & { children: React.ReactElement }>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ...children.props,
        ref,
        className: cn(props.className, children.props.className),
      } as any);
    }
    return null;
  }
);
Slot.displayName = 'Slot';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-60',
    'select-none',
    'shadow-sm',
  ],
  variants: {
    variant: {
      primary: [
        'bg-success-400 text-white border border-success-600/30',
        'hover:bg-success-500 hover:border-success-600/50',
        'active:bg-success-600',
        'shadow-sm hover:shadow',
      ],
      secondary: [
        'bg-neutral-100 text-neutral-900 border border-neutral-300',
        'hover:bg-neutral-200 hover:border-neutral-400',
        'active:bg-neutral-300',
        'shadow-sm hover:shadow',
      ],
      outline: [
        'border border-neutral-300 bg-white text-neutral-700',
        'hover:bg-neutral-100 hover:border-neutral-400',
        'active:bg-neutral-200',
        'shadow-sm hover:shadow',
      ],
      ghost: [
        'bg-transparent text-neutral-700',
        'hover:bg-neutral-100',
        'active:bg-neutral-200',
      ],
      danger: [
        'bg-error-500 text-white border border-error-600/30',
        'hover:bg-error-600 hover:border-error-700/50',
        'active:bg-error-700',
        'shadow-sm hover:shadow',
      ],
    },
    size: {
      sm: 'h-7 px-3 text-xs',
      md: 'h-8 px-4 text-sm',
      lg: 'h-10 px-5 text-base',
      xl: 'h-12 px-6 text-base',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    if (asChild && React.isValidElement(children)) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref as any}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref as any}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
