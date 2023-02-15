import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useConsoleForm } from './hooks/useConsoleForm';
import { Schema } from './hooks/form.types';

export const SimpleForm = <FormSchema extends Schema>(props: any) => {
  const { Form } = useConsoleForm<FormSchema>(props);
  return <Form {...props} />;
};

SimpleForm.defaultProps = {
  className: '',
  id: uuid(),
  options: {},
};
