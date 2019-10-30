import { api } from './api-lib/api';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


const registerSuccess = resp => {
  
  return {
    type: REGISTER_SUCCESS,
    resp
  }};

const registerFailure = error => {
  
  return {
    type: REGISTER_FAILURE,
    error
  }};

export const register = body => dispatch => {
  return api.post('/register', { ...body })
  .then(resp => {
    return Promise.resolve(dispatch(registerSuccess(resp)))
  })
  .catch(error => {    
    return Promise.reject(dispatch(registerFailure(error.error)));
  })
}