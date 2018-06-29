import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    console.log('constructor', this.props.name);
    // 1 vote

    this.state = { name: "hello" }
  }

  // componentWillMount() {
  //   this.setState({ name: "grand parent"})
  // }
  handleClick = () => {
    this.setState({})
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props.name);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate', this.props.name)
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this.props.name)
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.props.name)
  }

  componentWillMount() {
    console.log('componentWillMount', this.props.name);
    // 2 votes
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.name);
    // 7 votes - fetch + setState goes here
  }

  // sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  //
  // async componentWillMount() {
  //   console.log('Taking a break...');
  //   await this.sleep(2000);
  //   console.log('Two second later');
  // }


  render() {
    const { name, color, children } = this.props;

    console.log('render', name);

    return (
      <div style={{ border: `1px solid ${color}`, margin: 10, textAlign: 'center' }}>
        <p style={{ color }}>{name}</p>
        {children}
        <button onClick={this.handleClick} >Click me more!</button>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  color: 'black'
}

export default ClassComponent;
