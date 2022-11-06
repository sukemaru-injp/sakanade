import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { AppProvider } from './providers'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>
)
