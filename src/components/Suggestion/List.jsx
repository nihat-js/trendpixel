import React, {useEffect, useState} from 'react'
import UserBox from './UserBox'
import {client} from "../../consts/index.js";

export  function SuggestionList() {

  const [list,setList] = useState([{
    avatar : '',
    username :'nih1t',
    status : false,
  },
  {
    avatar : '',
    username :'nihatttt',
    status : true,
  }
])


  function loadList(){
    client.get('users').then(res=>{
      console.log(res)
    })
  }

  useEffect(()=>{
    loadList()
  },[])

  
  return (
    <div className='shadow-md border border-slate-100 rounded-md py-2 px-3'>
      <h4 className="font-semibold text-lg mb-4"> Suggestion List </h4>
      {list.map( (el,key) => <UserBox key={key} {...el} /> )}
    </div>
  )
}




