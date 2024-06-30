import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Todos({ userId }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => {
        setTodos(response.data);
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
      <h3>Todos</h3>
      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            {todo.title} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
