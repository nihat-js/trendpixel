import React, {useState} from 'react'
import {client} from "../../consts/index.js";
import {useSelector} from "react-redux";

export function SubscribeButton({username,isSubscribed}) {
	let me = useSelector(state => state.user)

	let [status, setStatus] = useState(isSubscribed)
	let [isLoading, setLoading] = useState(false)
	let [isHovering, setHover] = useState(false)
	function handleClick() {
		setLoading(true)
		client.post('/user/subscription', {
			username
		}).then(res => {
			console.log(res)
			if (res?.status === "success") {
				setStatus(!status)
				setLoading(false)
			}
		})

	}


	const subscribeButton = (<button
		className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
		onClick={handleClick}>
		<span>Subscribe</span>
		{/*<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
		{/*		 xmlns="http://www.w3.org/2000/svg">*/}
		{/*	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>*/}
		{/*</svg>*/}
	</button>)

	const unsubscribeButton = (<button
		onClick={handleClick}
		onMouseEnter={() => setHover(true)}
		onMouseLeave={() => setHover(false)}
		disabled={isLoading}
		className="bg-green-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
		<span>{isHovering ? "Unsubscribe" : "Subscribed"} </span>
		<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				 xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
		</svg>
	</button>)


	return status ? unsubscribeButton : subscribeButton
}
