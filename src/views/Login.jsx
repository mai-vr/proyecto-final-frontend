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

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(null)
        
        // const userActive = usLogged().find(us => us.email === email)
        const response = login({email, password})
        
        if (!response) {
            setError(true)
            return 
        }

        handleActiveUser({email, password})
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
                    <input type="email" placeholder="Escribir email..." onChange={handleChangeEmail}/>
                    <input type="password" placeholder="Escribir contraseña..." onChange={handleChangePassword} />
                    <button>
                        Iniciar sesión
                    </button>
                    <a href="/register">
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