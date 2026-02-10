import { useEffect, useState } from "react"

const Aside = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    const fetchingData =  async () => {
        try {
            const response = await fetch("https://dummyjson.com/users")

            if (!response.ok) {
                alert("No se pudo cargar correctamente la página")
                return
            }

            const data = response.json()
            console.log(data)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [])

    const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(search.toLowerCase()))

    return (
        <aside>
            <h1>
                Chat UTN
            </h1>
            <input type="search" placeholder="Buscar contacto..."  />
            <ul>
                {
                    filteredUsers.map((user) => {
                        <li>
                            <img src={user.image} alt="user profile photo" />
                            {user.firstName} {user.lastName}
                            <small>{user.address.country}</small>
                        </li>
                    })
                }
            </ul>
        </aside>
    )
}

export { Aside }