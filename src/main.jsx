import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import { ChatProvider } from './context/ChatContext'
import { RouterApp } from './router/RouterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider> 
      {/* El contexto comparte los valores globales que luego app comunicará a 'aside' y 'chats' */}
      <RouterApp/> 
    </ChatProvider>
  </StrictMode>,
)
