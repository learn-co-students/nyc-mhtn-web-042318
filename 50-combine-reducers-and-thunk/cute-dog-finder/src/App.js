import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import AnimalPicture from './AnimalPicture';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimalPicture />
        <AddUserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
