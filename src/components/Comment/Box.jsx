import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import defaultAvatar from "../../assets/default-avatar.svg"
import {Avatar} from "../User/Avatar.jsx";
import trashBinSvg from "../../assets/trash-bin.svg"
import {client} from "../../consts/index.js";
import toast from "react-hot-toast";
export function CommentBox({commentsList,setCommentsList,authorUsername, commentId, text}) {

	const user = useSelector(state => state.user)
	const [isHovering,setHover] = useState(false)
	async function handleDelete(){
		let bool =  confirm("Are you sure you wanna delete this comment?")
		if (!bool) return false

		let res = await client.delete('post/comment?commentId='+commentId)
		if (res?.data?.status === "success"){
			toast.success('Deleted successfully')
			setCommentsList(commentsList.filter(el => el.commentId !== commentId ))
		}
	}

	return (
		<div
		onMouseEnter={()=>setHover(true)}
		onMouseLeave={()=>setHover(false)}
			className='flex  justify-between gap-3 bg-slate-50 mb-2 py-3 px-2 rounded-lg'>
			<div className="left flex items-center ">
				<Avatar username={authorUsername}/>
				<p className="  ml-2 mr-2 font-semibold" > {authorUsername} </p>
				<p className="text-stone-900"> {text} </p>
			</div>
			<div className="right 	actions">
				{user.username === authorUsername && isHovering &&
					<img onClick={handleDelete} src={trashBinSvg} className="w-5 h-5 p-1  rounded-full hover:bg-red-400"   alt="delete" />
			}
			</div>
		</div>
	)
}
