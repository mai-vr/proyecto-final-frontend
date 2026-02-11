import { useState } from "react"

const Chats = () =>{

    const [messages, setMessages] = useState("")

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
                        <div>
                            {message.author} : {message.text}
                            <p>
                                {message.time}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribir mensaje..." />
                <button>
                    Enviar
                </button>
            </div>
        </section>
    )
}

export { Chats }