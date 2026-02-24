import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/register.css'

const Register = () => {
    
    const {users, handleActiveUser} = useContext(ChatContext)
    const navigate = useNavigate()

    const newUserData = {
        id: users.length + 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: {country: ''},
        image: '',
        messages: []
    }

    const [newUser, setNewUser] = useState(newUserData)

    const handleChangeUser = (e) => {
        const { name, value } = e.target
        setNewUser({...newUser, [name]: value})
    }

    const handleSubmitUser = (e) => {
        e.preventDefault()

        const parsedUsers = JSON.parse(localStorage.getItem('usersLogged'))

        const savedLogged = [parsedUsers] || []
        savedLogged.push(newUser)
        
        localStorage.setItem('usersLogged', JSON.stringify(savedLogged))

        handleActiveUser(newUser)
        navigate('/')
    }

    return (
        <section className="register">
            <div className="register-container">
                <h2>
                    Bienvenido/a
                </h2>
                <p>
                    Registrate para poder comenzar a chatear con tus contactos
                </p>
                <form onSubmit={handleSubmitUser}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="firstName" placeholder="Ingresa tu nombre" required onChange={handleChangeUser} minLength='3'/>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" placeholder="Ingresa tu apellido" required onChange={handleChangeUser}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Ingresa tu email" required onChange={handleChangeUser}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="Ingresa una contraseña" required onChange={handleChangeUser} minLength='6'/>
                    <label htmlFor="country">País</label>
                    <input type="text" name="country" placeholder="Ingresa un país" onChange={handleChangeUser}/>
                    <button>
                        Enviar
                    </button>
                </form>
            </div>

        </section>
    )
}

export { Register }