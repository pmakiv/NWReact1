import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, {useState, useEffect} from 'react'
import './App.css'

const Posts = () => {

const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)

useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/posts/')
.then(res => res.json())
.then(oliot => setPosts(oliot))
}, []
)
  return (
    <>
     <h2 onClick={() => setShowPosts(!showPosts)}>Posts from typicode</h2>

     {
      showPosts && posts && posts.map(p =>
        <div className="posts" key={p.id}>
          <h3><b>Käyttäjä-ID: {p.id}</b></h3>
           <h3><u><b>{p.title}</b></u></h3>
           <h5>{p.body}</h5>

          </div> 
      )
     }

    </>
  )
}

export default Posts
