import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const AlertCircleIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </IconBase>
  );
});

AlertCircleIcon.displayName = 'AlertCircleIcon';
