import React, { forwardRef } from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconBase = forwardRef<SVGSVGElement, IconProps & { children: React.ReactNode }>(
  ({ size = 24, color = 'currentColor', children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  }
);

IconBase.displayName = 'IconBase';
