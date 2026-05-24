import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const LoaderIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </IconBase>
  );
});

LoaderIcon.displayName = 'LoaderIcon';
