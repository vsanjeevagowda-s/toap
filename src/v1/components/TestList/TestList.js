import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import Test from './Test';
import HandleRole from '../HandleRole';
import {
  listTest
} from '../../actions/test.actions';

class TestList extends Component {
  addTestButton = this.addTestButton.bind(this);

  componentDidMount(){
    const { listTest } = this.props;
    listTest();
  }

  addTestButton(){
    return (<Col className='main-test-list-title text-right '><Link to="/test/create"><i className="fa fa-plus-circle fa-2x cursor-pointer"></i></Link></Col>)
  }

  render() {
    const { tests, role } = this.props;
    return (
      <Row className='border shadow rounded'>
        <Col>
          <Row className='py-2 bg-light border-bottom'>
            <Col className='main-test-list-title'>TESTS</Col>
            <HandleRole rolesAllowed={['1']} componentAllowedFn={this.addTestButton} />
          </Row>
          <Row>
            <Col>
              {tests && tests.length > 0 && tests.map((test) => {
                return <Test role={role} key={test.id} test={test} />
              })}
              { tests && tests.length === 0 && <div className='text-center'>No Tests</div>}
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}


const mapStateToProps = state => {
  const { role } = state.user;
  const { tests } = state.test;
  return { role, tests };
}

const actions = {
  listTest
}


export default connect(mapStateToProps, actions)(TestList);

