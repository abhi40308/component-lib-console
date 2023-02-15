import React from 'react';

type Props = {
  children?: any;
};

export const ItemRightSlot: React.FC<Props> = ({ children }) => (
  <div className='ml-auto pl-5'>{children}</div>
);
