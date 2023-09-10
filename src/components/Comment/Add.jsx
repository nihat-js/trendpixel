import React, { useState } from 'react'
import sendSvg  from "../../assets/send.svg"
export default function AddComment() {

  const [text, setText] = useState('')

  function handleSend(){

  }



  return (
    <div className='flex justify-between'>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Add a comment' />
      <button onClick={handleSend}>
        <img className='w-4' src={sendSvg} alt="" />
      </button>
    </div>
  )
}
