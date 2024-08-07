import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/posts', { content: newPost })
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost('');
      })
      .catch(error => console.error('Error posting new post:', error));
  };

  return (
    <div>
      <h1>Explora</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)} 
          placeholder="What's on your mind?" 
        />
        <button type="submit">Post</button>
      </form>
      <div>
        {posts.map(post => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
