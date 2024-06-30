import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts({ userId }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h3>Posts</h3>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
