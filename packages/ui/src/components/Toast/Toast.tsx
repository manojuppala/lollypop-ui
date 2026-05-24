import React, { forwardRef } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));

ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

const toastVariants = tv({
  base: [
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-6 pr-8 shadow-lg transition-all',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  ],
  variants: {
    variant: {
      default: 'border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900',
      success:
        'border-success-200 bg-success-50 text-success-900 dark:border-success-800 dark:bg-success-950 dark:text-success-100',
      error:
        'border-error-200 bg-error-50 text-error-900 dark:border-error-800 dark:bg-error-950 dark:text-error-100',
      warning:
        'border-warning-200 bg-warning-50 text-warning-900 dark:border-warning-800 dark:bg-warning-950 dark:text-warning-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Toast = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});

Toast.displayName = ToastPrimitive.Root.displayName;

export const ToastAction = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors',
      'hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'dark:ring-offset-neutral-950 dark:hover:bg-neutral-800',
      className
    )}
    {...props}
  />
));

ToastAction.displayName = ToastPrimitive.Action.displayName;

export const ToastClose = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-neutral-500 opacity-0 transition-opacity',
      'hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100',
      'dark:hover:text-neutral-50',
      className
    )}
    toast-close=""
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  </ToastPrimitive.Close>
));

ToastClose.displayName = ToastPrimitive.Close.displayName;

export const ToastTitle = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn('text-sm font-semibold', className)} {...props} />
));

ToastTitle.displayName = ToastPrimitive.Title.displayName;

export const ToastDescription = forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
));

ToastDescription.displayName = ToastPrimitive.Description.displayName;
