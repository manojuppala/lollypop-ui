'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '@lollypop-ui/icons';

const paginationVariants = tv({
  slots: {
    nav: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center gap-1',
    item: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-white transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950',
      'focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'hover:bg-neutral-100 hover:text-neutral-900',
      'h-10 w-10',
    ],
    link: 'cursor-pointer',
    ellipsis: 'flex h-9 w-9 items-center justify-center',
  },
  variants: {
    isActive: {
      true: {
        item: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 hover:text-neutral-50',
      },
    },
  },
});

const { nav, content, item, link, ellipsis } = paginationVariants();

export const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(nav(), className)}
    {...props}
  />
);

Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn(content(), className)} {...props} />
));

PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={className} {...props} />
);

PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<'a'>;

export const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(item(), link(), isActive && paginationVariants({ isActive }).item(), className)}
    {...props}
  />
);

PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4 rotate-90" />
    <span>Previous</span>
  </PaginationLink>
);

PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronDownIcon className="h-4 w-4 rotate-[-90deg]" />
  </PaginationLink>
);

PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn(ellipsis(), className)}
    {...props}
  >
    <span className="text-lg">...</span>
    <span className="sr-only">More pages</span>
  </span>
);

PaginationEllipsis.displayName = 'PaginationEllipsis';
