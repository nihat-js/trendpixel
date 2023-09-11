import React from 'react'
import {useSelector} from 'react-redux'
import defaultAvatar from "../../assets/default-avatar.svg"
import {Avatar} from "../Avatar/index.jsx";

export function CommentBox({authorUsername, commentId, text}) {

	const user = useSelector(state => state.user)

	return (
		<div className='flex  justify-between gap-3 bg-slate-100 mb-2 py-3 px-2 rounded-lg'>
			<div className="left flex items-center ">
				<Avatar username={authorUsername}/>
				<p className="  ml-2 mr-2 font-semibold" > {authorUsername} </p>
				<p className="text-stone-900"> {text} </p>
			</div>
			<div className="right 	actions">
				{user.username == authorUsername && <button> Delete </button>}
			</div>
		</div>
	)
}
