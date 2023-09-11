import { Navigate, Outlet } from "react-router-dom"
import { login } from "../store/userSlice"
import {useDispatch} from 'react-redux'

export const AuthRoute = ({ children }) => {
  const dispatch= useDispatch()

  const token = localStorage.token
  const username = localStorage.username
   dispatch(login({username,token}))


  if (Boolean(token)) {
    return children
  } else {
    return <Navigate to='/accounts/auth' />
  }


}