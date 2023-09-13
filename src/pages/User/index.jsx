import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {client} from '../../consts'
import {PostBox} from '../../components/Post/Box'
import Nav from '../../components/Nav/index'
import {Avatar} from "../../components/User/Avatar.jsx";
import {SubscribeButton} from "../../components/Button/Subscribe.jsx";
import {useDispatch, useSelector} from "react-redux";
import likeSvg from "../../assets/like.svg"
import likeFilledSvg from "../../assets/like-filled.svg"
import commentsSvg from "../../assets/comments.svg"
import {setModalData} from "../../store/modalSlice.js";
import {PostModalBox} from "../../components/Post/ModalBox.jsx";
import {GridViewPost} from "../../components/Post/GridView.jsx";

export function UserPage() {

  let {username} = useParams()
  const me = useSelector(state => state.user)

  let [loading, setLoading] = useState(false)

  let [data, setData] = useState({
    posts: [],
    subscribers: []
  })
  let isSubscribed = data?.subscribers?.findIndex(el => el.username === me.username) > -1
  const dispatch = useDispatch()

  async function getData() {
    let res = await client.get('user?username=' + username)
    if (res?.data.status === 'success') {
      setData(res.data.data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const detailsChildrenClass = "py-2 px-3 text-white bg-blue-600 rounded-md hover:bg-blue-800"


  return (
    <div className="user-page my-2">


      <div className="de1tails flex flex-col items-center">
        <Avatar width={100} username={username}/>
        <p className="username text-lg font-semibold"> @{username} </p>
        {
          me.username !== username &&
          <div className="actions flex gap-2 my-3">
            <SubscribeButton username={username} isSubscribed={isSubscribed}/>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Message
            </button>

          </div>

        }
        <div className="stats flex gap-2">
          <p className={detailsChildrenClass}> {data?.posts?.length} Posts </p>
          <p className={detailsChildrenClass}> {data?.subscribers?.length} Subscriber </p>
          <p className={detailsChildrenClass}> {data?.subscriptions?.length} Subscription </p>
        </div>
      </div>


      <div className="grid-posts grid gap-2 my-5 " style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
        {
          data?.posts?.map((el, index) => <GridViewPost posts={data.posts} setPosts={(posts) => setData({...data, posts}) }  key={index} el={el}/>)
        }

      </div>

      {/*{*/}
      {/*  posts.map((el, index) => <PostBox key={index} {...el} />*/}
      {/*  )*/}
      {/*}*/}
    </div>
  )
}

``