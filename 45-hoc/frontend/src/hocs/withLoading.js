import React from 'react';
import Adapter from '../components/Adapter';

function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      initialData: null,
      isLoaded: false,
    }

    componentDidMount() {
      dataLoader()
        .then(res => res.json())
        .then(json => {
          this.setState({
            initialData: json,
            isLoaded: true
          });
        });
    }

    render() {
      if (this.state.isLoaded) {
        return <WrappedComponent {...this.props} initialData={this.state.initialData} />
      } else {
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      }

    }
  }
}

export default withLoading;
