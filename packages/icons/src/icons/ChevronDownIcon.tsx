import { forwardRef } from 'react';
import { IconBase, IconProps } from '../icon-base';

export const ChevronDownIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <IconBase ref={ref} {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
});

ChevronDownIcon.displayName = 'ChevronDownIcon';
