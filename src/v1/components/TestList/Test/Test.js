import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';

export default class Test extends Component {

  render() {
    const { test } = this.props;
    return (
      <Row className='border-top py-2'>
        <Col>
          <div>{test.title}</div>
          <div>
            <small>{test.description}</small>
          </div>
        </Col>
        <Col className='text-center'>
          <div>Questions</div>
          <div>
            <Link to={`/test/${test.id}/questions`}><small>{test.questions.length}</small></Link>
          </div>
        </Col>
        <Col className='text-center'>
          <div>Time Limit (mins)</div>
          <div className='text-danger'>{test.time_limit}</div>
        </Col>
        <Col className='text-center'>
        <div>Status</div>
        <div className={test.status === 'Draft' ? 'text-danger' : 'text-secondary'}>{test.status}</div>
        </Col>
        <Col className='text-right'>
          <div className='h-100 py-2'>
            <i className="fa fa-pencil cursor-pointer mx-2"></i>
            <i className="fa fa-trash cursor-pointer mx-2"></i>
          </div>
        </Col>
      </Row>
    )
  }
}
