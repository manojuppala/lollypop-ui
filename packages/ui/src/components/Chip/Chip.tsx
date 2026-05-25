'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { XIcon } from '@lollypop-ui/icons';

const chipVariants = tv({
  slots: {
    root: [
      'inline-flex items-center gap-1.5 rounded-full font-medium',
      'transition-colors focus:outline-none focus:ring-2',
      'focus:ring-neutral-950 focus:ring-offset-2',
    ],
    label: 'truncate',
    deleteButton: [
      'rounded-full hover:bg-black/10 focus:bg-black/10',
      'transition-colors focus:outline-none',
    ],
    avatar: 'rounded-full',
    icon: 'flex-shrink-0',
  },
  variants: {
    variant: {
      filled: {
        root: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
      },
      outlined: {
        root: 'border-2 border-neutral-300 text-neutral-900 hover:bg-neutral-100',
      },
      default: {
        root: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
      },
    },
    color: {
      default: {},
      primary: {
        root: 'bg-primary-600 text-white hover:bg-primary-700',
      },
      secondary: {
        root: 'bg-neutral-600 text-white hover:bg-neutral-700',
      },
      success: {
        root: 'bg-green-600 text-white hover:bg-green-700',
      },
      error: {
        root: 'bg-red-600 text-white hover:bg-red-700',
      },
      warning: {
        root: 'bg-yellow-600 text-white hover:bg-yellow-700',
      },
      info: {
        root: 'bg-blue-600 text-white hover:bg-blue-700',
      },
    },
    size: {
      small: {
        root: 'h-6 px-2 text-xs',
        deleteButton: 'h-4 w-4',
        icon: 'h-3 w-3',
        avatar: 'h-5 w-5 -ml-1',
      },
      medium: {
        root: 'h-8 px-3 text-sm',
        deleteButton: 'h-5 w-5',
        icon: 'h-4 w-4',
        avatar: 'h-6 w-6 -ml-1.5',
      },
      large: {
        root: 'h-10 px-4 text-base',
        deleteButton: 'h-6 w-6',
        icon: 'h-5 w-5',
        avatar: 'h-8 w-8 -ml-2',
      },
    },
    clickable: {
      true: {
        root: 'cursor-pointer',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    color: 'default',
    size: 'medium',
  },
});

type ChipVariants = VariantProps<typeof chipVariants>;

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    ChipVariants {
  label?: React.ReactNode;
  onDelete?: () => void;
  deleteIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      className,
      label,
      children,
      onDelete,
      deleteIcon,
      avatar,
      icon,
      variant,
      color,
      size,
      clickable,
      onClick,
      ...props
    },
    ref
  ) => {
    const { root, label: labelClass, deleteButton, avatar: avatarClass, icon: iconClass } = chipVariants({
      variant,
      color,
      size,
      clickable: clickable || !!onClick,
    });

    return (
      <div
        ref={ref}
        className={cn(root(), className)}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        {...props}
      >
        {avatar && <span className={avatarClass()}>{avatar}</span>}
        {icon && <span className={iconClass()}>{icon}</span>}
        <span className={labelClass()}>{label || children}</span>
        {onDelete && (
          <button
            type="button"
            className={deleteButton()}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            aria-label="Delete"
          >
            {deleteIcon || <XIcon className="h-full w-full" />}
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
