import React, { Component } from 'react';

class StudentDetails extends Component {

  handleChange = (event) => {
    this.props.handleChange(event.target.value, this.props.student.name)
  }

  renderOptions = () => {
    return this.props.stations.map( (station) => {
      if(station.value == this.props.student.station){
        return <option selected value={station.value}>{station.name}</option>
      } else {
        return <option value={station.value}>{station.name}</option>
      }
    })
  }


  render(){
    let student = this.props.student
    return(
      <div className="details" style={student.style}>
        <img className="profilePic" src={student.imageURL} />
        <div>
        <ul>
          <li> Name: {student.name} </li>
          <li> Age: {student.age} </li>
          <li> Gender: {student.gender}</li>
          <li>
            <select onChange={this.handleChange}>
              {this.renderOptions()}
            </select>
          </li>
        </ul>
        <h4> {student.motto} </h4>
        </div>
      </div>
    )
  }
}

export default StudentDetails
