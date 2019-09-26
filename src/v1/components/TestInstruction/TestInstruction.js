import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getTestDetails,
  startTest
} from '../../actions/test.actions';

class TestInstruction extends Component {
  startTest = this.startTest.bind(this);
  componentDidMount() {
    const { getTestDetails } = this.props;
    const { match: { params: { id } } } = this.props;
    getTestDetails(id)
  }

  startTest(){
    const { startTest } = this.props;
    debugger
    startTest(true);
  }

  render() {
    const { test } = this.props;
    return (
      <Row>
        <Col md={{ size: 8, offset: 2 }} className='border shadow rounded p-2'>
          <div className='h4 text-center py-2 border rounded'>
            Test Instructions
          </div>
          <div className='px-4'>
            <ul>
              <li>
                This is a {test.time_limit} minutes test consisting {test.noofquestions} questions.
              </li>
              <li>
                For every correct answer you will be awarded 1 marks
              </li>
              <li>
                It you have attempted (answered) all questions before timer expiry, then you have to click "End Exam" to finish the exam (test).
              </li>
              <li>
                Once you click on <b> Start Test </b> button below the test will start and you will be able to see timer running in top right.
              </li>
              <li>
                Do not refresh the page. Refreshing page while taking test will auto submit the result.
              </li>
            </ul>
          </div>
          <div className='text-center'>
            <div className='py-2 '>
              <Link className='mx-2 btn btn-danger border-0 px-4' to={{
                pathname: '/testPage',
                state:{
                  testId: test._id
                }
              }} onClick={this.startTest}>Start Test</Link>
              <Link className='mx-2 btn btn-secondary border-0 px-4' to='/dashboard'>Cancel</Link>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { test, testStartedFlag } = state.test;
  return { test, testStartedFlag };
}

const actions = {
  getTestDetails,
  startTest
}

export default connect(mapStateToProps, actions)(TestInstruction);