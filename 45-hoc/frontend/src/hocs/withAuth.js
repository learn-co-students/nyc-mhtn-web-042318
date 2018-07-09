import React from 'react';
import { Redirect } from 'react-router-dom';
import Adapter from '../components/Adapter';

function withAuth(WrappedComponent, path) {
  return class extends React.Component {
    render() {
      console.log('withAuth', this.props);
      console.log('path', path);

      if (Adapter.isLoggedIn()) {
        return <Redirect to={path} />
      } else {
        // login or registration
        return <WrappedComponent {...this.props} />
      }

    }
  }
}

export default withAuth;
