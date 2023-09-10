import React from 'react'

export function FollowButton() {

  let [isSubscribed, setSubscribed] = useState(status)  // subscribed =1 , not subscribed = 0
  let [isLoading, setLoading] = useState(false)

  function handleClick() {
    setLoading(true)
    client.post('/subscription', {
      username,
    }).then(res => {
      console.log(res)
      setSubscribed(!isSubscribed)
      setLoading(false)
    })

  }


  const subscribeButton = (<button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
    onClick={handleClick}>
    <span>Subscribe</span>
    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
  </button>)

  const unsubsribeButton = (<button
    onClick={handleClick}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    disabled={isLoading}
    class="bg-green-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
    <span>{isHovering ? "Unsubscribe" : "Subscribed"} </span>
    {/* <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> */}
  </button>)



  return isSubscribed ? subscribeButton : unsubsribeButton
}
