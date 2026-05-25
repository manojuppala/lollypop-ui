'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../utils/cn';

const avatarVariants = tv({
  slots: {
    root: 'relative flex shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full object-cover',
    fallback: [
      'flex h-full w-full items-center justify-center',
      'bg-neutral-100 text-neutral-600 font-medium',
    ],
  },
  variants: {
    size: {
      sm: { root: 'h-8 w-8', fallback: 'text-xs' },
      md: { root: 'h-10 w-10', fallback: 'text-sm' },
      lg: { root: 'h-12 w-12', fallback: 'text-base' },
      xl: { root: 'h-16 w-16', fallback: 'text-lg' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement>, AvatarVariants {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, fallback, ...props }, ref) => {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const [imageError, setImageError] = React.useState(false);

    const { root, image, fallback: fallbackClass } = avatarVariants({ size });

    const showImage = src && imageLoaded && !imageError;

    return (
      <span ref={ref} className={cn(root(), className)} {...props}>
        {src && (
          <img
            src={src}
            alt={alt || ''}
            className={cn(image(), !showImage && 'hidden')}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
        {(!src || !showImage) && (
          <span className={fallbackClass()}>
            {fallback || alt?.charAt(0).toUpperCase() || '?'}
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
