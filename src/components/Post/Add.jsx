import React, {useState} from 'react'
import {client} from "../../consts/index"
import {Avatar} from "../User/Avatar.jsx";
import {useSelector} from "react-redux";
import toast from "react-hot-toast";

export function AddPost() {

  const [formData, setFormData] = useState({
    imageUrl: '',
    caption: '',
    extraData: 'extraa' //testing
  })

  const me = useSelector(state => state.user)

  function submitNewPost(e) {
    e.preventDefault()
    if (!formData.imageUrl) {
      toast.error('Image URL is required')
      return false
    }
    client.post('/post', formData)
      .then(res => {
        console.log(res)
        if (res.data.status === "success") {
          setFormData({imageUrl: "", caption: ""})
          toast.success('Posted successfully',)
        } else {
          toast.error('Oops something went wrong')
        }
      })
  }

  function handleInputChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className='shadow-md  py-5 px-2 '>
      <form onSubmit={submitNewPost} className="flex gap-3">
        <Avatar width="32"/>
        <div className="w-full">
          <p className="mb-3 font-bold text-lg">  {me.username} </p>
          <input onChange={handleInputChange} value={formData.imageUrl} name="imageUrl"
                 className=' w-full border bg-gray-100 py-2 px-2 outline-none focus:border focus:border-blue-800 rounded-md '
                 type="text" placeholder='Image URL'/>
          <textarea onChange={handleInputChange} value={formData.caption} name="caption"
                    className='w-full border mt-2 bg-gray-100 resize-none py-3 px-2 outline-none focus:border focus:border-blue-800 rounded-md  mb-2'
                    placeholder='Caption for post (optional)'/>

          <button className='py-3 px-2  text-white bg-purple-700 mt-3'> Submit</button>
        </div>
      </form>
    </div>
  )
}
