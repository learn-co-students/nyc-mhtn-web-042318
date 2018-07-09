import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';
import Adapter from './Adapter';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />

          <Route exact path="/" component={Welcome} />
          { Adapter.isLoggedIn() ?
              <Redirect to="/" />
            :
              <Fragment>
                <Route exact path="/register" component={(props) => <RegistrationForm {...props} />} />
                <Route exact path="/login" component={(props) => <LoginForm {...props} />} />
              </Fragment>
          }
          {/* !Adapter.isLoggedIn() && path !== "/login" */}
          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/my-snacks" component={MySnacks} />
        </div>
    );
  }
}

export default App;
