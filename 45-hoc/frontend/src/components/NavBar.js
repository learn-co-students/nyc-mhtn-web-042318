import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Adapter from './Adapter';
import LogoutButton from './LogoutButton';

const NavBar = (props) => {
  return (
    <header className="nav">
      <NavLink activeClassName="selected" exact to="/">Home</NavLink>
        { Adapter.isLoggedIn() ?
            <Fragment>
              <LogoutButton />
              <NavLink activeClassName="selected" exact to="/snacks">Snacks</NavLink>
              <NavLink activeClassName="selected" exact to="/my-snacks">My Snacks</NavLink>
            </Fragment>
            /*
            <button onClick={() => {
                Adapter.logout();
                props.history.push("/login");
              }}>Logout</button>
            */
          :
            <Fragment>
              <NavLink activeClassName="selected" exact to="/register">Registration</NavLink>
              <NavLink activeClassName="selected" exact to="/login">Login</NavLink>
            </Fragment>
        }
    </header>
  )
}

export default NavBar;
