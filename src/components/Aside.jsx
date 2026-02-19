import { useState, useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { useNavigate } from 'react-router-dom'

const Aside = () => {

    const [search, setSearch] = useState("")

    const { users, handleSelectedUser, logout, loggedUser } = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        setSearch(event.target.value) 
    }

    const handleClick = (id) => {
        handleSelectedUser(id)
    }

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    // Normalizar datos (trabajar con todo en lower case).
    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`
        return fullName.toLowerCase().includes(search.toLowerCase())
    })
    // Filtro los usuarios en torno a: primero generar el nombre completo y a ese string que genero le pregunto si contiene lo que busco.

    return (
        <aside>
            <div className="header-aside">
                <h1>
                    {loggedUser.firstName} {loggedUser.lastName}
                </h1>
                <button onClick={handleLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>    
                </button>
                <a href="/addcontact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>
                </a>
            </div>
            
            <input type="search" placeholder="Buscar contactos..." onChange={handleChange}/>
            <hr />
            <ul>
                {
                    filteredUsers.length === 0 ? <p className='contact-not-found'>No hay contactos</p> :
                    filteredUsers.map((user) => (
                        <li key={user.id} onClick={()=> handleClick(user.id)}>
                            <img src={user.image} alt="user profile photo"/>
                            
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