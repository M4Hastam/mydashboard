import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import App from './components/App'
import { ThemeProvider } from "@/components/theme-provider"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <App />
    </ThemeProvider>
  </StrictMode>,
)
