'use client';

import * as React from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../utils/cn';
import { ChevronDownIcon } from '@lollypop-ui/icons';

const breadcrumbsVariants = tv({
  slots: {
    nav: 'flex',
    list: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-neutral-500 sm:gap-2.5',
    item: 'inline-flex items-center gap-1.5',
    link: 'transition-colors hover:text-neutral-950',
    separator: 'text-neutral-400',
    page: 'font-normal text-neutral-950',
  },
});

const { list, item, link, page } = breadcrumbsVariants();

export interface BreadcrumbsProps extends React.ComponentPropsWithoutRef<'nav'> {
  separator?: React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ children, separator: separatorProp = <ChevronDownIcon className="h-4 w-4 rotate-[-90deg]" />, ...props }, ref) => {
    const { separator: separatorClass } = breadcrumbsVariants();
    return (
      <nav ref={ref} aria-label="breadcrumb" {...props}>
        <ol className={list()}>
          {React.Children.map(children, (child, index) => (
            <React.Fragment key={index}>
              {index > 0 && <li className={separatorClass()} aria-hidden="true">{separatorProp}</li>}
              {child}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn(item(), className)} {...props} />
));

BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, ...props }, ref) => (
  <a ref={ref} className={cn(link(), className)} {...props} />
));

BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(page(), className)}
    {...props}
  />
));

BreadcrumbPage.displayName = 'BreadcrumbPage';
