import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    students: [
        {
          name: "Joe",
          age: 28,
          gender: "male",
          motto: "I am serious. And dont call me Shirley.",
          style: {
            backgroundImage: "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
          }
        },
        {
          name: "Marty",
          age: 32,
          gender: "male",
          motto: "Inconveivable!",
          style: {
            backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
          }
        },
        {
          name: "Sue",
          age: 28,
          gender: "male",
          motto: "Its naht a toomah!",
          style: {
            backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          }
        },
        {
          name: "Carol",
          age: 28,
          gender: "male",
          motto: "You keep using that word. I do not think it means what you think it means.",
          style: {
            backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
          }
        },
    ],

  }


  render() {
    return (
      <div className="App">

        <div className="details">
          <img style={{width: "150px", height: "150px", margin: "10px"}} src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
          <div>
          <ul style={{listStyleType: "none"}}>
            <li> Name: Jon </li>
            <li> Age: 28 </li>
            <li> Gender: Male </li>
            <li>
              <select>
                <option value="admissions">Admissions</option>
                <option value="mod-1">Mod 1</option>
                <option value="mod-2">Mod 2</option>
                <option value="mod-3">Mod 3</option>
                <option value="mod-4">Mod 4</option>
                <option value="mod-5">Mod 5</option>
              </select>
            </li>
          </ul>
          <h4> "I'm here to kick ass and chew bubble gum....and I'm all out of bubble gum." </h4>
          </div>
        </div>



        <div className="school" style={{margin: "10px"}}>

          <div className="admissions station">
            <div className="student">YO</div>
            <div className="student">YO</div>
            <div className="student">YO</div>
            <div className="student">YO</div>
          </div>

          <div className="mods station">
            <div className="mod station">
              <div className="student">YO</div>
              <div className="student">YO</div>
              <div className="student">YO</div>
              <div className="student">YO</div>
            </div>
            <div className="mod station">
              Hey
            </div>
            <div className="mod station">
              Hey
            </div>
            <div className="mod station">
              Hey
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
