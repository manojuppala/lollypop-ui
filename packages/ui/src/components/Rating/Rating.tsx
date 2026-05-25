'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

// Simple Star Icon Component
const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ratingVariants = tv({
  slots: {
    root: 'inline-flex items-center gap-1',
    star: [
      'transition-colors cursor-pointer',
      'hover:scale-110 transition-transform',
      'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded',
    ],
    label: 'ml-2 text-sm text-neutral-600',
  },
  variants: {
    size: {
      small: {
        star: 'h-4 w-4',
        label: 'text-xs',
      },
      medium: {
        star: 'h-6 w-6',
        label: 'text-sm',
      },
      large: {
        star: 'h-8 w-8',
        label: 'text-base',
      },
    },
    color: {
      primary: {},
      secondary: {},
      warning: {},
    },
    readOnly: {
      true: {
        star: 'cursor-default hover:scale-100',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'warning',
  },
});

type RatingVariants = VariantProps<typeof ratingVariants>;

export interface RatingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'>,
    Omit<RatingVariants, 'readOnly'> {
  value?: number;
  defaultValue?: number;
  max?: number;
  precision?: number;
  onChange?: (value: number) => void;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = 0,
      max = 5,
      precision = 1,
      onChange,
      icon,
      emptyIcon,
      readOnly = false,
      disabled = false,
      showLabel = false,
      size,
      color = 'warning',
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    const value = controlledValue ?? uncontrolledValue;

    const { root, star, label } = ratingVariants({ size, color, readOnly: readOnly || disabled });

    const getColor = (index: number) => {
      const currentValue = hoverValue ?? value;
      const filled = index <= currentValue;
      
      if (color === 'warning') {
        return filled ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300 fill-neutral-300';
      } else if (color === 'primary') {
        return filled ? 'text-primary-600 fill-primary-600' : 'text-neutral-300 fill-neutral-300';
      } else {
        return filled ? 'text-neutral-600 fill-neutral-600' : 'text-neutral-300 fill-neutral-300';
      }
    };

    const handleClick = (index: number) => {
      if (readOnly || disabled) return;
      
      const newValue = index;
      setUncontrolledValue(newValue);
      onChange?.(newValue);
    };

    const handleMouseEnter = (index: number) => {
      if (readOnly || disabled) return;
      setHoverValue(index);
    };

    const handleMouseLeave = () => {
      if (readOnly || disabled) return;
      setHoverValue(null);
    };

    return (
      <div ref={ref} className={root({ className })} {...props}>
        {Array.from({ length: max }, (_, i) => i + 1).map((index) => (
          <button
            key={index}
            type="button"
            className={`${star()} ${getColor(index)}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            disabled={disabled || readOnly}
            aria-label={`Rate ${index} out of ${max}`}
          >
            {index <= (hoverValue ?? value)
              ? icon || <StarIcon className="h-full w-full" />
              : emptyIcon || <StarIcon className="h-full w-full" />}
          </button>
        ))}
        {showLabel && (
          <span className={label()}>
            {value.toFixed(precision === 1 ? 0 : 1)} / {max}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';
