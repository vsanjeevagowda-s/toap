import { api } from './api-lib/api';
// import {
//   apiRequestPending,
//   apiRequestComplete
// } from '../actions/helper.actions';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';

const userFetchSuccess = resp => {
  
  return {
    type: USER_FETCH_SUCCESS,
    resp
  }};

const userFetchFailure = error => {
  
  return {
    type: USER_FETCH_FAILURE,
    error
  }};

export const getCurrentUser = () => (dispatch) => {
  
  return api.get('/user')
    .then(resp => {
      return Promise.resolve(dispatch(userFetchSuccess(resp.currentUser)))
    })
    .catch(error => {    
      return Promise.reject(dispatch(userFetchFailure(error.error)));
    })
}