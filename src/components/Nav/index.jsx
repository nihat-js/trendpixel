import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import homeSvg from '../../assets/home.svg'
import moonSvg from '../../assets/moon.svg'
import notificationSvg from '../../assets/notification.svg'
import profileSvg from "../../assets/profile.svg"
import settingsSvg from "../../assets/settings.svg"
import chatSvg from "../../assets/chat.svg"
import logoutSvg from "../../assets/logout.svg"
import { Avatar } from '../Avatar'
import {useSelector, useDispatch} from  'react-redux'
import { logout } from '../../store/userSlice'
export default function Nav() {

  const theme = "DARK"
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)

  function handleLogout(){
    dispatch(logout())
    navigate('/accounts/auth')
    navigate(0)
  } 


  const user = useSelector(state => state.user.username)
  console.log(user)

  function reverseTheme() {

  }

  const linkClassName = `px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer ${theme == "DARK" ? "bg-gray-300 hover:bg-gray-700" : ""} `

  return (
    <nav className={`main shadow-md py-3    w-full  `}>
      <div style={{ maxWidth: "1200px" }} className="container mx-auto  ">
        <div className="row flex justify-between items-center gap-16   ">

          <div className=" flex-1 relative w-full ">

            <div className={`relative 1`} >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>



          </div>


          <div className="links     ">
            <ul className='flex gap-3 items-center '>
              <Link to='/'>
                <li className={linkClassName} >

                  <img className='w-6' src={homeSvg} alt="" />
                </li>
              </Link>
              <Link to='/chat'>
                <li className={linkClassName} >
                  <img className='w-6' src={chatSvg} alt="" />
                </li>
              </Link>

              {/* <Link to='/notifications'>
              <li className={linkClassName} >
                <img className='w-6' src={notificationSvg} alt="" />
              </li>
            </Link> */}

              <li className={linkClassName} onClick={reverseTheme}  >
                <img className='w-6 h-6' src={moonSvg} alt="" />
              </li>
              <li className={`px-4 py-2 rounded-lg hover:bg-gray-300  relative cursor-pointer       ${theme == "dark" ? "bg-gray-300 hover:bg-gray-700" : ""}  `} onClick={() => setToggle(!toggle)} >
                <div className='flex items-center gap-1'>
                  <Avatar className='w-6 rounded-full' me={true} />
                  <span> {user.username}  </span>
                </div>

                <div className={`bg-white border  border-gray-200 mt-4 dropbox left-0  z-50 absolute ${toggle ? 'block' : 'hidden'}   `}>


                  <Link className='px-1 py-2 hover:bg-gray-100 flex gap-2' to={"/" + user.username}>
                    <img className='w-5' src={profileSvg} alt="" />
                    <span className='text-sm'> Profile </span>
                  </Link>

                  <Link className='px-1 py-2 hover:bg-gray-100 flex gap-2' to="/settings" >
                    <img className='w-5' src={settingsSvg} alt="" />
                    <span className='text-sm'> Account </span>
                  </Link>

                  <Link to='/logout' className='px-1 py-2  hover:bg-gray-100 flex gap-2'>
                    <img  onClick={handleLogout} className='w-5' src={logoutSvg} alt="" />
                    <span className='text-sm'> Logout </span>
                  </Link>



                </div>


              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}
