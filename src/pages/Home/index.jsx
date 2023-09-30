import React, { useEffect, useMemo, useState } from 'react'
import Nav from '../../components/Nav'
import { AddPost } from "../../components/Post/Add"
import { SideUserList } from "../../components/SideUserList/"
import { client } from "../../consts/index.js";
import { PostBox } from "../../components/Post/Box.jsx";
import { useSelector } from "react-redux";


export function HomePage() {
  const me = useSelector(state => state.user)

  const [posts, setPosts] = useState([])

  async function getFeed() {
    client.get('user/feed')
      .then(res => {
        setPosts(res.data.data)
        // console.log(res.data)
      })
  }


  const sideListData = useMemo(() => {
    return [
      {
        username: "ferhad",
      },
      {
        username: "cosqun"
      },
      {
        username: "nihatt"
      },
      {
        username : "alemdar"
      },
    ].filter(el => el.username != me.username)
  }, [me])


  useEffect(() => {
    getFeed()
  }, [])

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
        {/* <SideUserList title="Recently subscribed page" list={myData.subscriptions} areAllSubscribed={true}/> */}
        <SideUserList title="Recent users list" subtitle="Find new friends" list={sideListData} />
      </div>


    </div>
  )
}



