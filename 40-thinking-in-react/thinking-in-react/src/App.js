import React, { Component } from 'react';
import StudentDetails from './StudentDetails';
import School from './School';
import Header from './Header';
import './App.css';



class App extends Component {
  state = {
    students: [
        {
          name: "Dutch",
          age: 35,
          gender: "male",
          motto: "Get to the choppa!",
          imageURL: "https://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
          }
        },
        {
          name: "Rambo",
          age: 33,
          gender: "male",
          motto: "They drew first blood!",
          imageURL: "https://mfiles.alphacoders.com/692/692127.jpg",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
          }
        },
        {
          name: "Ripley",
          age: 30,
          gender: "female",
          motto: "Punch it, Bishop!",
          imageURL: "https://upload.wikimedia.org/wikipedia/en/1/17/Ellen_ripley.jpg",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          }
        },
        {
          name: "William",
          age: 28,
          gender: "male",
          motto: "They may take away our lives, but they'll never take our freedom!",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlhYwJlR_CWwWmNians0N6jdPQGJFQWqHbB1nlqjdOmf0_CdO7w",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
          }
        },
        {
          name: "Hawkeye",
          age: 25,
          gender: "male",
          motto: "Someday I think you and I are going to have a serious disagreement.",
          imageURL: "https://resizing.flixster.com/o8Wu5HFZUkAXuC39P5q9bUZUXE0=/300x300/v1.bjs2Mjg2NDQ7ajsxNzczNzsxMjAwOzE5MjA7MTA4MA",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)"
          }
        },
        {
          name: "The Bride",
          age: 31,
          gender: "female",
          motto: "Revenge is never a straight line. It's a forest, And like a forest it's easy to lose your way... To get lost... To forget where you came in.",
          imageURL: "https://sep.yimg.com/ay/yhst-91547409642223/kill-bill-the-bride-cosplay-6.gif",
          station: "admissions",
          style: {
            backgroundImage: "linear-gradient(to right, #243949 0%, #517fa4 100%)"
          }
        },
    ],
    selectedStudent: null,
    stations: [
      {
       name: "Admissions",
       value: "admissions"
      },
      {
       name: "Mod 1",
       value: "mod-1"
      },
      {
       name: "Mod 2",
       value: "mod-2"
      },
      {
       name: "Mod 3",
       value: "mod-3"
      },
      {
       name: "Mod 4",
       value: "mod-4"
      },
      {
       name: "Mod 5",
       value: "mod-5"
      },
    ]
  }

  handleChange = (newStation, name) => {
    let students = this.state.students.map( (student) => {
      if(student.name == name){
        student.station = newStation
        return student
      } else {
        return student
      }
    })

    this.setState({
      students
    })
  }

  handleClick = (name) => {
    let student = this.state.students.find( student => student.name == name)

    this.setState({
      selectedStudent: student
    })
  }

  renderHeader = () => {
    if(this.state.selectedStudent){
      return <StudentDetails student={this.state.selectedStudent} handleChange={this.handleChange} stations={this.state.stations}/>
    } else {
      return <Header />
    }
  }


  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        <School students={this.state.students} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
