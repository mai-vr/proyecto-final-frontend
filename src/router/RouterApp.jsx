import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from '../views/App'
import { NotFound } from '../views/NotFound'
import { Login } from '../views/Login'
import { AddContact } from '../views/AddContact'
import { Home } from '../views/Home'
import { Register } from '../views/Register'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/app' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/addcontact' element={<AddContact/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { RouterApp }