import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Signin from '../Signin';
import Dashboard from '../Dashboard';

class Main extends Component {

  shouldComponentUpdate(nextProps, nextState){
    const { token } = this.props;
    const { token: ntoken } = nextProps;
    
    if(token !== ntoken) return true;
    return false;
  }

  render() {
    const { token } = this.props;
    
    return (
      <Switch>
        <Route exact path="/" component={Signin} />
        {token && <Dashboard />}
      </Switch>
    )
  }
}

export default Main;