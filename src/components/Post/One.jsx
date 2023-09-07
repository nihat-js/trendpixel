import React from 'react'

export  function OnePost({imageUrl,caption}) {
  console.log('c',imageUrl)
  return (
    <div className='bg-slate-100 py-5 px-3 rounded-md mb-2'>
      <img src={imageUrl} alt="" width={"300px"} />
      <p>  Caption {caption} </p>
    </div>
  )
}
