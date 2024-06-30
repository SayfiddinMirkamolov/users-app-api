import React, { useState } from 'react';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container">
      <h1 className="my-4">User App</h1>
      <div className="row">
        <div className="col-4">
          <Users onSelectUser={setSelectedUser} />
        </div>
        <div className="col-8">
          <UserDetails userId={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
