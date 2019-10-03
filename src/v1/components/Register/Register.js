import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Link
} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button
} from 'reactstrap';
import {
  successAlertHandler,
  failureAlertHandler
} from '../../actions/alert.actions';
import { 
  register
} from '../../actions/register.actions';

console.log('register', register);

const FormGroupWrapper = ({ placeholder, value, name, type, handleChange }) => {
  return (
    <FormGroup row>
      <Label sm={3}>{placeholder}</Label>
      <Col sm={9}>
        <Input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange} />
      </Col>
    </FormGroup>
  )
}



class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  register = () => {
    const {
      register,
      successAlertHandler,
      failureAlertHandler
    } = this.props;
    const { email, password, password_confirmation } = this.state;
    const { history } = this.props;
    register({ email, password, password_confirmation })
      .then(resp => {
        successAlertHandler(resp.resp);
        history.push('/');
      })
      .catch(error => {
        failureAlertHandler(error.error);
      })
  }

  render() {
    const { email, password, password_confirmation } = this.state;
    return (
      <Row>
        <Col xs={12} sm={4} ></Col>
        <Col xs={12} sm={4} >
          <Form >
            <h4 className='text-center mt-4 mb-4'>Register</h4>
            <FormGroupWrapper placeholder='Email' name='email' type='email' value={email} handleChange={this.handleChange} />
            <FormGroupWrapper placeholder='Password' name='password' type='password' value={password} handleChange={this.handleChange} />
            <FormGroupWrapper placeholder='Password' name='password_confirmation' type='password' value={password_confirmation} handleChange={this.handleChange} />
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <Button block color='primary' onClick={this.register}>Register</Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
              Already have account? <Link to='/'> Sign-in</Link>
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={12} sm={4} ></Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const actions = {
  register,
  successAlertHandler,
  failureAlertHandler,
}

export default connect(mapStateToProps, actions)(Register);