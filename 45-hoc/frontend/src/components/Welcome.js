import React from 'react';

const Welcome = (props) => {
  console.log('Welcome', props);
  
  return (
    <div className="welcome">
      <h1>Welcome to Snack World!</h1>
    </div>
  )
}

export default Welcome;
