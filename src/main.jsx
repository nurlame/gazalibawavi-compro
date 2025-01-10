import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import RouterProvider from './config/Router.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RouterProvider />
    </StrictMode>
  </BrowserRouter>

)
