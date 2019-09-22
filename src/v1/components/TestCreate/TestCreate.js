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
    creator_email: localStorage.getItem('email') 
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
    const { title, description } = this.state;
    try {
      const resp = await createTest({ test: { title, description, creator_email } });
      history.push('/dashboard');
      successAlertHandler(resp.resp);
    } catch (error) {
      failureAlertHandler(error.error);
    }
  }

  render() {
    console.log('ssss', this.props);
    return (
      <Row>
        <Col md={{ size: 6, offset: 3 }} className='border shadow rounded'>
          <div className='my-4'>
            <div className='text-center h4 py-2 border-bottom'>Create Test</div>
            <Form>
              <FormGroup>
                <Label for="Title">Title</Label>
                <Input type="text" name="title" placeholder="Enter the test titile" onChange={e => this.handleChange(e)} />
              </FormGroup>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input type="textarea" name="description" placeholder="Enter the test description" onChange={e => this.handleChange(e)}/>
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
  return {email};
}

const actions = {
  createTest,
  successAlertHandler,
  failureAlertHandler,
}

export default connect(mapStateToProps, actions)(TestCreate);
