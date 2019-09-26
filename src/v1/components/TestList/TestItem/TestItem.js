import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import HandleRole from '../../HandleRole';

export default class TestItem extends Component {
  renderTestStatus = this.renderTestStatus.bind(this);
  renderAdminQuestionsCount = this.renderAdminQuestionsCount.bind(this);
  renderCandidateQuestionsCount = this.renderCandidateQuestionsCount.bind(this);
  renderTakeTestButton = this.renderTakeTestButton.bind(this);

  renderTestStatus() {
    const { test } = this.props;
    return (
      <Col className='text-center'>
        <div>Status</div>
        <div className={test.status === 'Draft' ? 'text-danger' : 'text-secondary'}>{test.status}</div>
      </Col>)
  }

  renderTakeTestButton() {
    const { test } = this.props;
    return (
      <Col className='text-right'>
        <Link className='btn btn-secondary text-light sm cursor-pointer' to={`/test/${test.id}/testInstruction`}>Take test
        </Link>
      </Col>)
  }

  renderEditDeleteButton() {
    return (
      <Col className='text-right'>
        <div className='h-100 py-2'>
          <i className="fa fa-pencil cursor-pointer mx-2"></i>
          <i className="fa fa-trash cursor-pointer mx-2"></i>
        </div>
      </Col>)
  }

  renderCandidateQuestionsCount() {
    const { test } = this.props;
    return (<div><small>{test.questions.length}</small></div>)
  }

  renderAdminQuestionsCount() {
    const { test } = this.props;
    return (<Link to={`/test/${test.id}/questions`}><small>{test.questions.length}</small></Link>)
  }

  render() {
    const { test } = this.props;
    return (
      <Row className='py-2 border-top'>
        <Col>
          <div>{test.title}</div>
          <div>
            <small>{test.description}</small>
          </div>
        </Col>
        <Col className='text-center'>
          <div>Questions</div>
          <div>
            <HandleRole rolesAllowed={['1']} componentAllowedFn={this.renderAdminQuestionsCount} otherComponentFn={this.renderCandidateQuestionsCount} />
          </div>
        </Col>
        <Col className='text-center'>
          <div>Time Limit (mins)</div>
          <div className='text-danger'>{test.time_limit}</div>
        </Col>
        <HandleRole rolesAllowed={['1']} componentAllowedFn={this.renderTestStatus} />
        <HandleRole rolesAllowed={['1']} componentAllowedFn={this.renderEditDeleteButton} otherComponentFn={this.renderTakeTestButton} />
      </Row>
    )
  }
}
