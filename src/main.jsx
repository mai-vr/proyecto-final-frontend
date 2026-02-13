import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import { App } from './components/App'
import { ChatProvider } from './context/ChatContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider> 
      {/* El contexto comparte los valores globales que luego app comunicará a 'aside' y 'chats' */}
      <App/> 
    </ChatProvider>
  </StrictMode>,
)
