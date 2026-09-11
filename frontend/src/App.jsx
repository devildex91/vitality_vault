import React from 'react';
import { RouterProvider } from 'react-router';

import router from './AppRoutes.jsx';

export default function App() {
  // The app boots with the router-driven page layout and route protection.
  return <RouterProvider router={router} />;
}