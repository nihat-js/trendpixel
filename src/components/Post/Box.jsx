import React, { useState } from 'react'

export function PostBox({ imageUrl, caption, status }) {
  console.log('c', imageUrl)

  const [isLiked, setLiked] = useState(false)



  const unlikeBtn = (
    <button class="bg-pink-500 hover:bg-gray-200 text-white hover:text-gray-600 font-bold py-2 px-4 rounded-full inline-flex items-center">
      <span>Liked</span>
      <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </button>)


  return (
    <div className='bg-slate-100 py-5 px-3 rounded-md mb-2'>
      <img src={imageUrl} alt="" width={"300px"} />
      <p>  Caption {caption} </p>
      <button> Lie </button>
    </div>
  )
}
