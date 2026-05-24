import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const SearchIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </IconBase>
  );
});

SearchIcon.displayName = 'SearchIcon';
