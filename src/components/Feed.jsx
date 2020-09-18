import React, { useState, useEffect } from 'react'
import './Feed.scss'
import Stories from './Stories'
import PostSender from './PostSender'
import Post from './Post'
import { db } from '../firebase'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))))
  }, [])

  console.log(posts)
  return (
    <div className='feed'>
      <Stories />
      <PostSender />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profileImage={post.data.profileImage}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  )
}
