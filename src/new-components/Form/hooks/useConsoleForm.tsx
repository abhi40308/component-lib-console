import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { FormProvider, useForm as useReactHookForm } from 'react-hook-form';

// available as a standlone if needed for advanced usage
const ConsoleFormWrapper = (props: any) => {
  const { id, className, onSubmit, children, ...methods } = props;
  return (
    <FormProvider {...methods}>
      <form
        id={id}
        className={className}
        onSubmit={methods.handleSubmit(onSubmit as any)}
        data-non-regression="new-form-pattern"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const useConsoleForm = (hookProps: any) => {
  const { options = {}, schema } = hookProps;

  const methods = useReactHookForm<any>({
    ...options,
    resolver: (schema && zodResolver(schema)) as any,
  });

  const BoundWrapper = React.useMemo(
    () => (props: any) => (
      <ConsoleFormWrapper {...methods} {...props}>
        {props.children}
      </ConsoleFormWrapper>
    ),
    [methods]
  );

  return {
    methods,
    Form: BoundWrapper,
  };
};
