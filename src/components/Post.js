import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
};

export default Post;
