import { useState, useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { useNavigate } from 'react-router-dom'
import defaultPhoto from "../assets/profileDefaultPhoto.jpg"

const Aside = () => {

    const [search, setSearch] = useState("")

    const { users, handleSelectedUser, logout, loggedUser, showAside, setShowAside } = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleClick = (id) => {
        handleSelectedUser(id)
        setShowAside(!showAside) // Cuando en un celular el usuario clickee un contacto se dejará de mostrar el aside y se mostrará el chat con ese contacto.
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const filteredUsers = users.filter((user) => {  // Lista de contactos filtrada en base a nombre y apellido.
        const fullName = `${user.firstName} ${user.lastName}`
        return fullName.toLowerCase().includes(search.toLowerCase()) // Normalización de datos.
    })

    return (
        <aside className={`${showAside ? 'show' : ''}`}> 
            <div className="header-aside">
                <div className="user-profile">
                    <img src={loggedUser.image ? loggedUser.image : defaultPhoto} alt="profile photo" />
                    <h1>
                        {loggedUser.firstName} {loggedUser.lastName}
                    </h1>
                </div>

                <button onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                </button>
                <a href="/addcontact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg>
                </a>
            </div>

            <input type="search" placeholder="Buscar contactos..." onChange={handleChange} />
            <hr />
            <ul>
                {
                    filteredUsers.length === 0 ? <p className='contact-not-found'>No hay contactos</p> :
                        filteredUsers.map((user) => (
                            <li key={user.id} onClick={() => handleClick(user.id)}>
                                <img src={user.image ? user.image : defaultPhoto} alt="user profile photo" />

                                <div>
                                    {user.firstName} {user.lastName}
                                    <small>{user.address.country}</small>
                                </div>
                            </li>
                        ))
                }
            </ul>
        </aside>
    )
}

export { Aside }