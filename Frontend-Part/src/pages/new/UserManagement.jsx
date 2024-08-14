import React, { useState } from 'react';
import './UserManagement.css'; // Import the CSS file

const UserManagement = () => {
  // Initial state for users
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Nani',
      email: 'Nani@gmail.com',
      status: 'pending', // New field to track user status
    },
    {
      id: 2,
      username: 'jalal',
      email: 'jalal@gmail.com',
      status: 'pending', // New field to track user status
    },
    {
      id: 3,
      username: 'Pranavi',
      email: 'pranavi@gmail.com',
      status: 'pending', // New field to track user status
    },
  ]);

  const [newUser, setNewUser] = useState({ username: '', email: '' });

  const addUser = () => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        username: newUser.username,
        email: newUser.email,
        status: 'pending',
      },
    ]);
    setNewUser({ username: '', email: '' });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const acceptUser = (id) => {
    setUsers(users.map((user) => user.id === id ? { ...user, status: 'accepted' } : user));
  };

  const rejectUser = (id) => {
    setUsers(users.map((user) => user.id === id ? { ...user, status: 'rejected' } : user));
  };

  return (
   <>
   <span id="manageusers"></span>
    <div className="user-management">
      <h1>User Management</h1>
      
      <section>
        <h2>Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <strong>Username:</strong> {user.username}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Status:</strong> {user.status}<br />
              <button onClick={() => acceptUser(user.id)} disabled={user.status !== 'pending'}>Accept</button>
              <button onClick={() => rejectUser(user.id)} disabled={user.status !== 'pending'}>Reject</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Add User</h3>
        <div className="add-user">
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button onClick={addUser}>Add User</button>
        </div>
      </section>
    </div>
    </>
  );
};

export default UserManagement;