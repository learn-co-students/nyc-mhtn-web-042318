import React, { Component } from 'react';
import Student from './Student';



class Station extends Component {

  renderStudents = () => {
    let students = this.props.students.filter( student  => student.station == this.props.value)
    return students.map( (student) => <Student name={student.name} imageURL={student.imageURL} handleClick={this.props.handleClick} />)
  }


  render(){
    let students = this.props.students
    return(
      <div className="admissions">

        <h3>{this.props.name}</h3>

        <div className="station">
          {this.renderStudents()}
        </div>
      </div>
    )
  }
}

export default Station
