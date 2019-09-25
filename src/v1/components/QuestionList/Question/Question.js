import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
// import {
//   Link
// } from 'react-router-dom';

const optionsIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
}

export default class Question extends Component {

  render() {
    const { question, question: { options }, index } = this.props;
    return (
      <div className='p-2'>
        <Row className='py-2'>
          <Col>
            <div>{index + 1}: {question.description}</div>
            <div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            {options.map((option, index) => {
              return (
                <div key={option.id}>
                  <div className='w-3 display-inline-block text-center p-2 my-2'>{optionsIndex[index]}.
                  </div>
                  <div className={`border w-94 display-inline-block rounded p-2 my-2 ${(option.title.trim() === question.answer.trim()) ? 'text-success' : ''}`}>
                  {option.title}
                  </div>
                </div>
              )
            })}
          </Col>
        </Row>
      </div>
    )
  }
}
