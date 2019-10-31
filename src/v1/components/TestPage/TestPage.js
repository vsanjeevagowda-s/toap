import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from '../Timer';

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
  storeSelectedOption,
} from '../../actions/question.actions';
import {
  saveUserTestResponse
} from '../../actions/test.actions';
const optionsIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
}

class TestPage extends Component {
  nextQuestion = this.nextQuestion.bind(this);
  previousQuestion = this.previousQuestion.bind(this);
  optionClass = this.optionClass.bind(this);
  componentDidMount() {
    const { location: { state: { testId } }, listQuestion, getFirstQuestion } = this.props;
    listQuestion(testId)
      .then(() => {
        getFirstQuestion()
      })
  }

  nextQuestion() {
    const { getNextQuestion } = this.props;
    // const testObj = { test :{ testId, questions } };
  
    // saveUserTestResponse(testObj, userId);
    getNextQuestion();
  }

  previousQuestion() {
    const { getPreviousQuestion } = this.props;
    getPreviousQuestion();
  }

  storeSelectedOption(opt){
    const { location: { state: { testId } }, storeSelectedOption, saveUserTestResponse, questions, userId } = this.props;
    
    storeSelectedOption(opt)
    const body = {test: { testId, questions }};
    saveUserTestResponse(body, userId, testId)
  }

  onEndTest(){
  }

  optionClass(question, option){
    return `border w-94 display-inline-block rounded p-2 my-2 cursor-pointer ${(question.myAnswer === option.title) ? 'bg-secondary text-light' : ''}`
  }

  render() {
    const {
      question,
      question: { options },
      questionIndex,
      questionsLength,
      location: { state: { testId, time_limit } }
    } = this.props;
    return (
      <Row className='test-page-row'>
        <Col md={{ size: 10 }}>
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
                   <div className={this.optionClass( question ,option)} onClick={() => this.storeSelectedOption(option)}>
                     {option.title}
                   </div>
                 </div>
               )
             })}
           </Col>
         </Row>
         <div className='my-2 text-center'>
           {<Button className='mx-4' disabled={questionIndex === 0} onClick={this.previousQuestion}>{'< Back'}</Button>}
           <Button className='mx-4' onClick={this.nextQuestion} disabled={questionIndex === (questionsLength - 1)} >{'Next >'}</Button>
         </div>

        </Col>
        <Col md={{ size: 2 }} className='text-center'>
          <div>Time Remaining</div>
          <div className='count-down-timer'>
            <Timer testId={testId} time_limit={time_limit} /><br />
            <Button className='my-2' color="danger" onClick={this.onEndTest}>End Test</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { question, questionIndex, questionsLength, questions } = state.question;
  const { userId } = state.user;
  return { question, questions, questionIndex, questionsLength, userId };
}

const actions = {
  listQuestion,
  getFirstQuestion,
  getNextQuestion,
  getPreviousQuestion,
  storeSelectedOption,
  saveUserTestResponse
}

export default connect(mapStateToProps, actions)(TestPage);