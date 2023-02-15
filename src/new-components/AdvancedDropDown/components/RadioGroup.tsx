import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import * as StyleWrappers from './style-wrappers';
import { DefaultProps } from './types';

export const RadioGroup: React.FC<
  {
    label: string;
    value: string;
    onValueChange?: (value: string) => void;
  } & DefaultProps
> = ({ label, value, onValueChange, children }) => (
  <>
    <DropdownMenu.Label>
      <StyleWrappers.Label>{label}</StyleWrappers.Label>
    </DropdownMenu.Label>
    <DropdownMenu.RadioGroup value={value} onValueChange={onValueChange}>
      {children}
    </DropdownMenu.RadioGroup>
  </>
);
