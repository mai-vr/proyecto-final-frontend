import { createContext, useContext, useEffect, useState } from 'react'
import { users as mockUsers } from '../services/mockApi'

const ChatContext = createContext() 

// Quiero que toda la app conozca los contactos.
const ChatProvider = ({ children }) => {
    const userMessagesInLS = JSON.parse(localStorage.getItem('messages'))

    const [users, setUsers] = useState(mockUsers)
    const [selectedUser, setSelectedUser] = useState(userMessagesInLS)

    // const [messages, setMessages] = useState(mockUsers.messages)

    const handleSelectedUser = (id) => {
        setSelectedUser(users.find(user => user.id === id))
    }

    const handleNewMessages = (newM) => {
        // Mantener las propiedades de selectedUser y sólo modificar su propiedad 'messages'.
        setSelectedUser({
            ...selectedUser,
            messages: [...selectedUser.messages, newM]
        })
        
    }

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(selectedUser))
    }, [handleNewMessages])

    return (
        <ChatContext.Provider value={{ users, selectedUser, handleNewMessages, handleSelectedUser }}> 
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }