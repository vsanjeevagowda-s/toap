import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import HandleRole from '../HandleRole';
import Question from './Question';
import {
  listQuestion
} from '../../actions/question.actions';

class QuestionList extends Component {
  addTestButton = this.addTestButton.bind(this);

  componentDidMount() {
    const { listQuestion, match: { params: { id } } } = this.props;
    listQuestion(id);
  }

  addTestButton() {
    const { match: { params: { id } } } = this.props;
    return (
      <Col className='main-test-list-title text-right '><Link to={`/test/${id}/question/create`}><i className="fa fa-plus-circle fa-2x cursor-pointer"></i></Link></Col>
    )
  }

  render() {
    const { questions } = this.props;
    return (
      <Row className='border shadow rounded'>
        <Col>
          <Row className='py-2 bg-light border-bottom'>
            <Col className='main-test-list-title'>QUESTIONS</Col>
            <HandleRole rolesAllowed={['1']} componentAllowedFn={this.addTestButton} />
          </Row>
          {
            questions && questions.length > 0 && questions.map((question, index) => {
              return <Question key={question.id} question={question} index={index} />
            })
          }
          { questions && questions.length === 0 && <div className='text-center'>No Questions</div>}
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { role } = state.user;
  const { questions } = state.question;
  return { role, questions };
}

const actions = {
  listQuestion
}


export default connect(mapStateToProps, actions)(QuestionList);
