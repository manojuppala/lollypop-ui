import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const XIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
});

XIcon.displayName = 'XIcon';
