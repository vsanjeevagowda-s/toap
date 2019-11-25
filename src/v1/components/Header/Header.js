import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

export default function Header({ logoutUser }) {
  return (
    <Row className='border-bottom bg-dark text-light shadow-sm'>
      <Col>
        <div className='h3'>TOAP</div>
      </Col>
      <Col>
        <span class="fa fa-sign-out float-right align-middle"onClick={() => logoutUser()}></span>
      </Col>
    </Row>
  )
}
