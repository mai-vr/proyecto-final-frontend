import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import '../styles/add-contact.css'

const AddContact = () => {
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [newEmail, setNewEmail] = useState('')
    // const [country, setCountry] = useState('')
    // const [image, setImage] = useState('')

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

    // const handleChangeName = (event) => {
    //     setName(event.target.value)
    // }    

    // const handleChangeLastName = (event) => {
    //     setLastName(event.target.value)
    // }

    // const handleNewEmail = (event) => {
    //     setNewEmail(event.target.value)
    // }    

    // const handleChangeCountry = (event) => {
    //     setCountry(event.target.value)
    // }

    const handleChangeContact = (e) => {
        const { name, value } = e.target
        setNewContact({...newContact, [name]: value})
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
        reader.readAsDataURL(file)
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

                <form onSubmit={handleSubmit} action="upload.php" method="POST" encType="multipart/form-data">
                    <input type="text" name="name" required placeholder="Escribir un nombre..." onChange={handleChangeContact}/>
                    <input type="text" name="lastName" placeholder="Escribir un apellido..." onChange={handleChangeContact} />
                    <input type="email" name="email" required placeholder="Escribir un email..." onChange={handleChangeContact}/>
                    <input type="text" name="country" placeholder="Escribir país..." onChange={handleChangeContact} />
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