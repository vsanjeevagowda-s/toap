import React, { Component } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question.actions';
import {
  successAlertHandler,
  failureAlertHandler
} from '../../actions/alert.actions';
const optionsIndex = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
}

class QuestionCreate extends Component {
  state = {
    description: '',
    options:[
      {title: ''},
      {title: ''},
      {title: ''},
      {title: ''}
    ],
    answer: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleOptionTextChange(e){
    const { options } = this.state;
    options[e.target.name].title = e.target.value;
    this.setState({
      options,
    })
  }

  async submit() {
    const {
      createQuestion,
      successAlertHandler,
      failureAlertHandler,
      history,
      match: { params : { id } }
    } = this.props;
    try {
      const resp = await createQuestion({question: this.state}, id);
      history.push('/dashboard');
      successAlertHandler(resp.resp);
    } catch (error) {
      failureAlertHandler(error.error);
    }
  }

  optionsList() {
    const { options } = this.state;
    return options.map((option, index) => {
      return (
        <Row key={index}>
          <Col>
            <FormGroup>
              <div className='display-inline-block w-3'>{optionsIndex[index]}</div>
              <Input className='display-inline-block w-97' type="text" value={option.title} name={index} onChange={e => this.handleOptionTextChange(e)} />
            </FormGroup>
          </Col>
        </Row>)
    })
  }

  answerDropDown() {
    const { answer, options } = this.state;
    return (
      <Row >
        <Col>
          <FormGroup className='border-top mt-2'>
            <Label for="answer">Answer:</Label>
            <Input type="select" value={answer} name="answer" onChange={e => this.handleChange(e)}>
            {options.map((option, index) => <option key={index}>{option.title}</option> )}
            </Input>
          </FormGroup>
        </Col>
      </Row>)
  }

  render() {
    const { description } = this.state;
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }} className='border shadow rounded'>
          <div className='my-4'>
            <div className='text-center h4 py-2 border-bottom'>Create Question</div>
            <Form>
              <FormGroup>
                <Label for="Title">Description</Label>
                <Input value={description} type="textarea" name="description" placeholder="Enter the question description" onChange={e => this.handleChange(e)} />
              </FormGroup>
              {/* <Option /> */}
              { this.optionsList() }
              { this.answerDropDown() }
            </Form>
            <Button color="secondary" size="sm" block className='py-2' onClick={() => this.submit()}>SUBMIT</Button>
          </div>
        </Col>
      </Row>
    )
  }
};

const mapStateToProps = state => {
  return state;
}

const actions = {
  createQuestion,
  successAlertHandler,
  failureAlertHandler
}

export default connect(mapStateToProps, actions)(QuestionCreate);