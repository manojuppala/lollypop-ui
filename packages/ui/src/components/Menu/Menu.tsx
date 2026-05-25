'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { CheckIcon, ChevronRightIcon } from '@lollypop-ui/icons';

const menuVariants = tv({
  slots: {
    content: [
      'z-50 min-w-[12rem] overflow-hidden rounded-md border border-neutral-300',
      'bg-white p-1 text-neutral-900 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    item: [
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5',
      'text-xs outline-none transition-colors',
      'hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItem: [
      'relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-7 pr-2',
      'text-xs outline-none transition-colors',
      'hover:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    itemIndicator: 'absolute left-1.5 flex h-3.5 w-3.5 items-center justify-center',
    label: 'px-2 py-1.5 text-xs font-semibold text-neutral-700',
    separator: '-mx-1 my-1 h-px bg-neutral-200',
    shortcut: 'ml-auto text-xs tracking-wide opacity-50 pl-4',
  },
});

export const Menu = DropdownMenuPrimitive.Root;
export const MenuTrigger = DropdownMenuPrimitive.Trigger;
export const MenuGroup = DropdownMenuPrimitive.Group;
export const MenuPortal = DropdownMenuPrimitive.Portal;
export const MenuSub = DropdownMenuPrimitive.Sub;
export const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => {
  const { item } = menuVariants({});
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(item(), inset && 'pl-8', className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
});

MenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => {
  const { content } = menuVariants({});
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(content(), className)}
      {...props}
    />
  );
});

MenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const { content } = menuVariants({});
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(content(), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});

MenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { item } = menuVariants({});
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(item(), inset && 'pl-8', className)}
      {...props}
    />
  );
});

MenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { checkboxItem, itemIndicator } = menuVariants({});
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(checkboxItem(), className)}
      checked={checked}
      {...props}
    >
      <span className={itemIndicator()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});

MenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { checkboxItem, itemIndicator } = menuVariants({});
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(checkboxItem(), className)}
      {...props}
    >
      <span className={itemIndicator()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <div className="h-2 w-2 rounded-full bg-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});

MenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  const { label } = menuVariants({});
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(label(), inset && 'pl-8', className)}
      {...props}
    />
  );
});

MenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => {
  const { separator } = menuVariants({});
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(separator(), className)}
      {...props}
    />
  );
});

MenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export const MenuShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  const { shortcut } = menuVariants({});
  return <span className={cn(shortcut(), className)} {...props} />;
};

MenuShortcut.displayName = 'MenuShortcut';
