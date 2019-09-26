import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Button
} from 'reactstrap';
import {
  listQuestion,
  getFirstQuestion,
  getNextQuestion,
  getPreviousQuestion,
} from '../../actions/question.actions';
const optionsIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
}

class TestPage extends Component {
  nextQuestion = this.nextQuestion.bind(this);
  previousQuestion = this.previousQuestion.bind(this);
  componentDidMount() {
    const { location: { state: { testId } }, listQuestion, getFirstQuestion } = this.props;
    listQuestion(testId)
      .then(() => {
        getFirstQuestion()
      })
  }

  nextQuestion() {
    const { getNextQuestion } = this.props;
    getNextQuestion();
  }

  previousQuestion() {
    const { getPreviousQuestion } = this.props;
    getPreviousQuestion();
  }

  render() {
    const {
      question,
      question: { options },
      questionIndex,
      questionsLength
    } = this.props;
    return (
      <div>
        {/* <Row>
          <Col md={{ size: 10, offset: 1 }} className='border shadow rounded p-2'> */}
        <Row className='py-2'>
          <Col>
            <div>Q{questionIndex + 1}: {question.description}</div>
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
                  <div className={`border w-94 display-inline-block rounded p-2 my-2 cursor-pointer`}>
                    {option.title}
                  </div>
                </div>
              )
            })}
          </Col>
        </Row>
        <div className='my-2 text-center'>
          {<Button className='mx-4' disabled={questionIndex === 0} onClick={this.previousQuestion}>{'< Back'}</Button>}
          <Button className='mx-4' onClick={this.nextQuestion} disabled={questionIndex === (questionsLength - 1)}>{'Next >'}</Button>
        </div>
        {/* </Col>
        </Row> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('----,,,,', state.question);
  const { question, questionIndex, questionsLength } = state.question;
  return { question, questionIndex, questionsLength };
}

const actions = {
  listQuestion,
  getFirstQuestion,
  getNextQuestion,
  getPreviousQuestion
}

export default connect(mapStateToProps, actions)(TestPage);