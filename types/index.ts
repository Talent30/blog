// <reference types="react" />

// Block external access to auxiliary types

type Merge<T, U> = Omit<T, keyof U> & U;

type PropertiesWithAs<P, T extends React.ElementType> = P & { as?: T };

export type PolymorphicPropertiesWithoutReference<
  P,
  T extends React.ElementType,
> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithoutRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithoutRef<T>,
  PropertiesWithAs<P, T>
>;

export type PolymorphicPropertiesWithReference<
  P,
  T extends React.ElementType,
> = Merge<
  T extends keyof JSX.IntrinsicElements
    ? React.PropsWithRef<JSX.IntrinsicElements[T]>
    : React.ComponentPropsWithRef<T>,
  PropertiesWithAs<P, T>
>;

// TODO:
// - PolymorphicFunctionComponent
// - PolymorphicVoidFunctionComponent (requires @types/react >=16.9.48)

type PolymorphicExoticComponent<
  P = Record<string, unknown>,
  T extends React.ElementType = React.ElementType,
> = Merge<
  React.ExoticComponent<P & Record<string, unknown>>,
  /**
   * **NOTE**: Exotic components are not callable.
   */
  <InstanceT extends React.ElementType = T>(
    props: PolymorphicPropertiesWithReference<P, InstanceT>,
  ) => React.ReactElement | undefined
>;

export type PolymorphicForwardReferenceExoticComponent<
  P,
  T extends React.ElementType,
> = Merge<
  React.ForwardRefExoticComponent<P & Record<string, unknown>>,
  PolymorphicExoticComponent<P, T>
>;

export type PolymorphicMemoExoticComponent<
  P,
  T extends React.ElementType,
> = Merge<
  React.MemoExoticComponent<React.ComponentType<any>>,
  PolymorphicExoticComponent<P, T>
>;

export type PolymorphicLazyExoticComponent<
  P,
  T extends React.ElementType,
> = Merge<
  React.LazyExoticComponent<React.ComponentType<any>>,
  PolymorphicExoticComponent<P, T>
>;
