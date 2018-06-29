import React, { Component } from 'react';


const Student = (props) => (
  <div className="student" onClick={()=>{props.handleClick(props.name)}}>
    <img src={props.imageURL} className="thumbPic"  />
    {props.name}
  </div>
)

export default Student
