import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import * as StyleWrappers from './style-wrappers';
import { DefaultProps } from './types';

export const Label: React.FC<DefaultProps> = ({ children }) => (
  <DropdownMenu.Label>
    <StyleWrappers.Label>{children}</StyleWrappers.Label>
  </DropdownMenu.Label>
);
