'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '@lollypop-ui/icons';

const accordionVariants = tv({
  slots: {
    root: 'w-full border border-neutral-200 rounded-md divide-y divide-neutral-200',
    item: '',
    trigger: [
      'flex flex-1 items-center justify-between px-4 py-3 text-sm font-medium transition-all',
      'hover:bg-neutral-50 [&[data-state=open]>svg]:rotate-180',
      'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500',
    ],
    content: [
      'overflow-hidden text-sm text-neutral-700 transition-all',
      'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    ],
    contentInner: 'px-4 pb-3 pt-0',
  },
});

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { item } = accordionVariants({});
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(item(), className)}
      {...props}
    />
  );
});

AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { trigger } = accordionVariants({});
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(trigger(), className)}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { content, contentInner } = accordionVariants({});
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(content(), className)}
      {...props}
    >
      <div className={contentInner()}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
