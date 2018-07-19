import React from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
  return (
    <ul>
      {props.users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

function mapStateToProps(state) {
  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps)(UserList);
