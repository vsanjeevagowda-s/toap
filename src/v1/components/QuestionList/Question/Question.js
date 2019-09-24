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

// const Option = ({ option: { title, id }, index }) => {
//   console.log('title000', title)
//   return (
//     <div>
//       <span className='ml-2'>{index + 1})</span>
//       <span key={id} >{title}</span>
//     </div>)
// }

export default class Question extends Component {

  showAnswer(answer, option){
    debugger
    if(answer === option) return 'border w-80 display-inline rounded  p-2 my-2 border-success';
    return 'border w-80 display-inline rounded  p-2 my-2';
  }

  render() {
    const { question, question: { options }, index } = this.props;
    return (
      <React.Fragment>
        <Row className='border-top py-2'>
          <Col>
            <div>{index + 1}: {question.title}</div>
            <div>
              <small>{question.description}</small>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='p-0'>
            {options.map((option, index) => {
              return (
                <div>
                  <div className='w-10 display-inline text-center'>{optionsIndex[index]}.</div>
                  <div className={this.showAnswer(question, option.title)}>{option.title}</div>
                </div>
              )
            })}
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
