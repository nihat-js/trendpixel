import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {client} from '../../consts'
import {PostBox} from '../../components/Post/Box'
import Nav from '../../components/Nav/index'
import {Avatar} from "../../components/Avatar/index.jsx";
import {SubscribeButton} from "../../components/Button/Subscribe.jsx";
import {useSelector} from "react-redux";

export function UserPage() {

  let {username} = useParams()
  const me = useSelector(state => state.user)
  const [posts, setPosts] = useState([])
  let [loading, setLoading] = useState(false)
  let [isSubscribed, setSubscribed] = useState(false)

  useEffect(() => {
    client.get('user?username=' + username).then(res => {
      setPosts(res.data.data.posts)
      let bool = res.data.data.subscribers.findIndex(el => el.username === me.username) > -1
      setSubscribed(bool)
    })

  }, [])

  const detailsChildrenClass = "py-2 px-3 text-white bg-blue-600 rounded-md hover:bg-blue-800"

  return (
    <div className="user-page my-2">


      <div className="details flex flex-col items-center">
        <Avatar width={100} username={username}/>
        <p className="username text-lg font-semibold"> @{username} </p>
        <div className="actions flex gap-2 my-3">
          <SubscribeButton username={username} isSubscribed={isSubscribed}/>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Message
          </button>

        </div>
        <div className="stats flex gap-2">
          <p className={detailsChildrenClass}> {posts.length} Posts </p>
          <p className={detailsChildrenClass}> {posts.length} Subscriber </p>
          <p className={detailsChildrenClass}> {posts.length} Subscription </p>
        </div>
      </div>


      {
        posts.map((el, index) => <PostBox key={index} {...el} />
        )
      }
    </div>
  )
}

``