import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './providers/authProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider>
      <AuthProvider> 
      <BrowserRouter> 
      <App />
      </BrowserRouter>
      </AuthProvider>
    </ClerkProvider>
  </StrictMode>,
)