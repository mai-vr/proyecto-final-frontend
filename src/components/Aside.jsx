import { useEffect, useState } from "react"

const Aside = (setActiveContact) => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    const fetchingData =  async () => {
        try {
            const response = await fetch("https://dummyjson.com/users")

            if (!response.ok) {
                alert("No se pudo cargar correctamente la página")
                return
            }

            const data = await response.json()
            setUsers(data.users)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase()))  
    
    const handleActiveContact = (user) => {
        setActiveContact(user.firstName + user.lastName)
    }

    return (
        <aside>
            <h1>
                Chat UTN
            </h1>
            <input type="search" placeholder="Buscar contacto..." onChange={handleChange} />
            <ul>
                {
                    filteredUsers.length === 0 ? <p className="not-found">No se encontraron contactos</p> :
                    filteredUsers.map((user) => (
                        <li key={user.id}>
                            <img src={user.image} alt="user profile photo" />
                            <div onClick={handleActiveContact(user)}>
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