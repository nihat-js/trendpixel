import React, { useEffect, useState } from 'react'
import { SubscribeButton } from "../Button/Subscribe.jsx";
import { Avatar } from "../User/Avatar.jsx";
import { client } from '../../consts/index.js';
import { useSelector } from 'react-redux';

export function SideUserList({ title, subtitle, list = [], areAllSubscribed, setList }) {

  return (
    <div className='shadow-md border border-slate-100 rounded-md py-2 px-3'>
      <h4 className="font-semibold text-lg mb-4"> {title} </h4>
      <p> {subtitle} </p>
      {list.map((el, key) => <Box key={key} {...el} />)
      }
    </div >
  )
}




function Box({ username }) {
  const [isSubscribed, setSubscribed] = useState()
  const [isLoading, setLoading] = useState(true)
  const me = useSelector(state => state.user)
  
  async function checkStatus() {
    if (!me.username) return false
    // console.log('me',me)
    let res = await client.get('user?username=' + username)
    if (res?.data.status !== "success") return false
    let bool = res.data.data.subscribers.some(el => el.username == me.username)
    // console.log('sidelistbox','bool',bool, "me", me,res.data)
    setSubscribed(bool)
    setLoading(false)
  }


  useEffect(() => {
    checkStatus()
  }, [me])

  return (

    <div className="shadow-md border border-slate-200 rounded-md mb-4 flex justify-between items-center py-2 px-3">
      <div className="info flex gap-2">
        <Avatar />
        <h3> {username} </h3>
      </div>
      <div className="actions">
        <SubscribeButton username={username} isSubscribed={isSubscribed} isLoading={isLoading} />
      </div>
    </div>
  )
}
