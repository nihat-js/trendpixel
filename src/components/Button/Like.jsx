import React, { useState } from 'react'
import { client } from '../../consts'

export default function LikeButton({isLiked , postID}) {

  const [status,setStatus] = useState(props.isLiked)
  const [isLoading,setLoading] = useState(false)


  function handleClick(){
    client.post('/like',{
      postID : postID
    })
  }

  const likeBtn = (
    <button disabled={isLoading} 
    class="bg-gray-200 hover:bg-pink-500 text-gray-600 hover:text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
      <span>Like</span>
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  )

  const unlikeBtn = (
    <button disabled={isLoading}
      class="bg-pink-500 hover:bg-gray-200 text-white hover:text-gray-600 font-bold py-2 px-4 rounded-full inline-flex items-center">
      <span>Liked</span>
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </button>

  )


  return (status ===  )

}
