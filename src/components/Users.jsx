import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users({ onSelectUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <h1 className="my-4">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li
            key={user.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectUser(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
