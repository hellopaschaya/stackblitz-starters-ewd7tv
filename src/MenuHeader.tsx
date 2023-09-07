import { FC } from 'react';

import './style.css';

export const MenuHeader: FC<{ name: string; number: string }> = ({
  name,
  number,
}) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <h1>xxx {number}!</h1>
    </div>
  );
};
