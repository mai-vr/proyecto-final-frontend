import { useContext } from "react"
import { ChatContext } from "../context/ChatContext"
import { Navigate } from "react-router-dom"

const RouteProtected = ({children}) => {
    const {loggedUser} = useContext(ChatContext)

    // Si no está loggeado, redirije automaticamente al login.
    if (!loggedUser) {
        return <Navigate to='/login' replace/>
    }

    return (
        children
    )
}

export { RouteProtected }