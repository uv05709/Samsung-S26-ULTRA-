import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.css'
import './styles/navbar.css'
import './styles/home.css'
import './styles/footer.css'
import './styles/buy.css'
import './styles/galaxy26.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
