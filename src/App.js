import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import Menu from './components/navigation/Menu';

import './App.css';

class App extends Component {

  componentDidMount() {
    this
      .props
      .onTryAutoSignup();
  }

  render() {
    return (<Menu/>);
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
