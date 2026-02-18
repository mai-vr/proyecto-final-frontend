import { Chat } from '../components/Chats'
import { Aside } from '../components/Aside'

const App = () => {
    return (
        <main className="app">
            <Aside/>
            <Chat/>
        </main>
    )
}

export { App }