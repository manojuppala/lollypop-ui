'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@lollypop-ui/icons';

const selectVariants = tv({
  slots: {
    trigger: [
      'flex h-8 w-full items-center justify-between rounded-md border',
      'border-neutral-300 bg-white px-3 py-1.5 text-sm shadow-sm',
      'placeholder:text-neutral-500',
      'hover:border-neutral-400',
      'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-0 focus:border-primary-500',
      'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-neutral-50',
    ],
    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
      'rounded-md border border-neutral-300 bg-white text-neutral-900 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    viewport: 'p-1',
    item: [
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded-sm py-1.5 pl-8 pr-2 text-xs outline-none',
      'hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900',
      'data-[state=checked]:bg-primary-50 data-[state=checked]:text-primary-700',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    itemIndicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    label: 'py-1.5 pl-8 pr-2 text-xs font-semibold text-neutral-700',
    separator: '-mx-1 my-1 h-px bg-neutral-200',
  },
});

export const Select = SelectPrimitive.Root;
export const SelectGroup = SelectPrimitive.Group;
export const SelectValue = SelectPrimitive.Value;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { trigger } = selectVariants({});
  return (
    <SelectPrimitive.Trigger ref={ref} className={cn(trigger(), className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));

SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => {
  const { content, viewport } = selectVariants({});
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(content(), position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1', className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn(viewport(), position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]')}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
});

SelectContent.displayName = SelectPrimitive.Content.displayName;

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => {
  const { label } = selectVariants({});
  return <SelectPrimitive.Label ref={ref} className={cn(label(), className)} {...props} />;
});

SelectLabel.displayName = SelectPrimitive.Label.displayName;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { item, itemIndicator } = selectVariants({});
  return (
    <SelectPrimitive.Item ref={ref} className={cn(item(), className)} {...props}>
      <span className={itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});

SelectItem.displayName = SelectPrimitive.Item.displayName;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { separator } = selectVariants({});
  return <SelectPrimitive.Separator ref={ref} className={cn(separator(), className)} {...props} />;
});

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
