import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap';
import { Route } from "react-router-dom";
import TestList from '../TestList';
import QuestionList from '../QuestionList';
import TestCreate from '../TestCreate';
import QuestionCreate from '../QuestionCreate';
import TestInstruction from '../TestInstruction';
import { connect } from 'react-redux';
import {
  getCurrentUser
} from '../../actions/user.actions';

class Dashboard extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    getCurrentUser()
  }

  render() {
    return (
      <Row className='dashboard-row p-4'>
        <Col>
          <Route exact path="/dashboard" component={TestList} />
          <Route exact path="/test/create" component={TestCreate} />
          <Route exact path="/test/:id/questions" component={QuestionList} />
          <Route exact path="/test/:id/question/create" component={QuestionCreate} />
          <Route exact path="/testInstruction" component={TestInstruction} />
        </Col>
      </Row>
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


export default connect(mapStateToProps, actions)(Dashboard);
