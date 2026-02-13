import { useState, useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Aside = () => {

    const [search, setSearch] = useState("")

    const { users, handleSelectedUser } = useContext(ChatContext)

    const handleChange = (event) => {
        setSearch(event.target.value) 
    }

    const handleClick = (id) => {
        handleSelectedUser(id)
    }

    // Normalizar datos (trabajar con todo en lower case).
    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`
        return fullName.toLowerCase().includes(search.toLowerCase())
    })
    // Filtro los usuarios en torno a: primero generar el nombre completo y a ese string que genero le pregunto si contiene lo que busco.

    return (
        <aside>
            <h1>Chat UTN</h1>
            <input type="search" placeholder="Buscar contactos..." onChange={handleChange}/>
            <ul>
                {
                    filteredUsers.length === 0 ? <p className='not-found'>No hay contactos</p> :
                    filteredUsers.map((user) => (
                        <li key={user.id} onClick={()=> handleClick(user.id)}>
                            <hr/>
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