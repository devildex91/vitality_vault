import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import './index.css'
import router from './AppRoutes.jsx'
import { ThemeProvider } from './ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
   <ThemeProvider>
   <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
  </ThemeProvider>
    
  
)
