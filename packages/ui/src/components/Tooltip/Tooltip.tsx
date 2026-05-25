'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const tooltipVariants = tv({
  base: [
    'z-50 overflow-hidden rounded-md bg-neutral-900',
    'px-2 py-1 text-xs text-white shadow-lg',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
    'data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-1',
    'data-[side=left]:slide-in-from-right-1',
    'data-[side=right]:slide-in-from-left-1',
    'data-[side=top]:slide-in-from-bottom-1',
  ],
});

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(tooltipVariants(), className)}
    {...props}
  />
));

TooltipContent.displayName = TooltipPrimitive.Content.displayName;
