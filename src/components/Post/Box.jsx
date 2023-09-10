import React, { useState } from 'react'
import { LikeButton } from '../Button/Like'
import { useSelector, useDispatch } from 'react-redux'
import AddComment from '../Comment/Add'
export function PostBox({ postId, authorUsername, imageUrl, caption, comments, likes, timestamp, status }) {

  const user = useSelector(state => state.user)

  const [likesCount,setLikesCount] = useState(likes.length)
  const [commentsCount,setCommentsCount] = useState(comments.length)

  let date = new Date(timestamp)
  let isLiked = likes.findIndex((el) => el.authorUsername == user.username) > -1


  return (
    <div className='bg-slate-100 py-5 px-3 rounded-md mb-2'>
      <p>  @{authorUsername}  </p>
      <img src={imageUrl} alt="" width={"300px"} />
      <p>  Caption {caption} </p>
      {/* <p> Posted at  {date} </p> */}
      <LikeButton isLiked={isLiked} likesCount={likesCount} setLikesCount={setLikesCount} postId={postId} />
      <div className="comments">
        <AddComment   />
        <div className="comment">
        </div>
      </div>
    </div>
  )
}
