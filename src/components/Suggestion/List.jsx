import React, { useState } from 'react'
import UserBox from './UserBox'

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

  }

  
  return (
    <div className='shadow-md border border-slate-100 rounded-md'>
      {list.map( (el,key) => <UserBox key={key} {...el} /> )}
    </div>
  )
}



