import React, {useState} from 'react'
import {LikeButton} from '../Button/Like'
import {useSelector, useDispatch} from 'react-redux'
import AddComment from '../Comment/Add'
import {CommentBox} from "../Comment/Box"
import defaultAvatar from "../../assets/default-avatar.svg"
import {dateConvertor} from "../../utils/dateConvertor.jsx";
import commentsSvg from "../../assets/comments.svg"
import {Avatar} from "../User/Avatar.jsx";

export function PostModalBox({postId, authorUsername, imageUrl, caption, comments, likes, timestamp}) {

  const user = useSelector(state => state.user)

  const [likesCount, setLikesCount] = useState(likes.length)
  const [commentsList, setCommentsList] = useState(comments)
  const [showAllComments, setShowAllComments] = useState(false)
  let isLiked = likes.findIndex((el) => el.authorUsername === user.username) > -1

  let convertedDate = dateConvertor(timestamp * 1000)

  return (
    <main className="mb-4 rounded-lg shadow-sm flex " style={{height:'80vh' , width:'76vw'}} >
      <section className="left" style={{width : "80%"}} >
        <img  style={{height:"100%" , width : "100%", objectFit : "cover"}} className="" src={imageUrl} alt="Post Image"/>
      </section>
      <section className="right" style={{width : "20%"}}>

        <div className="author flex gap-3">
          <Avatar username={authorUsername} alt={"author's avatar"} width={32}/>
          <div>
            <span className="font-bold text-lg text-gray-800">{authorUsername}</span>
            <span className="ml-2 text-gray-600 text-sm">{convertedDate} </span>
            <p className=" mt-3 mb-4"> {caption} </p>
          </div>
        </div>

        <div className="comments mt-4 overflow-y-auto  h-1/2 ">
          {commentsList.length > 0  && <h3 className="font-bold ml-2 text-2lg "> Comments </h3>}
          {
             commentsList.map((el, index) => <CommentBox {...el} />)
          }
        </div>

        <div className="actions flex gap-3">
          <LikeButton isLiked={isLiked} likesCount={likesCount} setLikesCount={setLikesCount} postId={postId}/>
          <div className="p-2 rounded-md hover:bg-slate-100 flex gap-2 cursor-default">
            <img className="w-4" src={commentsSvg} alt="comments"/>
            <span className="text-sm text-gray-500"> {commentsList.length} Comments </span>
          </div>
        </div>

        <AddComment commentsList={commentsList} setCommentsList={setCommentsList} />

      </section>





    </main>


  )
}
