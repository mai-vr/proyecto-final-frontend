import { Chat } from './Chats'
import { Aside } from './Aside'

const App = () => {
    return (
        <main className="app">
            <Aside/>
            <Chat/>
        </main>
    )
}

export { App }