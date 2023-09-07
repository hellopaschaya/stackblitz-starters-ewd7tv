import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { MenuHeader } from './MenuHeader';

const root = createRoot(document.getElementById('app'));
const menuHeader = createRoot(document.getElementById('menuHeader'));

root.render(
  <StrictMode>
    <App name="StackBlitz" />
  </StrictMode>
);
menuHeader.render(
  <StrictMode>
    <MenuHeader name="StackBlitz" number="66666" />
  </StrictMode>
);
