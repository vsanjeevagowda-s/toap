import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const SIGNIN_REQUEST_SUCCESS = 'SIGNIN_REQUEST_SUCCESS';
export const SIGNIN_REQUEST_FAILURE = 'SIGNIN_REQUEST_FAILURE';
export const TOKEN_EMAIL_TO_STORE = 'TOKEN_EMAIL_TO_STORE';

const signinRequestSuccess = resp => {
  
  return {
    type: SIGNIN_REQUEST_SUCCESS,
    resp
  }};

const signinRequestFailure = error => {
  
  return {
    type: SIGNIN_REQUEST_FAILURE,
    error
  }};

export const storeEmailToken = () => {
  
  return {
  type: TOKEN_EMAIL_TO_STORE
}}

export const signin = body => (dispatch) => {
  
  // dispatch(apiRequestPending());
  
  return api.post('/signIn', { ...body })
    .then(resp => {
      
      localStorage.setItem('token', resp.token);
      
      // dispatch(apiRequestComplete());
      
      return Promise.resolve(dispatch(signinRequestSuccess(resp)))
    })
    .catch(error => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.reject(dispatch(signinRequestFailure(error.error)));
    })
};