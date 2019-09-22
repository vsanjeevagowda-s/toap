import {
  TEST_LIST_SUCCESS,
  TEST_LIST_FAILURE,
} from '../actions/test.actions';

const initialState = {
  tests: [],
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
    default:
        
    return state
  }
}

export default test