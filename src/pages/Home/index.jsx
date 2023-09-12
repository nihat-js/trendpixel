import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav'
import { AddPost } from "../../components/Post/Add"
import {SuggestionList} from "../../components/Suggestion/List"
import {client} from "../../consts/index.js";
import {PostBox} from "../../components/Post/Box.jsx";



export function HomePage() {

    const [posts  ,setPosts] = useState([])

  function getFeed(){
      client.get('/user/feed')
        .then(res=>{
          setPosts(res.data.data)

          console.log(res)
        })
  }

  useEffect(()=>{
    getFeed()
  },[])

  return (

    <div className="home-page flex gap-5 mt-3">
        <div className="w-8/12">
         <AddPost />
          {
            posts.map((el, index) => <PostBox key={index} {...el} />
            )
          }
        </div>
        <div className="w-4/12">
         <SuggestionList  />
      </div>



    </div>
  )
}



