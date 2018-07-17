import React from "react";
import HogDetails from "./HogDetails";
import { connect } from "react-redux"
import removeHog from "../actions"


class HogTile extends React.Component {
  state = {
    clicked: false
  };

  getImage = hogName => {
    let formattedName = hogName
      .split(" ")
      .join("_")
      .toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  };

  handleDetailsClick = () => {
    //when clicked, change clicked to true
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { name, specialty } = this.props.hog;
    return (
      <div className="ui card eight wide column pigTile">
        <div className="image">
          <img src={this.getImage(name)} alt="hogPic" />
        </div>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div className="description">Specialty: {specialty}</div>
        </div>
        <div className="extra content">
          {this.state.clicked ? <HogDetails hog={this.props.hog} /> : null}

          <button className="ui button" onClick={this.handleDetailsClick}>
            {this.state.clicked ? "Less Info" : "More Info"}
          </button>


          <button
            className="ui button"
            onClick={() => this.props.handleBanished(this.props.hog)}>
            Hide Me{" "}

            <span role="img" aria-label="snout">
              🐽
            </span>
          </button>
        </div>
      </div>
    );
  }
}


function mapDispatchToProps (dispatch){
  return {
    handleBanished:(hog) => dispatch(removeHog(hog))
  }
}


export default connect(null, mapDispatchToProps)(HogTile)
