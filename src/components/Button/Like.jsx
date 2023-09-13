import React, {useEffect, useState} from 'react'
import {client} from '../../consts'
import likeSvg from '../../assets/like.svg'
import likeFilledSvg from '../../assets/like-filled.svg'
import {useSelector} from "react-redux";
import Heart from "react-animated-heart";
import './Like.scss'
export function LikeButton({isLiked,setLiked, postId, likesCount, setLikesCount}) {

	const [count, setCount] = useState(likesCount)
	const [isLoading, setLoading] = useState(false)

	// const [isHovering,setHovering] = useState(false)


	async function handleClick() {
		if (isLoading) return false
		setLoading(true)
		try {
			let res
			res = isLiked ? await client.delete('/post/like?postId=' + postId) : await client.post('post/like', {postId})
			if (res.data.status == "success") {
				isLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1)
				setLiked(!isLiked)
			} else {
				throw new Error('Error when processing...')
			}
		} catch (e) {
			console.log('LIKE POST ERROR', e)
		}
		setLoading(false)


	}

	let likesCountSpan
	if (likesCount === 0){
		likesCountSpan = 0
	}else if (likesCount === 1){
		likesCountSpan = "1 like"
	}else{
		likesCountSpan = likesCount + " likes"
	}

	return (<div
			onClick={handleClick}
			disabled={isLoading}
			className='inline-flex rounded-md p-2 gap-2 hover:bg-slate-100'
		>
			<img  className='w-4 h-4' alt='' src= {isLiked ? likeFilledSvg : likeSvg}/>
			{/*<div className="stage">*/}
			{/*	<div className={`heart  ${isLiked && 'is-active'} `} onClick={handleClick}></div>*/}
			{/*</div>*/}

			{/*<Heart   styles={[{'width' : "4px"}]}	  isClick={isLiked} onClick={handleClick} />*/}

			<span className="text-sm text-gray-500"> {likesCountSpan}  </span>
		</div>
	)
}
