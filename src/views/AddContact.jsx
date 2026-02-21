import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/add-contact.css'

const AddContact = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [newEmail, setNewEmail] = useState('')
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

    const handleChangeCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addContact({name, lastName, newEmail, country, image})
        
        navigate('/')
    }
    
    return (
        <section className="add-contact">
            <div className="add-contact-cont">
                <h1>
                    Agregar contacto
                </h1>
                <h4>
                    Agrega un nuevo contacto para comenzar a chatear
                </h4>

                <form onSubmit={handleSubmit} action="upload.php" method="POST" encType="multipart/form-data">
                    <input type="text" required placeholder="Escribir un nombre..." onChange={handleChangeName}/>
                    <input type="text" required placeholder="Escribir un apellido..." onChange={handleChangeLastName} />
                    <input type="email" required placeholder="Escribir un email..." onChange={handleNewEmail}/>
                    <input type="text" placeholder="Escribir país..." onChange={handleChangeCountry} />
                    <input type="file" accept="image/*" onChange={handleChangeImage} />
                    <button>
                        Agregar
                    </button>
                </form>  
            </div>

        </section>
    )
}

export { AddContact }