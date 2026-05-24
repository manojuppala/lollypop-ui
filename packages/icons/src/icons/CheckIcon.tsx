import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const CheckIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
});

CheckIcon.displayName = 'CheckIcon';
