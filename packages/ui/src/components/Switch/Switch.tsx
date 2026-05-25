'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const switchVariants = tv({
  slots: {
    root: [
      'peer inline-flex shrink-0 cursor-pointer items-center rounded-full',
      'border-2 border-transparent transition-colors',
      'focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-primary-600 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    thumb: [
      'pointer-events-none block rounded-full bg-white shadow-lg',
      'ring-0 transition-transform',
    ],
  },
  variants: {
    size: {
      sm: {
        root: 'h-5 w-9',
        thumb: 'h-4 w-4',
      },
      md: {
        root: 'h-6 w-11',
        thumb: 'h-5 w-5',
      },
      lg: {
        root: 'h-7 w-14',
        thumb: 'h-6 w-6',
      },
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
      false: {
        root: 'bg-neutral-200',
      },
    },
  },
  compoundVariants: [
    { checked: true, color: 'primary', class: { root: 'bg-primary-600' } },
    { checked: true, color: 'secondary', class: { root: 'bg-neutral-600' } },
    { checked: true, color: 'success', class: { root: 'bg-green-600' } },
    { checked: true, color: 'error', class: { root: 'bg-red-600' } },
    { checked: true, color: 'warning', class: { root: 'bg-yellow-600' } },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    checked: false,
  },
});

type SwitchVariants = VariantProps<typeof switchVariants>;

export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'color'>,
    Omit<SwitchVariants, 'checked'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
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
      ...props
    },
    ref
  ) => {
    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked);
    const checked = controlledChecked ?? uncontrolledChecked;

    const { root, thumb } = switchVariants({ size, color, checked });

    const handleClick = () => {
      if (disabled) return;
      const newChecked = !checked;
      setUncontrolledChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    const getThumbTranslate = () => {
      if (!checked) return 'translate-x-0';
      if (size === 'sm') return 'translate-x-4';
      if (size === 'lg') return 'translate-x-7';
      return 'translate-x-5';
    };

    return (
      <>
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-required={required}
          disabled={disabled}
          className={cn(root(), className)}
          onClick={handleClick}
          {...props}
        >
          <span className={cn(thumb(), getThumbTranslate())} />
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

Switch.displayName = 'Switch';
