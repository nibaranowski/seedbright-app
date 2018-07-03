import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
      window.scrollTo(0, 0)
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} />;
  }
}

export default withRouter(ScrollToTopRoute);
