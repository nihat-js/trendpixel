import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import defaultAvatar from "../../assets/default-avatar.svg"
export  function Avatar({src,username, classList , width=24}) {
  const navigate = useNavigate()
  return (
    <Link to={'/'+username}>
    <img  className={" rounded-full hover:bg-slate-100"} width={width+"px"} src={defaultAvatar} alt="avatar" />
    </Link>
  )
}
