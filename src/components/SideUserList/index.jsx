import React, {useEffect, useState} from 'react'
import {SubscribeButton} from "../Button/Subscribe.jsx";
import {Avatar} from "../User/Avatar.jsx";

export function SideUserList({title, subtitle, list = [],areAllSubscribed,  setList}) {


  return (
    <div className='shadow-md border border-slate-100 rounded-md py-2 px-3'>
      <h4 className="font-semibold text-lg mb-4"> {title} </h4>
      <p> {subtitle} </p>
      {list.map((el, key) =>
        <div key={key} className="shadow-md border border-slate-200 rounded-md mb-4 flex justify-between items-center py-2 px-3">
          <div className="info flex gap-2">
            <Avatar/>
            <h3> {el.username} </h3>
          </div>
          <div className="actions">
            <SubscribeButton isSubscribed={areAllSubscribed}/>
          </div>

        </div>
      )}
    </div>
  )
}




