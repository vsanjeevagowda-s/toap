import {
  TEST_LIST_SUCCESS,
  TEST_LIST_FAILURE,
  GET_TEST_DETAILS_SUCCESS,
  GET_TEST_DETAILS_FAILURE,
} from '../actions/test.actions';

const initialState = {
  tests: [],
  test: {},
  testStartedFlag : false
}

const test = (state = initialState, action) => {
  switch(action.type){
    case TEST_LIST_SUCCESS:
    return{
      ...state,
      tests: action.resp.tests,
    }
    case TEST_LIST_FAILURE:
    return{
      ...state,
      tests: []
    }
    case GET_TEST_DETAILS_SUCCESS:
      return {
        ...state,
        test: action.resp.test,
      }
    case GET_TEST_DETAILS_FAILURE:
      return {
        ...state,
        test: {},
      }
    default:
        
    return state
  }
}

export default test