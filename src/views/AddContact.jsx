import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const AddContact = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')

    const {addContact} = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChangeName = (event) => {
        setName(event.target.value)
    }    

    const handleChangeLastName = (event) => {
        setLastName(event.target.value)
    }

    const handleNewEmail = (event) => {
        setNewEmail(event.target.value)
    }    

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    const handleChangeCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        register({name, lastName, newEmail, newPassword, country, image})
        
        navigate('/app')
    }
    
    return (
        <section className="cont-register">
            <h1>
                ¡Hola!
            </h1>
            <h4>
                Agrega un nuevo contacto para comenzar a chatear
            </h4>

            <form onSubmit={handleSubmit} action="upload.php" method="POST" encType="multipart/form-data">
                <input type="text" required placeholder="Escribir un nombre..." onChange={handleChangeName}/>
                <input type="text" required placeholder="Escribir un apellido..." onChange={handleChangeLastName} />
                <input type="email" required placeholder="Escribir un email..." onChange={handleNewEmail}/>
                <input type="password" required placeholder="Escribir una contraseña..." onChange={handleNewPassword} />
                <input type="text" placeholder="Escribir país..." onChange={handleChangeCountry} />
                <input type="file" accept="image/*" onChange={handleChangeImage} />
                <button>
                    Enviar
                </button>
            </form>
        </section>
    )
}

export { AddContact }