'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const tabsVariants = tv({
  slots: {
    root: 'w-full',
    list: [
      'inline-flex h-9 items-center border-b border-neutral-200',
      'text-neutral-600 gap-6',
    ],
    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap',
      'px-1 py-2 text-sm font-medium ring-offset-white',
      'transition-all focus-visible:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'border-b-2 border-transparent -mb-[1px]',
      'hover:text-neutral-900 hover:border-neutral-300',
      'data-[state=active]:border-primary-500 data-[state=active]:text-neutral-900',
    ],
    content: [
      'mt-3 ring-offset-white focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    ],
  },
});

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { list } = tabsVariants({});
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(list(), className)}
      {...props}
    />
  );
});

TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { trigger } = tabsVariants({});
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(trigger(), className)}
      {...props}
    />
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { content } = tabsVariants({});
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(content(), className)}
      {...props}
    />
  );
});

TabsContent.displayName = TabsPrimitive.Content.displayName;
