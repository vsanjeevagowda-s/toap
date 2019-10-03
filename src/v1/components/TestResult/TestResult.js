import React, { Component } from 'react'
import {
  Row,
  Col
} from 'reactstrap';

class TestResult extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div className='h4 text-center'>Test result</div>
        </Col>
      </Row>
    )
  }
}
export default TestResult;