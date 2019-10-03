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
import TestPage from '../TestPage';
import TestResult from '../TestResult';
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
          <Route exact path="/tests/:id/questions" component={QuestionList} />
          <Route exact path="/tests/:id/question/create" component={QuestionCreate} />
          <Route exact path="/tests/:id/testInstruction" component={TestInstruction} />
          <Route exact path="/testPage" component={TestPage} />
          <Route exact path="/tests/:id/result" component={TestResult} />
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
