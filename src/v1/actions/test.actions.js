import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const TEST_CREATE_SUCCESS = 'TEST_CREATE_SUCCESS';
export const TEST_CREATE_FAILURE = 'TEST_CREATE_FAILURE';
export const TEST_LIST_SUCCESS = 'TEST_LIST_SUCCESS';
export const TEST_LIST_FAILURE = 'TEST_LIST_FAILURE';

const testCreateSuccess = resp => {
  
  return{
    type: TEST_CREATE_SUCCESS,
    resp
  }};

const testCreateFailure = error => {
  
  return {
    type: TEST_CREATE_FAILURE,
    error
  }};

export const createTest = body => (dispatch) => {
  
  // dispatch(apiRequestPending());
  return api.post('/test', { ...body })
    .then(resp => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.resolve(dispatch(testCreateSuccess(resp)))
    })
    .catch(error => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.reject(dispatch(testCreateFailure(error.error)));
    })
}


const testListSuccess = resp => {
  
  return{
    type: TEST_LIST_SUCCESS,
    resp
  }};

const testListFailure = error => {
  
  return {
    type: TEST_LIST_FAILURE,
    error
  }};

export const listTest = body => (dispatch) => {
  
  // dispatch(apiRequestPending());
  return api.get('/test', { ...body })
    .then(resp => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.resolve(dispatch(testListSuccess(resp)))
    })
    .catch(error => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.reject(dispatch(testListFailure(error.error)));
    })
}