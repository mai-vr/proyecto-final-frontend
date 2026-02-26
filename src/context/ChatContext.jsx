import { createContext, useContext, useEffect, useState } from 'react'
import { users as mockUsers } from '../services/mockApi'
import { usersLogged as usLog } from '../services/mockApi'

const ChatContext = createContext() 

// Quiero que toda la app conozca los contactos.
const ChatProvider = ({ children }) => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(() => {
        const savedLogged = localStorage.getItem('usersLogged')
        if (savedLogged === undefined || !savedLogged) {
            return null
        }
        return JSON.parse(savedLogged)
    })

    const handleActiveUser = (user) => {
        setLoggedUser(user)
        localStorage.setItem('usersLogged', JSON.stringify(user))
    }

    const handleSelectedUser = (id) => {
        const foundUser = totalUsers().find(user => user.id === id)
        setSelectedUser(foundUser)
    }

    const logout = () => {
        localStorage.removeItem('usersLogged')
        setLoggedUser(null)
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

    const totalUsers = () => {
        const savedUsers = localStorage.getItem('users')

        if (savedUsers) {
            return JSON.parse(savedUsers)
        }

        return mockUsers 
    }
    const [users, setUsers] = useState(totalUsers)

    const usLogged = () => {
        const savedLoggedUsers = localStorage.getItem('usersLogged')

        if (savedLoggedUsers) {
            const savedJson = JSON.parse(savedLoggedUsers)
            // Paso el objeto a array para poder usar '.find' luego.
            return [savedJson]
        }
        return usLog
    }

    const login = (userData) => {
        
        const foundUser = usLogged().find(us => us.email === userData.email)
        
        if (!foundUser) {
            return false
        }
        if (foundUser.password === userData.password) {
            setLoggedUser(foundUser)
            localStorage.setItem('usersLogged', JSON.stringify(foundUser))
            return true
        }

    }

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

    const [showAside, setShowAside] = useState(false) // Determinar si mostrar o no la lista de contactos en dispositivos móviles.


    return (
        <ChatContext.Provider value={{ users, selectedUser, handleNewMessages, handleSelectedUser, login, addContact, handleActiveUser, logout, loggedUser, showAside, setShowAside }}> 
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }