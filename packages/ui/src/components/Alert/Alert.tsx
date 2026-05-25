'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { InfoIcon, CheckIcon, AlertCircleIcon, XIcon } from '@lollypop-ui/icons';

const alertVariants = tv({
  slots: {
    root: [
      'relative w-full rounded-lg border p-4',
      'flex items-start gap-3',
    ],
    icon: 'flex-shrink-0 h-5 w-5',
    content: 'flex-1',
    title: 'mb-1 font-medium leading-none tracking-tight',
    description: 'text-sm opacity-90',
    close: [
      'absolute right-4 top-4 rounded-sm opacity-70',
      'transition-opacity hover:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
    ],
  },
  variants: {
    variant: {
      default: {
        root: 'bg-neutral-50 border-neutral-200 text-neutral-900',
        icon: 'text-neutral-600',
      },
      info: {
        root: 'bg-blue-50 border-blue-200 text-blue-900',
        icon: 'text-blue-600',
      },
      success: {
        root: 'bg-green-50 border-green-200 text-green-900',
        icon: 'text-green-600',
      },
      warning: {
        root: 'bg-yellow-50 border-yellow-200 text-yellow-900',
        icon: 'text-yellow-600',
      },
      error: {
        root: 'bg-red-50 border-red-200 text-red-900',
        icon: 'text-red-600',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type AlertVariants = VariantProps<typeof alertVariants>;

const iconMap = {
  default: InfoIcon,
  info: InfoIcon,
  success: CheckIcon,
  warning: AlertCircleIcon,
  error: AlertCircleIcon,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlertVariants {
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', onClose, children, ...props }, ref) => {
    const { root, icon: iconClass, close } = alertVariants({ variant });
    const Icon = iconMap[variant || 'default'];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(root(), className)}
        {...props}
      >
        <Icon className={iconClass()} />
        <div className="flex-1">{children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className={close()}
            aria-label="Close"
          >
            <XIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { title } = alertVariants();
  return (
    <h5
      ref={ref}
      className={cn(title(), className)}
      {...props}
    />
  );
});

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { description } = alertVariants();
  return (
    <div
      ref={ref}
      className={cn(description(), className)}
      {...props}
    />
  );
});

AlertDescription.displayName = 'AlertDescription';
