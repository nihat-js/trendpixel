import React, {useState} from 'react'
import {client} from '../../consts'
import likeSvg from '../../assets/like.svg'
import likeFilledSvg from '../../assets/like-filled.svg'
import {useSelector} from "react-redux";

export function LikeButton({isLiked, postId, likesCount, setLikesCount}) {

	const [status, setStatus] = useState(isLiked)
	const [count, setCount] = useState(likesCount)
	const [isLoading, setLoading] = useState(false)

	// const [isHovering,setHovering] = useState(false)

	async function handleClick() {
		if (isLoading) return false
		setLoading(true)
		try {
			let res
			res = status ? await client.delete('/post/like?postId=' + postId) : await client.post('post/like', {postId})
			if (res.data.status == "success") {
				status ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1)
				setStatus(!status)
			} else {
				throw new Error('Error when processing...')
			}
		} catch (e) {
			console.log('LIKE POST ERROR', e)
		}
		setLoading(false)


	}

	let likesCountSpan
	if (likesCount == 0){
		likesCountSpan = 0
	}else if (likesCount == 1){
		likesCountSpan = "1 like"
	}else{
		likesCountSpan = likesCount + "likes"
	}

	return (<div
			onClick={handleClick}
			disabled={isLoading}
			className='inline-flex rounded-md p-2 gap-2 hover:bg-slate-100'
		>
			<img className='w-4' src={status ? likeFilledSvg : likeSvg}/>
			<span className="text-sm text-gray-500"> {likesCountSpan}  </span>
		</div>
	)
}
