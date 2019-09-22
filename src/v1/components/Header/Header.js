import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

export default function Header() {
  return (
    <Row className='border-bottom bg-dark text-light shadow-sm'>
      <Col>
        <h2 className='m-0 py-1'>TOAP</h2>
      </Col>
    </Row>
  )
}
