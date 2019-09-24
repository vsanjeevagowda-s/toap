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
import { connect } from "react-redux";
import {
  successAlertHandler,
  failureAlertHandler
} from '../../actions/alert.actions';
import {
  createTest
} from '../../actions/test.actions';

class TestCreate extends Component {
  submit = this.submit.bind(this);
  handleChange = this.handleChange.bind(this);
  state = {
    title: '',
    description: '',
    time_limit: '0'
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async submit() {
    const {
      createTest,
      successAlertHandler,
      failureAlertHandler,
      history,
      email: creator_email,
    } = this.props;
    const { title, description, time_limit } = this.state;
    try {
      const resp = await createTest({ test: { title, description, creator_email, time_limit } });
      history.push('/dashboard');
      successAlertHandler(resp.resp);
    } catch (error) {
      failureAlertHandler(error.error);
    }
  }

  render() {
    const { title, description, status, time_limit } = this.state;
    console.log('====>', this.state);
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }} className='border shadow rounded'>
          <div className='my-4'>
            <div className='text-center h4 py-2 border-bottom'>Create Test</div>
            <Form>
              <FormGroup>
                <Label for="Title">Title</Label>
                <Input value={title} type="text" name="title" placeholder="Enter the test titile" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <Row>
                <Col>
                <FormGroup>
                  <Label for="time_limit">Time limit (minutes)</Label>
                  <Input type="number" name="time_limit" value={time_limit} onChange={e => this.handleChange(e)}/>
                </FormGroup>
                </Col>
                {/* <Col>
                  <FormGroup>
                    <Label for="status">Status</Label>
                    <Input type="select" value={status} name="status" onChange={e => this.handleChange(e)}>
                      <option>Draft</option>
                      <option>Published</option>
                    </Input>
                  </FormGroup>
                </Col> */}
              </Row>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input type="textarea" name="description" value={description} placeholder="Enter the test description" onChange={e => this.handleChange(e)} />
              </FormGroup>
            </Form>
            <Button color="secondary" size="sm" block className='py-2' onClick={() => this.submit()}>SUBMIT</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { email } = state.user;
  return { email };
}

const actions = {
  createTest,
  successAlertHandler,
  failureAlertHandler,
}

export default connect(mapStateToProps, actions)(TestCreate);
