import { createContext, useContext, useEffect, useState } from 'react'
import { users as mockUsers } from '../services/mockApi'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [loggedUser, setLoggedUser] = useState(() => {
        const savedLogged = localStorage.getItem('usersLogged')
        if (savedLogged === undefined || !savedLogged) {
            return null
        }
        return JSON.parse(savedLogged)  // Inicializar el estado con los usuarios loggeados guardados en el local storage.
    })

    const handleActiveUser = (user) => { // Funcion utilizada en los componentes 'login' y 'register' para mantener la sesión activa.
        setLoggedUser(user) 
        localStorage.setItem('usersLogged', JSON.stringify(user))
    }

    const handleSelectedUser = (id) => { // Usado en el 'aside' para encontrar al usuario en base al id.
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
            messages: [...selectedUser.messages, newM] // Mantener los mensajes al refrescar la página.
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
        return []
    }

    const login = (userData) => {

        const foundUser = usLogged().find(us => us.email === userData.email) // Acceder a todos los datos del usuario en base al email que ingresó al loggearse.
        
        if (!foundUser) {
            return false
        }

        if (foundUser.password === userData.password) {
            setLoggedUser(foundUser)    // En 'aside' se usan otras propiedades del objeto (nombre, apellido, imagen).
            localStorage.setItem('usersLogged', JSON.stringify(foundUser)) // Luego de verificar los datos se guardan en local storage.
            return true
        }
        return false
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

        localStorage.setItem('users', JSON.stringify(updatedUsers)) // Actualizar la lista de contactos en el local storage.
        return true
    }

    const [showAside, setShowAside] = useState(true) // Determinar si mostrar o no la lista de contactos en dispositivos móviles.

    return (
        <ChatContext.Provider value={{ users, selectedUser, handleNewMessages, handleSelectedUser, handleActiveUser, login, addContact, logout, loggedUser, showAside, setShowAside }}>
            {children}
        </ChatContext.Provider>
    )
}

export { ChatContext, ChatProvider }