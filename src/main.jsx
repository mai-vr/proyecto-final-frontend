import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import { Aside } from './components/Aside'
import { Chats } from './components/Chats'
import { useState } from 'react'

const SelectedContact = () => {
  const [activeContact, setActiveContact] = useState("")
  return (
    <>
      <Aside setActiveContact={setActiveContact}/>
      <Chats contact={activeContact}/>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='app'>
      <SelectedContact />
    </main>
  </StrictMode>,
)
