import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WeathwerApp } from './WeathwerApp'
import './style.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeathwerApp/>
  </StrictMode>,
)
