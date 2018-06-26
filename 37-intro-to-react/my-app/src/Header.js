import React from 'react';

// Functional Component
// How can we use this color variable to make the background that color?
const Header = (props) => {
  let ourStyle = {
    backgroundColor: props.color
  }

  return (
    <header style={ourStyle}>
      <h1>Recordingh Times</h1>
      <p>{props.value}</p>
    </header>
  )
}

export default Header
