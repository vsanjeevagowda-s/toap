import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const TEST_CREATE_SUCCESS = 'TEST_CREATE_SUCCESS';
export const TEST_CREATE_FAILURE = 'TEST_CREATE_FAILURE';
export const TEST_LIST_SUCCESS = 'TEST_LIST_SUCCESS';
export const TEST_LIST_FAILURE = 'TEST_LIST_FAILURE';
export const GET_TEST_DETAILS_SUCCESS = 'GET_TEST_DETAILS_SUCCESS';
export const GET_TEST_DETAILS_FAILURE = 'GET_TEST_DETAILS_FAILURE';
export const TEST_STARTED_SUCCESS = 'TEST_STARTED_SUCCESS';
export const GET_QUESTION_LIST_SUCCESS = 'GET_QUESTION_LIST_SUCCESS';
export const GET_QUESTION_LIST_FAILURE = 'GET_QUESTION_LIST_FAILURE';

const testCreateSuccess = resp => {

  return {
    type: TEST_CREATE_SUCCESS,
    resp
  }
};

const testCreateFailure = error => {

  return {
    type: TEST_CREATE_FAILURE,
    error
  }
};

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

  return {
    type: TEST_LIST_SUCCESS,
    resp
  }
};

const testListFailure = error => {

  return {
    type: TEST_LIST_FAILURE,
    error
  }
};

export const listTest = body => (dispatch) => {

  // dispatch(apiRequestPending());
  return api.get('/tests')
    .then(resp => {

      // dispatch(apiRequestComplete());

      return Promise.resolve(dispatch(testListSuccess(resp)))
    })
    .catch(error => {

      // dispatch(apiRequestComplete());

      return Promise.reject(dispatch(testListFailure(error.error)));
    })
}

const getTestDetailsSuccess = resp => {

  return {
    type: GET_TEST_DETAILS_SUCCESS,
    resp
  }
};

const getTestDetailsFailure = error => {

  return {
    type: GET_TEST_DETAILS_FAILURE,
    error
  }
};

export const getTestDetails = id => (dispatch) => {
  // dispatch(apiRequestPending());
  return api.get(`/tests/${id}`)
    .then(resp => {

      // dispatch(apiRequestComplete());

      return Promise.resolve(dispatch(getTestDetailsSuccess(resp)))
    })
    .catch(error => {

      // dispatch(apiRequestComplete());

      return Promise.reject(dispatch(getTestDetailsFailure(error.error)));
    })
};


export const startTest = flag => dispatch => {
  dispatch({ type: TEST_STARTED_SUCCESS, flag })
}

export const saveUserTestResponse = (body, user_id) => dispatch => {
  debugger
  return api.put(`/users/${user_id}/testResponse`, { ...body })
    .then(resp => { })
    .catch(error => { })
};

