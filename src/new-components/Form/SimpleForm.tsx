import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useConsoleForm } from './hooks/useConsoleForm';

export const SimpleForm = (props: any) => {
  const { Form } = useConsoleForm(props);
  return <Form {...props} />;
};

SimpleForm.defaultProps = {
  className: '',
  id: uuid(),
  options: {},
};
