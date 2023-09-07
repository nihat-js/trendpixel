import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { client } from '../../consts'
import { OnePost } from '../../components/Post/One'
import Nav from '../../components/Nav/index'
export function UserPage() {

  let { username } = useParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.get('user?username=' + username).then(res => {
      setPosts(res.data.data.posts)
      console.log(res.data.data)
    })

  }, [])




  return (
    <div>
      <Nav />
      <div className="container">
        Now current user is {username}
        {
          posts.map((el, index) => <OnePost key={index} {...el} />
          )
        }

      </div>
    </div>
  )
}
``