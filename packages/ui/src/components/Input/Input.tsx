import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const inputVariants = tv({
  base: [
    'flex w-full rounded-lg border bg-white px-3 py-2',
    'text-base text-neutral-900',
    'placeholder:text-neutral-400',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-500',
  ],
  variants: {
    variant: {
      default: 'border-neutral-300 dark:border-neutral-700',
      error: 'border-error-500 focus-visible:ring-error-500',
      success: 'border-success-500 focus-visible:ring-success-500',
    },
    size: {
      sm: 'h-8 text-sm px-2',
      md: 'h-10 text-base px-3',
      lg: 'h-12 text-lg px-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  error?: string;
  helperText?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, error, helperText, label, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const finalVariant = error ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(inputVariants({ variant: finalVariant, size, className }))}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error || helperText ? `${inputId}-description` : undefined}
          {...props}
        />
        {(error || helperText) && (
          <p
            id={`${inputId}-description`}
            className={cn('mt-2 text-sm', error ? 'text-error-600' : 'text-neutral-500')}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
