import { useState } from "react"
import { messages as mockMessages } from '../services/mockApi'

const Chats = ({contact}) =>{

    const [text, setText] = useState("")
    const [messages, setMessages] = useState(mockMessages)

    const handleChangeText = (event) => {
        setText(event.target.value) // En 'text' voy a tener el último valor del input.
    }

    const sendMessage = () => {
        const currentTime = new Date()

        if (text.length === 0) {
            return
        }

        const newMesssage = {
            id: messages.length + 1,
            author: 'me',
            time: currentTime.getHours() + ':' + currentTime.getMinutes(), 
            text: text,
        }

        setMessages([...messages, newMesssage]) // Mantener los viejos mensajes y agregar los nuevos.
        setText("") // Limpiar el input
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            sendMessage()
        } else {
            return
        }
    }

    return (
        <section className="chat">
            <header>
                <h2>
                    {contact.firstName} {contact.lastName}
                </h2>
                <p>
                    Última conexión: 1 minuto
                </p>
            </header>

            <div className="chat-body">
                {
                    messages.map((message) => (
                        <div key={message.id} className={`message ${message.author === 'me' ? 'me' : 'received'}`}>
                            <p>
                                {
                                    message.author === 'me' ? 'Me' : message.author = contact.firstName
                                }: {message.text}
                            </p>
                            <p className="timestamp">
                                {message.time}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." onChange={handleChangeText} onKeyDown={handleKeyDown} value={text}/>
                <button onClick={sendMessage}>
                    {
                        text === "" ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z"/><path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"/></g></svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1z"/></svg>
                    }
                    
                </button>
            </div>
        </section>
    )
}

export { Chats }