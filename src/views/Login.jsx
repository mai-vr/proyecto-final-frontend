import { useState, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/login.css'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const {login, handleActiveUser, usLogged} = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        
        if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault() // Controlar el recargar la página.
        setError(null)

        const activeUser = usLogged().find(u => u.email === email)
        
        if (activeUser.password !== password || !activeUser) {
            setError(true)
            return
        }
        
        const response = login(activeUser) // 'login' es una función del contexto que verifica los datos ingresados.
        
        if (!response) {
            setError(true)
            return 
        }
        
        handleActiveUser(activeUser)
        navigate('/')
    }

    return (
        <section className="login">
            <div className="login-container">
                <h3>
                    Inicia sesión
                </h3>
                <p>
                    Comenzá a chatear con tus contactos
                </p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Ingresa un email" onChange={handleChange}/>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="Ingresa una contraseña" onChange={handleChange} />
                    <button>
                        Iniciar sesión
                    </button>
                    <a href="/register">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"/><path d="M21 6H3m18 4H3m8 4H3m8 4H3"/></g></svg>
                        No tengo cuenta
                    </a>
                    {
                        error && <p className="error-font">Error al ingresar</p>
                    }
                </form> 
            </div>

        </section>
    )

}

export { Login }