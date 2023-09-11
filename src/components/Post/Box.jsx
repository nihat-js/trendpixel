import React, {useState} from 'react'
import {LikeButton} from '../Button/Like'
import {useSelector, useDispatch} from 'react-redux'
import AddComment from '../Comment/Add'
import {CommentBox} from "../Comment/Box"
import defaultAvatar from "../../assets/default-avatar.svg"
import {dateConvertor} from "../../utils/dateConvertor.jsx";
import commentsSvg from "../../assets/comments.svg"
import {Avatar} from "../Avatar/index.jsx";

export function PostBox({postId, authorUsername, imageUrl, caption, comments, likes, timestamp, status}) {

	const user = useSelector(state => state.user)

	const [likesCount, setLikesCount] = useState(likes.length)
	const [commentsList, setCommentsList] = useState(comments)
	const [showAllComments, setShowAllComments] = useState(false)
	let isLiked = likes.findIndex((el) => el.authorUsername === user.username) > -1

	let convertedDate = dateConvertor(timestamp * 1000)

	return (
		<main className="mb-4 py-3 px-2 rounded-lg shadow-sm">
			<div className="user flex items-center mb-4">
				<div className="flex-shrink-0">
					<Avatar username={authorUsername} alt={"author's avatar"} width={32} />
				</div>
				<div className="ml-3">
					<span className="font-semibold text-gray-800">{authorUsername}</span>
					<p className="text-gray-600 text-sm">Posted at {convertedDate} </p>
				</div>
			</div>
			<p className="text-gray-600 mb-4"> {caption} </p>

			<img className="w-full   mb-4" src={imageUrl} alt="Post Image"/>
			<div className="actions flex gap-3">
				<LikeButton isLiked={isLiked} likesCount={likesCount} setLikesCount={setLikesCount} postId={postId}/>
				<div className="p-2 rounded-md hover:bg-slate-100 flex gap-2 cursor-default">
					<img className="w-4" src={commentsSvg} alt="comments"/>
					<span className="text-sm text-gray-500"> {commentsList.length} Comments </span>
				</div>
			</div>


			<div className="comments mt-4">
				<AddComment   postId={postId}  commentsList={commentsList} setCommentsList={setCommentsList} />

				{
					!showAllComments   && commentsList.length >=1 &&   <CommentBox {...commentsList[0]} />
				}
				{
					!showAllComments  && commentsList.length >1 && <p
						className="mt-3 text-gray-400 text-sm cursor-pointer"
						onClick={()=>setShowAllComments(true)}> Load more... </p>
				}
				{
					showAllComments && commentsList.map((el,index)=> <CommentBox {...el} /> )
				}
				{
					showAllComments  && <p
					onClick={()=>setShowAllComments(false)}
					className="mt-3 text-gray-400  text-sm cursor-pointer"
					>Show less</p>
				}




			</div>


		</main>


	)
}
