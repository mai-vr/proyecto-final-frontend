import { createContext, useContext, useEffect, useState } from 'react'
import { users as mockUsers } from '../services/mockApi'

const ChatContext = createContext() 

// Quiero que toda la app conozca los contactos.
const ChatProvider = ({ children }) => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(null)

    // const [messages, setMessages] = useState(mockUsers.messages)

    const handleSelectedUser = (id) => {
        const foundUser = totalUsers().find(user => user.id === id)
        setSelectedUser(foundUser)
    }

    const handleNewMessages = (newM) => {
        // Mantener las propiedades de selectedUser y sólo modificar su propiedad 'messages'.
        const updatedSelectedUser = {
            ...selectedUser,
            messages: [...selectedUser.messages, newM]
        }
        setSelectedUser(updatedSelectedUser)

        // Actualizar la lista real de contactos.
        const updatedUsers = users.map(us => us.id === selectedUser.id ? updatedSelectedUser : us)
        setUsers(updatedUsers)

        localStorage.setItem('users', JSON.stringify(updatedUsers))
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

    const totalUsers = () => {
        const savedUsers = localStorage.getItem('users')

        if (savedUsers) {
            return JSON.parse(savedUsers)
        }

        return mockUsers 
    }
    const [users, setUsers] = useState(totalUsers)

    const messagesSaved = (newMessages) => {
        setUsers({
            ...users, 
            messages: newMessages 
        })
        return users
    }

    const addContact = (newUserData) => {
        const newUser = {
            id: users.length + 1,
            firstName: newUserData.name,
            lastName: newUserData.lastName,
            email: newUserData.email,
            password: newUserData.newPassword,
            address: { country: newUserData.country },
            status: 'offline',
            image: newUserData.image,
            messages: []
        }

        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)

        messagesSaved

        localStorage.setItem('users', JSON.stringify(updatedUsers))
        return true
    }

    return (
        <ChatContext.Provider value={{ users, selectedUser, handleNewMessages, handleSelectedUser, login, addContact }}> 
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }