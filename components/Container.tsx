import {
  forwardRef,
  type ComponentPropsWithRef,
  type PropsWithChildren,
} from 'react';

type Properties = PropsWithChildren<ComponentPropsWithRef<'div'>>;

const OuterContainer = forwardRef<HTMLDivElement, Properties>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`sm:px-8 ${className}`} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  },
);

const InnerContainer = forwardRef<HTMLDivElement, Properties>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative px-4 sm:px-8 lg:px-12 ${className}`}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  },
);

const ReferenceContainer = forwardRef<HTMLDivElement, Properties>(
  ({ children, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  },
);

ReferenceContainer.displayName = 'Container';
InnerContainer.displayName = 'InnerContainer';
OuterContainer.displayName = 'OuterContainer';

export const Container = Object.assign(ReferenceContainer, {
  Inner: InnerContainer,
  Outer: OuterContainer,
});
