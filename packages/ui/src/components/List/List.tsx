'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const listVariants = tv({
  slots: {
    root: 'w-full',
    item: [
      'flex items-center justify-between gap-4 px-4 py-3',
      'transition-colors',
      'border-b border-neutral-200 last:border-0',
    ],
    itemButton: [
      'flex items-center justify-between gap-4 px-4 py-3',
      'transition-colors cursor-pointer',
      'border-b border-neutral-200 last:border-0',
      'hover:bg-neutral-100',
      'focus:outline-none focus:bg-neutral-100',
    ],
    itemText: 'flex-1 min-w-0',
    itemPrimary: 'text-sm font-medium text-neutral-900',
    itemSecondary: 'text-sm text-neutral-500',
    itemIcon: 'flex-shrink-0',
    divider: 'h-px bg-neutral-200 my-1',
  },
  variants: {
    dense: {
      true: {
        item: 'py-2',
        itemButton: 'py-2',
      },
    },
    disablePadding: {
      true: {
        item: 'px-0',
        itemButton: 'px-0',
      },
    },
  },
});

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  dense?: boolean;
  disablePadding?: boolean;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, ...props }, ref) => {
    const { root } = listVariants();
    return (
      <ul
        ref={ref}
        className={cn(root(), className)}
        {...props}
      />
    );
  }
);

List.displayName = 'List';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  dense?: boolean;
  disablePadding?: boolean;
  button?: boolean;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, dense, disablePadding, button, ...props }, ref) => {
    const { item, itemButton } = listVariants({ dense, disablePadding });
    return (
      <li
        ref={ref}
        className={cn(button ? itemButton() : item(), className)}
        role={button ? 'button' : undefined}
        tabIndex={button ? 0 : undefined}
        {...props}
      />
    );
  }
);

ListItem.displayName = 'ListItem';

export const ListItemText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
  }
>(({ className, primary, secondary, children, ...props }, ref) => {
  const { itemText, itemPrimary, itemSecondary } = listVariants();
  return (
    <div ref={ref} className={cn(itemText(), className)} {...props}>
      {primary && <div className={itemPrimary()}>{primary}</div>}
      {secondary && <div className={itemSecondary()}>{secondary}</div>}
      {children}
    </div>
  );
});

ListItemText.displayName = 'ListItemText';

export const ListItemIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { itemIcon } = listVariants();
  return (
    <div ref={ref} className={cn(itemIcon(), className)} {...props} />
  );
});

ListItemIcon.displayName = 'ListItemIcon';

export const ListDivider = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  const { divider } = listVariants();
  return (
    <li ref={ref} className={cn(divider(), className)} role="separator" {...props} />
  );
});

ListDivider.displayName = 'ListDivider';
