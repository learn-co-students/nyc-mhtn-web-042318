import React from 'react';
import Adapter from './Adapter';

const LogoutButton = ({ to = "/login", history }) => (
  <button
    className="logout-button"
    onClick={() => {
      Adapter.logout();
      history.push(to);
    }}
  >
    Logout
  </button>
)

export default LogoutButton;
