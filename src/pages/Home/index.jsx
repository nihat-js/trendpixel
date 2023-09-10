import React from 'react'
import Nav from '../../components/Nav'
import { AddPost } from "../../components/Post/Add"
import {SuggestionList} from "../../components/Suggestion/List"
export function HomePage() {
  return (

    <main >
      <Nav />
      <div className="container flex mt-12">
        <div className="w-8/12">
        {/* <AddPost /> */}
        </div>
        <div className="w-4/12">
        {/* <SuggestionList /> */}
        </div>
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