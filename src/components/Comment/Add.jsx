import React, {useState} from 'react'
import sendSvg from "../../assets/send.svg"
import {client} from '../../consts'
import loadingSvg from "../../assets/loading.svg"
import {useSelector} from "react-redux"

export default function AddComment({postId,  commentsList, setCommentsList}) {

	const [text, setText] = useState('')
	const [loading, setLoading] = useState(false)
	const user = useSelector(state => state.user)

	function handleSend() {
		if (loading) return false

		setLoading(true)

		client.post('post/comment', {postId, text})
			.then(res => {
				if (res?.data?.status === 'success') {
				}
			})
			.catch(err => {
				console.log('ERROR SENDING COMMENT')
			})
			.finally(() => {
				setCommentsList([  {authorUsername: user.username, text}] , ...commentsList)
				setText('')
				setLoading(false)
			})
	}


	return (
		<div className='flex justify-between my-2'>
			<input
				className="w-full py-2 px-3 shadow-sm  border rounded-md  text-gray-700 outline-0 focus:border-sky-600 focus:border-2 leading-tight  "
				type="text"
				value={text}
						 onChange={(e) => setText(e.target.value)} placeholder='Add a comment'/>
			<button onClick={handleSend}>
				<img className={`w-6  ${loading && 'loading-animation'} `} src={loading ? loadingSvg : sendSvg} alt=""/>
			</button>
		</div>
	)
}
