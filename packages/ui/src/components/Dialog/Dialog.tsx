'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { XIcon } from '@lollypop-ui/icons';

const dialogVariants = tv({
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-neutral-900/40',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]',
      'w-full max-w-lg gap-4 border border-neutral-200 bg-white p-5 shadow-xl',
      'rounded-md duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: 'flex flex-col space-y-2 text-left pb-4 border-b border-neutral-200',
    title: 'text-base font-semibold leading-tight text-neutral-900',
    description: 'text-sm text-neutral-600 leading-relaxed',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4 border-t border-neutral-200',
    close: [
      'absolute right-3 top-3 rounded-md p-1.5 opacity-60 transition-all',
      'hover:opacity-100 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500',
    ],
  },
});

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogClose = DialogPrimitive.Close;

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { overlay } = dialogVariants({});
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(overlay(), className)}
      {...props}
    />
  );
});

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { content, close } = dialogVariants({});
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(content(), className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className={close()}>
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});

DialogContent.displayName = DialogPrimitive.Content.displayName;

export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { header } = dialogVariants({});
  return <div className={cn(header(), className)} {...props} />;
};

DialogHeader.displayName = 'DialogHeader';

export const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { footer } = dialogVariants({});
  return <div className={cn(footer(), className)} {...props} />;
};

DialogFooter.displayName = 'DialogFooter';

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { title } = dialogVariants({});
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(title(), className)}
      {...props}
    />
  );
});

DialogTitle.displayName = DialogPrimitive.Title.displayName;

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { description } = dialogVariants({});
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(description(), className)}
      {...props}
    />
  );
});

DialogDescription.displayName = DialogPrimitive.Description.displayName;
