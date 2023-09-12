import React, {useState} from 'react'
import {client} from "../../consts/index"
import {Avatar} from "../Avatar/index.jsx";

export function AddPost() {

  const [formData, setFormData] = useState({
    imageUrl: '',
    caption: '',
    extraData : 'extraa'
  })

  function submitNewPost(e) {
    e.preventDefault()
    console.log(formData)
    client.post('/post', formData).then(res => {
      console.log(res)
      if (res.data.status === "success"){
        setFormData({
          imageUrl: '',
          caption: ''
        })
      }
    })
  }

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className='shadow-md  py-5 px-2 '>
      <form onSubmit={submitNewPost} className="flex gap-3">
        <Avatar width="40"/>
        <div>
          <input onChange={handleInputChange} value={formData.imageUrl} name="imageUrl"
                 className=' w-full border bg-gray-100 py-2 px-2 outline-none focus:border focus:border-blue-800 rounded-md '
                 type="text" placeholder='Image URL'/>
          <textarea onChange={handleInputChange} value={formData.caption} name="caption"
                 className=' w-full border mt-2 bg-gray-100 resize-none py-3 px-2 outline-none focus:border focus:border-blue-800 rounded-md  mb-2'
                  placeholder='Caption for post (optional)'/>

          <button className='py-3 px-2  text-white bg-purple-700 mt-3'> Submit</button>
        </div>
      </form>
    </div>
  )
}
