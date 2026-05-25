'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const radioVariants = tv({
  slots: {
    root: 'flex flex-col gap-2',
    item: [
      'aspect-square h-5 w-5 rounded-full border-2 border-neutral-300',
      'text-primary-600 focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'cursor-pointer transition-colors',
    ],
    indicator: 'flex items-center justify-center',
    indicatorDot: 'h-2.5 w-2.5 rounded-full bg-current',
  },
  variants: {
    size: {
      sm: {
        item: 'h-4 w-4',
        indicatorDot: 'h-2 w-2',
      },
      md: {
        item: 'h-5 w-5',
        indicatorDot: 'h-2.5 w-2.5',
      },
      lg: {
        item: 'h-6 w-6',
        indicatorDot: 'h-3 w-3',
      },
    },
    checked: {
      true: {
        item: 'border-primary-600 text-primary-600',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    checked: false,
  },
});

type RadioVariants = VariantProps<typeof radioVariants>;

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value: controlledValue, defaultValue, onValueChange, name, required, disabled, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || '');
    const value = controlledValue ?? uncontrolledValue;

    const handleValueChange = React.useCallback((newValue: string) => {
      setUncontrolledValue(newValue);
      onValueChange?.(newValue);
    }, [onValueChange]);

    const { root } = radioVariants({});

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-required={required}
        className={cn(root(), className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              ...child.props,
              name,
              checked: child.props.value === value,
              onCheckedChange: () => handleValueChange(child.props.value),
              disabled: disabled || child.props.disabled,
            } as any);
          }
          return child;
        })}
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export interface RadioGroupItemProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    Omit<RadioVariants, 'checked'> {
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: () => void;
  name?: string;
}

export const RadioGroupItem = React.forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, size, value, disabled, checked = false, onCheckedChange, name, ...props }, ref) => {
    const { item, indicator, indicatorDot } = radioVariants({ size, checked });

    return (
      <>
        <button
          ref={ref}
          type="button"
          role="radio"
          aria-checked={checked}
          disabled={disabled}
          className={cn(item(), className)}
          onClick={onCheckedChange}
          {...props}
        >
          {checked && (
            <span className={indicator()}>
              <span className={indicatorDot()} />
            </span>
          )}
        </button>
        {name && (
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
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

RadioGroupItem.displayName = 'RadioGroupItem';
