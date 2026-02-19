import { Chat } from '../components/Chats'
import { Aside } from '../components/Aside'
import '../styles/main.css'

const App = () => {
    return (
        <main className="app">
            <Aside/>
            <Chat/>
        </main>
    )
}

export { App }