import React from 'react';
import Posts from './Posts';
import Todos from './Todos';
import Albums from './Albums';

function UserDetails({ userId }) {
  if (!userId) return <div>Select a user to see details</div>;

  return (
    <div>
      <h2>User Details</h2>
      <Posts userId={userId} />
      <Todos userId={userId} />
      <Albums userId={userId} />
    </div>
  );
}

export default UserDetails;
