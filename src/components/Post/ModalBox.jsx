import React, {useState} from 'react'
import {LikeButton} from '../Button/Like'
import {useSelector, useDispatch} from 'react-redux'
import AddComment from '../Comment/Add'
import {CommentBox} from "../Comment/Box"
import defaultAvatar from "../../assets/default-avatar.svg"
import {dateConvertor} from "../../utils/dateConvertor.jsx";
import commentsSvg from "../../assets/comments.svg"
import {Avatar} from "../Avatar/index.jsx";

export function PostModalBox({postId, authorUsername, imageUrl, caption, comments, likes, timestamp}) {

  const user = useSelector(state => state.user)

  const [likesCount, setLikesCount] = useState(likes.length)
  const [commentsList, setCommentsList] = useState(comments)
  const [showAllComments, setShowAllComments] = useState(false)
  let isLiked = likes.findIndex((el) => el.authorUsername === user.username) > -1

  let convertedDate = dateConvertor(timestamp * 1000)

  return (
    <main className="mb-4 py-3 px-2 rounded-lg shadow-sm flex gap-2">
      <section className="left">
        <img  style={{height:"500px"}} className="object-contain   mb-4" src={imageUrl} alt="Post Image"/>
      </section>
      <section className="right">

        <div className="author flex gap-3">
          <Avatar username={authorUsername} alt={"author's avatar"} width={32}/>
          <div>
            <span className="font-semibold text-gray-800">{authorUsername}</span>
            <p className="text-gray-600 text-sm">Posted at {convertedDate} </p>
            <p className="text-gray-600 mb-4"> {caption} </p>
          </div>
        </div>

        <div className="comments mt-4">
          {
            showAllComments && commentsList.map((el, index) => <CommentBox {...el} />)
          }
          <AddComment postId={postId} commentsList={commentsList} setCommentsList={setCommentsList}/>
        </div>

        <div className="actions flex gap-3">
          <LikeButton isLiked={isLiked} likesCount={likesCount} setLikesCount={setLikesCount} postId={postId}/>
          <div className="p-2 rounded-md hover:bg-slate-100 flex gap-2 cursor-default">
            <img className="w-4" src={commentsSvg} alt="comments"/>
            <span className="text-sm text-gray-500"> {commentsList.length} Comments </span>
          </div>
        </div>

        <AddComment/>

      </section>





    </main>


  )
}
