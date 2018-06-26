import React from 'react';

const TimeList = (props) => {
  return (
    <ul>
      {props.times.map(time => <li>{time}</li>)}
    </ul>
  )
}

export default TimeList;
