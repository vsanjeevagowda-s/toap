import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

export default class Test extends Component {
  render() {
    debugger
    const { test } = this.props;
    return (
      <Row className='border-top'>
        <Col>
          <div>{test.title}</div>
          <div>
            <small>{test.description}</small>
          </div>
        </Col>
        <Col className='text-center'>
          <div>Questions</div>
          <div>
            <small>{test.questions_count}</small>
          </div>
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
