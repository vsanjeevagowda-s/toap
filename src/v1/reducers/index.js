import { combineReducers } from 'redux';
import signIn from './signin.reducers';
import helper from './helper.reducers';
import alert from './alert.reducers';
import user from './user.reducers';
import test from './test.reducers';

const reducerFuns = () => {
  
  return {
    helper,
    signIn,
    alert,
    user,
    test
  }
}

export default combineReducers(reducerFuns());