import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/register.css'

const Register = () => {
    
    const {users, login, handleActiveUser} = useContext(ChatContext)
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

    const handleChangeName = (e) => {
        setNewUser({
            ...newUser,
            firstName: e.target.value
        })
    }

    const handleChangeLastName = (e) => {
        setNewUser({
            ...newUser,
            lastName: e.target.value,
        })
    }

    const handleChangeEmail = (e) => {
        setNewUser({
            ...newUser,
            email: e.target.value
        })
    }

    const handleChangePassword = (e) => {
        setNewUser({
            ...newUser,
            password: e.target.value
        })
    }

    const handleChangeCountry = (e) => {
        setNewUser({
            ...newUser,
            address: {country: e.target.value}
        })
    }

    const handleSubmitUser = (e) => {
        e.preventDefault()
        login(newUser)
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
                    <input type="text" placeholder="Ingresa tu nombre" required onChange={handleChangeName}/>
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" placeholder="Ingresa tu apellido" required onChange={handleChangeLastName}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Ingresa tu email" required onChange={handleChangeEmail}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="Ingresa una contraseña" required onChange={handleChangePassword}/>
                    <label htmlFor="country">País</label>
                    <input type="text" placeholder="Ingresa un país" onChange={handleChangeCountry}/>
                    <button>
                        Enviar
                    </button>
                </form>
            </div>

        </section>
    )
}

export { Register }