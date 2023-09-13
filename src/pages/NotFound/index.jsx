import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function NotFoundPage(){

  const navigate = useNavigate()

  useEffect(()=>{
    // setTimeout(()=>{
    // navigate('/')
    //
    // },3000)
  })

  return (
    <div>
      Link is not valid or maybe under construction
      <p> <Link to="Home Page" > Home Page </Link> </p>
      <p> Redirecting to  home page after 3 seconds  </p>
    </div>
  )
}