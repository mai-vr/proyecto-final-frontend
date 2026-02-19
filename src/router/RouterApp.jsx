import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from '../views/App'
import { NotFound } from '../views/NotFound'
import { Login } from '../views/Login'
import { AddContact } from '../views/AddContact'
import { Register } from '../views/Register'
import { RouteProtected } from '../components/RouteProtected'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouteProtected><App/></RouteProtected>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/addcontact' element={<AddContact/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }