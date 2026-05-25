'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { CheckIcon } from '@lollypop-ui/icons';

const stepperVariants = tv({
  slots: {
    root: 'w-full',
    steps: 'flex items-center justify-between',
    step: 'flex flex-col items-center flex-1 relative',
    stepButton: [
      'flex items-center justify-center rounded-full font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2',
    ],
    stepLabel: 'mt-2 text-sm font-medium text-center',
    stepDescription: 'mt-1 text-xs text-neutral-500 text-center',
    connector: 'flex-1 h-0.5 mx-2 bg-neutral-200',
  },
  variants: {
    orientation: {
      horizontal: {
        steps: 'flex-row',
        step: 'flex-col',
      },
      vertical: {
        steps: 'flex-col',
        step: 'flex-row items-start gap-4',
        connector: 'w-0.5 h-full ml-5 my-2',
      },
    },
    size: {
      small: {
        stepButton: 'h-8 w-8 text-sm',
      },
      medium: {
        stepButton: 'h-10 w-10 text-base',
      },
      large: {
        stepButton: 'h-12 w-12 text-lg',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'medium',
  },
});

type StepperVariants = VariantProps<typeof stepperVariants>;

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, StepperVariants {
  activeStep?: number;
  children?: React.ReactNode;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className, orientation, size, activeStep = 0, children, ...props }, ref) => {
    const { root, steps } = stepperVariants({ orientation, size });

    const childrenArray = React.Children.toArray(children);
    
    return (
      <div ref={ref} className={root({ className })} {...props}>
        <div className={steps()}>
          {React.Children.map(childrenArray, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                ...child.props,
                index,
                activeStep,
                orientation,
                size,
                isLast: index === childrenArray.length - 1,
              } as any);
            }
            return child;
          })}
        </div>
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  completed?: boolean;
  error?: boolean;
  disabled?: boolean;
  index?: number;
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  isLast?: boolean;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      className,
      label,
      description,
      icon,
      completed,
      error,
      disabled,
      index = 0,
      activeStep = 0,
      orientation = 'horizontal',
      size = 'medium',
      isLast = false,
      ...props
    },
    ref
  ) => {
    const { step, stepButton, stepLabel, stepDescription, connector } = stepperVariants({
      orientation,
      size,
    });

    const isActive = index === activeStep;
    const isCompleted = completed || index < activeStep;

    const getStepColor = () => {
      if (error) return 'bg-red-600 text-white';
      if (isCompleted) return 'bg-primary-600 text-white';
      if (isActive) return 'bg-primary-600 text-white';
      return 'bg-neutral-200 text-neutral-500';
    };

    return (
      <>
        <div ref={ref} className={step({ className })} {...props}>
          <button
            type="button"
            disabled={disabled}
            className={`${stepButton()} ${getStepColor()}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {isCompleted ? <CheckIcon className="h-5 w-5" /> : icon || index + 1}
          </button>
          <div className="flex flex-col">
            {label && <div className={stepLabel()}>{label}</div>}
            {description && <div className={stepDescription()}>{description}</div>}
          </div>
        </div>
        {!isLast && orientation === 'horizontal' && <div className={connector()} />}
        {!isLast && orientation === 'vertical' && <div className={connector()} />}
      </>
    );
  }
);

Step.displayName = 'Step';
