import React from 'react'
import Nav from '../../components/Nav'
import { AddPost } from "../../components/Post/Add"
export function HomePage() {
  return (

    <main>
      <Nav />

      <div className="container">
        <AddPost />
      </div>



    </main>
  )
}



export function Comments() {
  return (
    <div className='comment-component'>

    </div>
  )
}

export function Comment() {
  return (
    <>

    </>
  )
}