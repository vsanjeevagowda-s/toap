import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const QUESTION_CREATE_SUCCESS = 'QUESTION_CREATE_SUCCESS';
export const QUESTION_CREATE_FAILURE = 'QUESTION_CREATE_FAILURE';
export const QUESTION_LIST_SUCCESS = 'QUESTION_LIST_SUCCESS';
export const QUESTION_LIST_FAILURE = 'QUESTION_LIST_FAILURE';
export const GET_FIRST_QUESTION = 'GET_FIRST_QUESTION';
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const GET_PREVIOUS_QUESTION = 'GET_PREVIOUS_QUESTION';
export const STORE_SELECTED_OPTION = 'STORE_SELECTED_OPTION';

const questionListSuccess = resp => {

  return {
    type: QUESTION_LIST_SUCCESS,
    resp
  }
};

const questionListFailure = error => {

  return {
    type: QUESTION_LIST_FAILURE,
    error
  }
};

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

  return {
    type: QUESTION_CREATE_SUCCESS,
    resp
  }
};

const questionCreateFailure = error => {

  return {
    type: QUESTION_CREATE_FAILURE,
    error
  }
};

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
};

export const getFirstQuestion = () => dispatch => {
  return dispatch({ type: GET_FIRST_QUESTION });
};

export const getNextQuestion = () => dispatch => {
  return dispatch({ type: GET_NEXT_QUESTION });
};

export const getPreviousQuestion = () => dispatch => {
  return dispatch({ type: GET_PREVIOUS_QUESTION });
};

export const storeSelectedOption = opt => dispatch => {
  return dispatch({ type: STORE_SELECTED_OPTION, opt });
};

export const saveUserTestResponse = (body, user_id) => dispatch => {
  debugger
return api.put(`/users/${user_id}/testResponse`, { ...body })
.then(resp => {})
.catch(error => {})
};