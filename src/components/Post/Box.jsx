import React, {useState} from 'react'
import {LikeButton} from '../Button/Like'
import {useSelector, useDispatch} from 'react-redux'
import AddComment from '../Comment/Add'
import {CommentBox} from "../Comment/Box"
import defaultAvatar from "../../assets/default-avatar.svg"
import {dateConvertor} from "../../utils/dateConvertor.jsx";
import commentsSvg from "../../assets/comments.svg"
import {Avatar} from "../User/Avatar.jsx";
import {client} from "../../consts/index.js";

export function PostBox({postId, authorUsername, imageUrl, caption, comments, likes, timestamp, status}) {

  const user = useSelector(state => state.user)
  const theme = useSelector(state => state.theme)
  const [likesCount, setLikesCount] = useState(likes.length)
  const [commentsList, setCommentsList] = useState(comments)
  const [showAllComments, setShowAllComments] = useState(false)
  let [isLiked, setLiked] = useState(likes.findIndex((el) => el.authorUsername === user.username) > -1)

  let convertedDate = dateConvertor(timestamp * 1000)

  async function handleDoubleClick() {
    if (isLiked) {
      return false
    }

    let res = await client.post('post/like', {postId})
    if (res?.data.status === "success") {
      setLikesCount(likesCount + 1)
      setLiked(true)
    }

  }

  return (
    <main className={`mb-4 py-3 px-2 rounded-lg shadow-sm ${theme === 'DARK' && 'bg-slate-800'}`}>
      <div className="user flex items-center mb-4">
        <div className="flex-shrink-0">
          <Avatar username={authorUsername} alt={"author's avatar"} width={32}/>
        </div>
        <div className="ml-3">
          <span className="font-semibold text-gray-800">{authorUsername}</span>
          <p className="text-gray-600 text-sm">Posted at {convertedDate} </p>
        </div>
      </div>
      <p className="text-gray-600 mb-4"> {caption} </p>

      <img onDoubleClick={handleDoubleClick} className="mb-4"
           style={{height: '450px', width: "100%", objectFit: 'cover'}} src={imageUrl} alt="Post Image"/>
      <div className="actions flex gap-3">
        <LikeButton isLiked={isLiked} setLiked={setLiked} likesCount={likesCount} setLikesCount={setLikesCount}
                    postId={postId}/>
        <div className="p-2 rounded-md hover:bg-slate-100 flex gap-2 cursor-default">
          <img className="w-4" src={commentsSvg} alt="comments"/>
          <span className="text-sm text-gray-500"> {commentsList.length} Comments </span>
        </div>
      </div>


      <div className="comments mt-4">
        <AddComment postId={postId} commentsList={commentsList} setCommentsList={setCommentsList}/>

        {
          !showAllComments && commentsList.length >= 1 &&
          <CommentBox commentsList={commentsList} setCommentsList={setCommentsList} {...commentsList[0]} />
        }
        {
          !showAllComments && commentsList.length > 1 && <p
            className="mt-3 text-gray-400 text-sm cursor-pointer"
            onClick={() => setShowAllComments(true)}> Load more... </p>
        }
        {
          showAllComments && commentsList.map((el, index) => <CommentBox commentsList={commentsList}
                                                                         setCommentsList={setCommentsList} {...el} />)
        }
        {
          showAllComments && <p
            onClick={() => setShowAllComments(false)}
            className="mt-3 text-gray-400  text-sm cursor-pointer"
          >Show less</p>
        }


      </div>


    </main>


  )
}
