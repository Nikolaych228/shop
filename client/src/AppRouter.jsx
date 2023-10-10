import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import { checkRole } from './api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { removeRole, setRole } from './store/Actions/roleActions'
import { loginSuccess, logout } from './store/Actions/authActions'
import Profile from './pages/Profile'
import AddProduct from './pages/AddProduct'
import NewProduct from './pages/NewProduct'
import { Quit } from './helpers/QuitHandler'

const AppRouter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const check = async() => {
            try{
                const res = await checkRole()
                dispatch(setRole(res.data.role))
                dispatch(loginSuccess())
            } catch {
                Quit(dispatch)
            }
        }
        check()
    }, [])
    const { role } = useSelector((state) => state.role);
    const { loggedIn } = useSelector((state) => state.login)
  return (
    <Routes>
        {loggedIn ? (
            role === "ADMIN" || role === "SUPER_ADMIN" ?
            <>
                <Route path='/addProduct' element={<AddProduct />} /> 
                <Route path='/addProduct/new' element={<NewProduct />} /> 
            </> 
            : role === "EDITOR" ? 
            <>
                <Route path='/addProduct' element={<AddProduct />} /> 
                <Route path='/addProduct/new' element={<NewProduct />} /> 
            </>
            : (
                null
            )
        ) : (
                <>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signin' element={<SignIn />} />
                </>
        )}
        {loggedIn ? <Route path='/profile' element={<Profile />} /> : null}
        <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AppRouter