import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Counter from './Counter.tsx'

createRoot(document.getElementById('kusum')!).render(
  <StrictMode>
    <App/>
    <Counter/>
  </StrictMode>,
)
