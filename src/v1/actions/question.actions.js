import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const QUESTION_CREATE_SUCCESS = 'QUESTION_CREATE_SUCCESS';
export const QUESTION_CREATE_FAILURE = 'QUESTION_CREATE_FAILURE';
export const QUESTION_LIST_SUCCESS = 'QUESTION_LIST_SUCCESS';
export const QUESTION_LIST_FAILURE = 'QUESTION_LIST_FAILURE';

const questionListSuccess = resp => {
  
  return{
    type: QUESTION_LIST_SUCCESS,
    resp
  }};

const questionListFailure = error => {
  
  return {
    type: QUESTION_LIST_FAILURE,
    error
  }};

export const listQuestion = test_id => (dispatch) => {
  
  // dispatch(apiRequestPending());
  return api.get(`/test/${test_id}/questions`)
    .then(resp => {
      // dispatch(apiRequestComplete());
      
      return Promise.resolve(dispatch(questionListSuccess(resp)))
    })
    .catch(error => {
      // dispatch(apiRequestComplete());
      
      return Promise.reject(dispatch(questionListFailure(error.error)));
    })
};


const questionCreateSuccess = resp => {
  
  return{
    type: QUESTION_CREATE_SUCCESS,
    resp
  }};

const questionCreateFailure = error => {
  
  return {
    type: QUESTION_CREATE_FAILURE,
    error
  }};

export const createQuestion = (body, test_id) => (dispatch) => {
  
  // dispatch(apiRequestPending());
  return api.post(`/test/${test_id}/question`, { ...body })
    .then(resp => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.resolve(dispatch(questionCreateSuccess(resp)))
    })
    .catch(error => {
      
      // dispatch(apiRequestComplete());
      
      return Promise.reject(dispatch(questionCreateFailure(error.error)));
    })
}