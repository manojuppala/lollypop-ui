'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { XIcon } from '@lollypop-ui/icons';

const drawerVariants = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50',
    content: [
      'fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    ],
    header: 'flex flex-col space-y-2 text-center sm:text-left',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    title: 'text-lg font-semibold text-neutral-950',
    description: 'text-sm text-neutral-500',
    close: [
      'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity',
      'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-600',
    ],
  },
  variants: {
    side: {
      top: {
        content: [
          'inset-x-0 top-0 border-b',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },
      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
});

type DrawerVariants = VariantProps<typeof drawerVariants>;

export const Drawer = DialogPrimitive.Root;
export const DrawerTrigger = DialogPrimitive.Trigger;
export const DrawerPortal = DialogPrimitive.Portal;
export const DrawerClose = DialogPrimitive.Close;

export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  const { overlay } = drawerVariants({});
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(overlay(), className)}
      {...props}
    />
  );
});

DrawerOverlay.displayName = DialogPrimitive.Overlay.displayName;

export interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    DrawerVariants {}

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(({ side = 'right', className, children, ...props }, ref) => {
  const { content, close } = drawerVariants({ side });
  return (
    <DrawerPortal>
      <DrawerOverlay />
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
    </DrawerPortal>
  );
});

DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { header } = drawerVariants({});
  return <div className={cn(header(), className)} {...props} />;
};

DrawerHeader.displayName = 'DrawerHeader';

export const DrawerFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { footer } = drawerVariants({});
  return <div className={cn(footer(), className)} {...props} />;
};

DrawerFooter.displayName = 'DrawerFooter';

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { title } = drawerVariants({});
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(title(), className)}
      {...props}
    />
  );
});

DrawerTitle.displayName = DialogPrimitive.Title.displayName;

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { description } = drawerVariants({});
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(description(), className)}
      {...props}
    />
  );
});

DrawerDescription.displayName = DialogPrimitive.Description.displayName;
