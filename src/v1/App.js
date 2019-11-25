import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './interceptor';
import Main from './components/Main';
import Header from './components/Header';
import {
  Container,
  Alert,
  Spinner,
  Row,
  Col
} from 'reactstrap';
const styles = {
  'spinner-align': {
    'display': 'flex',
    'height': '100vh',
    'alignItems': 'center',
    'justifyContent': 'center'
  }
}


const LoadingSpinner = () => {
  return (
    <Row>
      <Col xs={12} sm={12} style={styles["spinner-align"]}>
        <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
      </Col>
    </Row>
  )
}

const AlertWrapper = ({ message, error }) => {
  if (message) {
    return <Alert className='text-center mb-0' color='success'>{message}</Alert>
  } else if (error) {
    return <Alert className='text-center mb-0' color='danger'>{error}</Alert>
  } else {
    return '';
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    const { error, message, pending, token } = this.props;
    const { error: nerror, message: nmessage, pending: npending, token: ntoken } = nextProps;
    
    if(error !== nerror) return true;
    if(message !== nmessage) return true;
    if(pending !== npending) return true;
    if(token !== ntoken) return true;
    
    return false;
  }
  
  logoutUser = () => {
    const { history: { push } } = this.props;
    localStorage.clear();
    push('/')
  }

  render() {
    
    const { error, message, pending, token } = this.props;
    return (
      <Fragment>
        {(message || error) && <AlertWrapper message={message} error={error} />}
        <Container fluid>
          <Header logoutUser={this.logoutUser} />
          {pending ? <LoadingSpinner /> : <Main token={token} />}
        </Container>
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  
  const { message, error } = state.alert;
  const { token } = state.signIn;
  const { pending } = state.helper;
  return { message, error, pending, token };
}



export default withRouter(connect(mapStateToProps, null)(App));