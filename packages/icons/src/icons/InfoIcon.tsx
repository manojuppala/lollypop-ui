import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const InfoIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </IconBase>
  );
});

InfoIcon.displayName = 'InfoIcon';
