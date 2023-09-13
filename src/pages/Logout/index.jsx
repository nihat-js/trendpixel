import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function LogoutPage(){
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setTimeout(()=>{
      navigate('/accounts/auth')
    },1000)
  },[])
  return(
    <div>
      <p> Logging out... </p>

    </div>
  )

}