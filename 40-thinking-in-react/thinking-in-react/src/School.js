import React, { Component } from 'react';
import Station from './Station'

class School extends Component {



  render(){
    return(
      <div className="school">

        <Station name="Admissions" value="admissions" students={this.props.students} handleClick={this.props.handleClick} />

        <div className="mods station">

          <Station name="Mod 1" value="mod-1" students={this.props.students} handleClick={this.props.handleClick} />
          <Station name="Mod 2" value="mod-2" students={this.props.students} handleClick={this.props.handleClick} />
          <Station name="Mod 3" value="mod-3" students={this.props.students} handleClick={this.props.handleClick} />
          <Station name="Mod 4" value="mod-4" students={this.props.students} handleClick={this.props.handleClick} />
          <Station name="Mod 5" value="mod-5" students={this.props.students} handleClick={this.props.handleClick} />
        </div>

      </div>
    )
  }
}

export default School
