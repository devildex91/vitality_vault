import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeContext.jsx';

/*import router from './AppRoutes.jsx'
 /*<RouterProvider router={router} />*/
createRoot(document.getElementById('root')).render(
   <ThemeProvider>
   <StrictMode>
  <App />
  </StrictMode>
  </ThemeProvider>
    
  
)
