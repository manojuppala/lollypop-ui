'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const tableVariants = tv({
  slots: {
    root: 'w-full caption-bottom text-sm',
    header: 'border-b',
    body: '[&_tr:last-child]:border-0',
    footer: 'border-t bg-neutral-50 font-medium',
    row: 'border-b transition-colors hover:bg-neutral-50 data-[state=selected]:bg-neutral-100',
    head: 'h-12 px-4 text-left align-middle font-medium text-neutral-500 [&:has([role=checkbox])]:pr-0',
    cell: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
    caption: 'mt-4 text-sm text-neutral-500',
  },
  variants: {
    variant: {
      default: {},
      striped: {
        row: 'even:bg-neutral-50',
      },
    },
    size: {
      small: {
        head: 'h-10 px-2',
        cell: 'p-2',
      },
      medium: {
        head: 'h-12 px-4',
        cell: 'p-4',
      },
    },
    stickyHeader: {
      true: {
        header: 'sticky top-0 z-10 bg-white',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});

type TableVariants = VariantProps<typeof tableVariants>;

export interface TableProps
  extends React.HTMLAttributes<HTMLTableElement>,
    TableVariants {}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant, size, stickyHeader, ...props }, ref) => {
    const { root } = tableVariants({ variant, size, stickyHeader });
    return (
      <div className="relative w-full overflow-auto">
        <table ref={ref} className={root({ className })} {...props} />
      </div>
    );
  }
);

Table.displayName = 'Table';

export const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & TableVariants
>(({ className, variant, size, stickyHeader, ...props }, ref) => {
  const { header } = tableVariants({ variant, size, stickyHeader });
  return <thead ref={ref} className={header({ className })} {...props} />;
});

TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { body } = tableVariants({ variant, size });
  return <tbody ref={ref} className={body({ className })} {...props} />;
});

TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { footer } = tableVariants({ variant, size });
  return <tfoot ref={ref} className={footer({ className })} {...props} />;
});

TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { row } = tableVariants({ variant, size });
  return <tr ref={ref} className={row({ className })} {...props} />;
});

TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { head } = tableVariants({ variant, size });
  return <th ref={ref} className={head({ className })} {...props} />;
});

TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { cell } = tableVariants({ variant, size });
  return <td ref={ref} className={cell({ className })} {...props} />;
});

TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement> & TableVariants
>(({ className, variant, size, ...props }, ref) => {
  const { caption } = tableVariants({ variant, size });
  return <caption ref={ref} className={caption({ className })} {...props} />;
});

TableCaption.displayName = 'TableCaption';
