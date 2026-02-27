import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/register.css'

const Register = () => {

    const { users, login, handleActiveUser } = useContext(ChatContext)
    const navigate = useNavigate()

    const newUserData = {
        id: users.length + 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: { country: '' },
        image: '',
    }

    const [newUser, setNewUser] = useState(newUserData)
    const [errorName, setErrorName] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const handleChangeUser = (e) => {
        const { name, value } = e.target

        if (e.target.name === "firstName") {    // Si el nombre y/o contraseña son incorrectos no se guardan.
            if (e.target.value.length < 3) {
                setNewUser({ ...newUser, firstName: null })
                return
            }
        } else if (e.target.name === "password") {
            if (e.target.value.length < 6) {
                setNewUser({ ...newUser, password: null })
                return
            }
        }

        setNewUser({ ...newUser, [name]: value }) // Luego, settear los valores en base a la etiqueta del input.
    }

    const handleChangeImage = (e) => {
        const image = e.target.files[0]
        if (!image) return
        const reader = new FileReader()

        reader.onloadend = () => {
            setNewUser(prev => ({
                ...prev,
                image: reader.result
            }))

        }
        reader.readAsDataURL(image)
    }

    const handleSubmitUser = (e) => {
        e.preventDefault()

        if (newUser.firstName === null) {   // Avisar el error al ingresar el nombre y/o contraseña respectivamente.
            setErrorName('Nombre inválido, debe contener al menos 3 letras')
            return
        }

        if (newUser.password === null) {
            setErrorPassword('Contraseña inválida, debe contener al menos 6 caracteres')
            return
        }

        const parsedUsers = [JSON.parse(localStorage.getItem('usersLogged'))] || [] // Obtener la lista de usuarios loggeados que está en el local storage.

        const savedLogged = [...parsedUsers, newUser]

        localStorage.setItem('usersLogged', JSON.stringify(savedLogged))    

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
                    <input type="text" name="firstName" placeholder="Ingresa tu nombre" required onChange={handleChangeUser} />
                    {errorName && <p className="error-font">{errorName}</p>}
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" name="lastName" placeholder="Ingresa tu apellido" required onChange={handleChangeUser} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Ingresa tu email" required onChange={handleChangeUser} />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" placeholder="Ingresa una contraseña" required onChange={handleChangeUser} />
                    {errorPassword && <p className="error-font">{errorPassword}</p>}
                    <label htmlFor="image">Foto de perfil</label>
                    <input type="file" name="image" accept=".png, .jpeg, .jpg" onChange={handleChangeImage} />
                    <label htmlFor="country">País</label>
                    <input type="text" name="country" placeholder="Ingresa un país" onChange={handleChangeUser} />
                    <button>
                        Enviar
                    </button>
                </form>
            </div>

        </section>
    )
}

export { Register }