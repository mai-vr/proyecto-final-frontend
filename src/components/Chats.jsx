import { useState, useRef, useEffect, useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"
import defaultProfile from "../assets/profileDefaultPhoto.jpg"

const Chat = () => {
    
    const [text, setText] = useState("")
    const [seeContacts, setSeeContacts] = useState(false)

    const chatBodyRef = useRef(null) // Referencia para mostrar siempre el último mensaje.

    const {selectedUser, handleNewMessages, logout, showAside, setShowAside } = useContext(ChatContext)
    const navigate = useNavigate()

    const handleChangeText = (event) => {
        setText(event.target.value) // En 'text' voy a tener lo último que escribió el usuario en el input.
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    // Funcion para enviar el mensaje (crear el objeto y agregar el objeto a mi lista de mensajes).
    const sendMessage = () => {

        if (text.length === 0){
            return 
        }
        
        const currentTime = new Date()

        const newMessage = {
            author: "me",
            text: text,
            time: currentTime.getHours() + ":" + currentTime.getMinutes(),
        }

        handleNewMessages(newMessage)
        setText("") // Limpiar el input para escribir mensajes.    
    }

    useEffect(() => {
        if (chatBodyRef.current) { // Cada vez que se manda un mensaje el scroll del chat queda en el último.
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight    
        }
    }, [sendMessage]) 

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
                <img src={selectedUser.image ? selectedUser.image : defaultProfile} alt="profile photo" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>    
                </button>
                <a href="/addcontact">
                    <svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path fill="#F5F7FF" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2"/></svg>
                </a>
                <button onClick={()=> setShowAside(!showAside)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#F5F7FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2"/><circle cx="12" cy="11" r="3"/><rect width="18" height="18" x="3" y="4" rx="2"/></g></svg>
                </button>
            </footer>
        </section>
        </>
    )
}

export { Chat }