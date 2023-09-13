import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav'
import {AddPost} from "../../components/Post/Add"
import {SideUserList} from "../../components/SideUserList/"
import {client} from "../../consts/index.js";
import {PostBox} from "../../components/Post/Box.jsx";
import {useSelector} from "react-redux";


export function HomePage() {
  const me = useSelector(state => state.user)
  console.log({me})
  const [posts, setPosts] = useState([])
  const [myData, setMyData] = useState({
    subscriptions: [],
    subscribers: []
  })

  async function getFeed() {
    client.get('user/feed')
      .then(res => {
        setPosts(res.data.data)
        console.log(res.data)
      })
  }

  async function getMyData() {
    // console.log('my username is', me)
    client.get('user?username=' + me.username )
      .then(res => {
        console.log("problem is" ,res.data.data)
        setMyData(res.data.data)
      })
  }


  useEffect(() => {
     getFeed()
    getMyData()
  }, [])

  return (

    <div className="home-page flex gap-5 mt-3">
      <div className="w-8/12">
        <AddPost/>
        {
          posts.map((el, index) => <PostBox key={index} {...el} />
          )
        }
      </div>
      <div className="w-4/12">
        <SideUserList title="Recently subscribed page" list={myData.subscriptions} areAllSubscribed={true}/>
      </div>


    </div>
  )
}



