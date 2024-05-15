import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrivateRoutes />
  </React.StrictMode>
);
