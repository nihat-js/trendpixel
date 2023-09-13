import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

import homeSvg from '../../assets/home.svg'
import moonSvg from '../../assets/moon.svg'
import notificationSvg from '../../assets/notification.svg'
import profileSvg from "../../assets/profile.svg"
import settingsSvg from "../../assets/settings.svg"
import chatSvg from "../../assets/chat.svg"
import logoutSvg from "../../assets/logout.svg"
import {Avatar} from '../User/Avatar.jsx'
import {useSelector, useDispatch} from 'react-redux'
import {logout} from '../../store/userSlice'
import {toggleTheme} from "../../store/themeSlice.js";

export default function Nav() {

  const theme = useSelector(state => state.theme)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

  function handleLogout() {
    dispatch(logout())
    navigate('/accounts/auth')
    navigate(0)
  }


  const me = useSelector(state => state.user)

  const linkClassName = `px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer ${theme === "DARK" ? "bg-gray-300 hover:bg-gray-700" : ""} `

  return (
    <nav className={` shadow-md py-3    w-full ${theme === "DARK" && "bg-gray-600" }   `}>
      <div style={{maxWidth: "1000px"}} className="container mx-auto flex justify-between  ">

        <div className="links flex gap-3">
          <Link to='/'>
            <div className={linkClassName + " flex gap-3"}>
              <img className='w-6' src={homeSvg} alt=""/>
              <p className="font-semibold"> TrendPixel</p>
            </div>
          </Link>
          <Link to='/accounts/chat'>
            <div className={linkClassName}>
              <img className='w-6' src={chatSvg} alt=""/>
            </div>
          </Link>
        </div>

        <div className="links     ">
          <ul className='flex gap-3 items-center '>

            <Link to='/accounts/notifications'>
              <li className={linkClassName}>
                <img className='w-6' src={notificationSvg} alt=""/>
              </li>
            </Link>

            <li className={linkClassName} onClick={()=> dispatch(toggleTheme()) }>
              <img className='w-6 h-6' src={moonSvg} alt=""/>
            </li>
            <li
              className={`px-4 py-2 rounded-lg hover:bg-gray-300  relative cursor-pointer       ${theme === "DARK" ? "bg-gray-300 hover:bg-gray-700" : ""}  `}
              onClick={() => setToggle(!toggle)}>
              <div className='flex items-center gap-1'>
                <Avatar className='w-6 rounded-full' me={true}/>
                <span> {me.username}  </span>
              </div>

              <div
                className={`bg-white border  border-gray-200 mt-4 dropbox left-0  z-50 absolute ${toggle ? 'block' : 'hidden'}   `}>


                <Link className='px-1 py-2 hover:bg-gray-100 flex gap-2' to={"/" + me.username}>
                  <img className='w-5' src={profileSvg} alt=""/>
                  <span className='text-sm'> Profile </span>
                </Link>

                <Link className='px-1 py-2 hover:bg-gray-100 flex gap-2' to="/accounts/settings">
                  <img className='w-5' src={settingsSvg} alt=""/>
                  <span className='text-sm'> Account </span>
                </Link>

                <Link to='/accounts/logout' className='px-1 py-2  hover:bg-gray-100 flex gap-2'>
                  <img onClick={handleLogout} className='w-5' src={logoutSvg} alt=""/>
                  <span className='text-sm'> Logout </span>
                </Link>


              </div>


            </li>

          </ul>
        </div>


      </div>


    </nav>
  )
}
