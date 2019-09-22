import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import {
  getCurrentUser
} from '../../actions/user.actions';
import Dashboard from '../Dashboard';

class LoginLayout extends Component {
  componentDidMount(){
    const { getCurrentUser } = this.props;
    getCurrentUser()
  }

  render() {
    return (
      <Switch>
        <Route exact path='/(dashboard | test)'  component={Dashboard} />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  const { role } = state.user;
  return { role };
}

const actions = {
  getCurrentUser
}


export default connect(mapStateToProps, actions)(LoginLayout);
