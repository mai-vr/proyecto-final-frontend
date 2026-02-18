import { createContext, useContext, useEffect, useState } from 'react'
import { users as mockUsers } from '../services/mockApi'

const ChatContext = createContext() 

// Quiero que toda la app conozca los contactos.
const ChatProvider = ({ children }) => {

    const [users, setUsers] = useState(mockUsers)
    const [selectedUser, setSelectedUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(null)

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

    const login = (userData) => {
        const foundUser = mockUsers.find(user => user.email === userData.email)

        if (!foundUser){
            return false
        }
        if (foundUser.password === userData.password){
            return true
        }
    }

    return (
        <ChatContext.Provider value={{ users, selectedUser, handleNewMessages, handleSelectedUser, login }}> 
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }