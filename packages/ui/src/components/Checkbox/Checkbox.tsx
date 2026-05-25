'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { CheckIcon } from '@lollypop-ui/icons';

const checkboxVariants = tv({
  slots: {
    root: [
      'peer shrink-0 rounded border-2 border-neutral-300 cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-primary-600 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors',
    ],
    indicator: 'flex items-center justify-center text-current',
  },
  variants: {
    size: {
      sm: { root: 'h-4 w-4' },
      md: { root: 'h-5 w-5' },
      lg: { root: 'h-6 w-6' },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      error: {},
      warning: {},
    },
    checked: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    { checked: true, color: 'primary', class: { root: 'bg-primary-600 border-primary-600 text-white' } },
    { checked: true, color: 'secondary', class: { root: 'bg-neutral-600 border-neutral-600 text-white' } },
    { checked: true, color: 'success', class: { root: 'bg-green-600 border-green-600 text-white' } },
    { checked: true, color: 'error', class: { root: 'bg-red-600 border-red-600 text-white' } },
    { checked: true, color: 'warning', class: { root: 'bg-yellow-600 border-yellow-600 text-white' } },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    checked: false,
  },
});

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'color'>,
    Omit<CheckboxVariants, 'checked'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      size,
      color,
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      required,
      name,
      value,
      indeterminate,
      ...props
    },
    ref
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked);
    const checked = indeterminate ? true : (controlledChecked ?? uncontrolledChecked);

    const { root, indicator } = checkboxVariants({ size, color, checked });

    const handleClick = () => {
      if (disabled) return;
      const newChecked = !checked;
      setUncontrolledChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    return (
      <>
        <button
          ref={ref}
          type="button"
          role="checkbox"
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-required={required}
          disabled={disabled}
          className={cn(root(), className)}
          onClick={handleClick}
          {...props}
        >
          {checked && (
            <span className={indicator()}>
              {indeterminate ? (
                <svg className="h-3 w-3" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5L12.5 7.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              ) : (
                <CheckIcon className="h-full w-full" />
              )}
            </span>
          )}
        </button>
        {name && (
          <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            required={required}
            disabled={disabled}
            onChange={() => {}}
            style={{ display: 'none' }}
            tabIndex={-1}
            aria-hidden="true"
          />
        )}
      </>
    );
  }
);

Checkbox.displayName = 'Checkbox';
