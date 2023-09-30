import {Navigate, Outlet, useNavigate} from "react-router-dom"
import {login} from "../store/userSlice"
import {useDispatch} from 'react-redux'
import {useEffect} from "react";

export const AuthRoute = ({children}) => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  

  useEffect(() => {
    const token = localStorage.token || sessionStorage.token
    const username = localStorage.username || sessionStorage.username
    if (!token) {
      navigate('/accounts/auth')
    } else {
      dispatch(login({username, token}))
    }
  }, [])

  return children

}