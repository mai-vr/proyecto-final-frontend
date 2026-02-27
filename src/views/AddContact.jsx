import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/add-contact.css'

const AddContact = () => {
    const contact = {
        name: '',
        lastName: '',
        email: '',
        country: '',
        image: null
    }
    const [newContact, setNewContact] = useState(contact)

    const {addContact} = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChangeContact = (e) => {
        const { name, value } = e.target
        setNewContact({...newContact, [name]: value}) // Agrego al estado los valores ingresados según la etiqueta del input.
    }

    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const reader = new FileReader() // Leer archivos que el usuario selecciona desde el input 'files'.
        // 'onloadend' ejecuta la función cuando el archivo termina de leerse.
        reader.onloadend = () => {
            setNewContact(prev => ({
                ...prev,
                image: reader.result
            }))
        }
        reader.readAsDataURL(file)  // Pasa la imágen a string para guardarla en el localStorage junto con el resto de los datos del usuario.
        console.log(newContact.image)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addContact(newContact)
        
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

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" required placeholder="Ingresar un nombre" onChange={handleChangeContact}/>
                    <label htmlFor="lastName">Apellido (opcional)</label>
                    <input type="text" name="lastName" placeholder="Ingresar un apellido" onChange={handleChangeContact} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required placeholder="Ingresar un email" onChange={handleChangeContact}/>
                    <label htmlFor="country">Pais (opcional)</label>
                    <input type="text" name="country" placeholder="Ingresar un país" onChange={handleChangeContact} />
                    <label htmlFor="image">Foto de perfil (opcional)</label>
                    <input type="file" name="image" accept=".png, .jpeg, .jpg" onChange={handleChangeImage} />
                    <button>
                        Agregar
                    </button>
                </form>  
            </div>

        </section>
    )
}

export { AddContact }