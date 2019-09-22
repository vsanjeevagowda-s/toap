import React, { Component } from 'react'
import {
  signin
} from '../../actions/signin.actions';
import {
  successAlertHandler,
  failureAlertHandler
} from '../../actions/alert.actions';
import {
  connect,
} from 'react-redux';
import {
  withRouter
} from 'react-router'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Button
} from 'reactstrap';


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


class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'admin@yopmail.com',
      password: 'password'
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('state', this.state);
  }

  signin = () =>{
    const { 
      signin, 
      successAlertHandler, 
      failureAlertHandler 
    } = this.props;
    const { email, password } = this.state;
    const { history } = this.props;
    signin({ user: { email, password}})
    .then(resp => {
      successAlertHandler(resp.resp);
      history.push('/dashboard');
    })
    .catch(error => {
      failureAlertHandler(error.error);
    })
  }



  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Row>
          <Col xs={12} sm={4} ></Col>
          <Col xs={12} sm={4} >
            <Form >
              <h4 className='text-center mt-4 mb-4'>Sign-In</h4>
              <FormGroupWrapper placeholder='Email' name='email' type='email' value={email} handleChange={this.handleChange} />
              <FormGroupWrapper placeholder='Password' name='password' type='password' value={password} handleChange={this.handleChange} />
              <FormGroup row>
                <Col sm={{size: 9, offset: 3}}>
                  <Button block color='primary' onClick={this.signin}>Login</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col xs={12} sm={4} ></Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => {
  
  return state;
}

const actions = {
  signin,
  successAlertHandler,
  failureAlertHandler
}

export default withRouter(connect(mapStateToProps, actions)(Signin));