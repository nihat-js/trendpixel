import React, { useState } from 'react'
import {client} from "../../consts/index"
export function AddPost() {

  const [formData,setFormData] = useState({
    imageUrl : '',
    caption : '',
  })

  function submitNewPost(e){
    e.preventDefault()
    console.log(formData)
    client.post('/post',formData).then(res => {
      console.log(res)
    })
  }

  function handleInputChange(e){
    setFormData({...formData , [e.target.name] : e.target.value})
  }

  return (
    <div className='my-3  shadow-md  py-5 px-2 ' style={{maxWidth : '600px'}}>
      <form onSubmit={submitNewPost} >
      <input  onChange={handleInputChange} value={formData.caption} name="caption" className=' w-full border bg-gray-100 py-5 px-2 outline-none focus:border focus:border-blue-800 rounded-full ' type="text" placeholder='Caption for post' />
      <input  onChange={handleInputChange}  value={formData.imageUrl} name="imageUrl" className=' w-full border bg-gray-100 py-5 px-2 outline-none focus:border focus:border-blue-800 rounded-full ' type="text" placeholder='Image URL' />

      <button className='py-3 px-2  text-white bg-purple-700 mt-3'> Submit </button>
      </form>
    </div>
  )
}
