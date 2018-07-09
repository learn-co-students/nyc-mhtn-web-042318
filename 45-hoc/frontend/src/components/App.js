import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';
import Adapter from './Adapter';
import withAuth from '../hocs/withAuth';

class App extends Component {
  render() {
    const AuthedRegistrationForm = withAuth(RegistrationForm, "/");
    const AuthedLoginForm = withAuth(LoginForm, "/my-snacks");

    return (
        <div className="App">
          <NavBar />

          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={(props) => <AuthedRegistrationForm {...props} />} />
          <Route exact path="/login" component={(props) => <AuthedLoginForm {...props} />} />
          {/* Adapter.isLoggedIn() ?
              <Redirect to="/" />
            :
              <Fragment>
                <Route exact path="/register" component={(props) => <AuthedRegistrationForm {...props} />} />
                <Route exact path="/login" component={(props) => <AuthedLoginForm {...props} />} />
              </Fragment>
          */}
          {/* !Adapter.isLoggedIn() && path !== "/login" */}
          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/my-snacks" component={MySnacks} />
        </div>
    );
  }
}

export default App;
