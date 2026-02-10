import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import { Aside } from './components/Aside'
import { Chats } from './components/Chats'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aside />
    <Chats />
  </StrictMode>,
)
