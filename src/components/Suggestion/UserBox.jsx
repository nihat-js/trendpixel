import { useState } from "react"
import { client } from "../../consts";
import { SubscribeButton} from "../Button/Subscribe.jsx";

export default function UserBox({ avatar, username, status }) {


  const [isHovering, setHover] = useState(false); // for getting state of unsubsribe button





  return (
    <div className="shadow-md border border-slate-200 rounded-md mb-4 flex justify-between">
      <div className="info">
        <img src={avatar} className='w-6' />
        <h3> {username} </h3>
      </div>
      <div className="actions">
        <SubscribeButton isSubscribed={false} />
      </div>

    </div>
  )
}