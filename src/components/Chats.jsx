import { useState } from "react"
import { messages as mockMessages } from '../services/mockApi'

const Chats = () =>{

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

        setMessages(newMesssage)
        setText("") // Limpiar el input
    }

    return (
        <section className="chat">
            <header>
                <h2>
                    Nombre Apellido
                </h2>
            </header>
            <p>
                Última conexión: 1 minuto
            </p>
            <div className="chat-body">
                {
                    messages.map((message) => (
                        <div key={message.id} className={`message ${message.author === 'Maria' ? 'me' : 'received'}`}>
                            {message.author} : {message.text}
                            <p className="timestamp">
                                {message.time}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribir mensaje..." onChange={handleChangeText} value={text}/>
                <button onClick={sendMessage}>
                    Enviar
                </button>
            </div>
        </section>
    )
}

export { Chats }