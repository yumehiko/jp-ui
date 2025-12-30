import type * as React from 'react';

type ClassNameProp<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T>['className'];
type ClassNameFn<T extends React.ElementType> = Exclude<
  ClassNameProp<T>,
  string | undefined
>;
type ClassNameState<T extends React.ElementType> = Parameters<ClassNameFn<T>>[0];

export function mergeClassName<T extends React.ElementType>(
  className: ClassNameProp<T>,
  ...baseClassNames: Array<string | undefined>
): ClassNameProp<T> {
  const base = baseClassNames.filter(Boolean).join(' ');
  if (!className) {
    return base as ClassNameProp<T>;
  }
  if (typeof className === 'function') {
    return ((state: ClassNameState<T>) =>
      [base, className(state)].filter(Boolean).join(' ')) as ClassNameProp<T>;
  }
  return [base, className].filter(Boolean).join(' ') as ClassNameProp<T>;
}
