import { useState, useRef, useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Chat = () => {
    
    const [text, setText] = useState("")
    // const [messages, setMessages] = useState(mockUsers.messages)
    const [seeContacts, setSeeContacts] = useState(false)

    const chatBodyRef = useRef(null) // Referencia para mostrar siempre el último mensaje.

    const {selectedUser, handleNewMessages, logout } = useContext(ChatContext)
    const navigate = useNavigate()

    // Manipular el input.
    const handleChangeText = (event) => {
        setText(event.target.value) // En 'text' voy a tener el último valor del input.
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    // Funcion para enviar el mensaje (crear el objeto y agregar el objeto a mi lista de mensajes).
    const sendMessage = () => {

        if (text.length === 0){
            return // Si no hay mensaje no ejecuto la función.
        }
        
        const currentTime = new Date()

        const newMessage = {
            // id: selectedUser.messages.length + 1,  
            author: "me",
            text: text,
            time: currentTime.getHours() + ":" + currentTime.getMinutes(),
        }

        handleNewMessages(newMessage)
        setText("") // Limpiar el texto.    
    }

    useEffect(() => {
        if (chatBodyRef.current) { // Cuando enviamos un mensaje actual tiene un scroll top, queremos que el scroll top baje.
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight    
        }
    }, [sendMessage]) 
    // Cuando se modifican los mensajes, se ejecuta lo del primer parámetro.

    const handleClickContacts = () => {
        setSeeContacts(!seeContacts)
    }

    const handlClickLogout = () => {
        logout()
        navigate('/login')
    }

    if (!selectedUser) {
        return (
            <section className="empty-chat-cont">
                <p className="empty-chat">
                    Seleccione un contacto para comenzar a conversar
                </p>
            </section>
        )
    }

    return (
        <>
        <section className="chat">
            <header>
                <img src={selectedUser.image} alt="profile photo" />
                <div className="profile-info">
                    <h2>
                        {selectedUser.firstName} {selectedUser.lastName}
                    </h2>
                    <p className={`${selectedUser.status === 'online' ? 'online-chat' : 'offline-chat'}`}>
                        {selectedUser.status}
                    </p> 
                </div>

            </header>
            <div className="chat-body" ref={chatBodyRef}>
                {
                    selectedUser.messages.map((message) => 
                    <div key={message.id} className={`message ${message.author === "me" ? "me" : "received"}`}>
                        <b>{message.author}</b> : {message.text}
                        <p className="timestamp">{message.time}</p>
                    </div>
                    )
                }
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje..."  onChange={handleChangeText} onKeyDown={handleKeyDown} value={text}/> 
                <button onClick={sendMessage}>
                    {
                        text === "" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff"><path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z"/><path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"/></g></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg>
                    }
                </button>
            </div>
            <footer className="footer-chat-mobile">
                <button onClick={handlClickLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>    
                </button>
            </footer>
        </section>
        </>
    )
}

export { Chat }