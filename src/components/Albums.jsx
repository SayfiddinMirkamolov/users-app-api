import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Albums({ userId }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => {
        setAlbums(response.data);
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
      <h3>Albums</h3>
      <ul className="list-group">
        {albums.map(album => (
          <li key={album.id} className="list-group-item">
            {album.title}
            <img
              src={`https://via.placeholder.com/600/${Math.floor(Math.random() * 1000)}`}
              alt={album.title}
              className="img-thumbnail mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
