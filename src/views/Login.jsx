import { useState, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const {login} = useContext(ChatContext)
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

        const response = login({ email, password })

        if (!response) {
            setError(true)
            return 
        }

        navigate('/')
    }

    return (
        <section className="login">
            <h2>
                Bienvenido/a
            </h2>
            <p>
                Inicia sesión 
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
                    error && <p className="error-form">Error al ingresar</p>
                }
            </form>
        </section>
    )

}

export { Login }