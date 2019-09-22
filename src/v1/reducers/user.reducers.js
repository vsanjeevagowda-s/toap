import {
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from '../actions/user.actions';

const initialState = {
  email: '',
  role: '',
}

const user = (state = initialState, action) => {
  switch(action.type){
    case USER_FETCH_SUCCESS:
    return {
      ...state,
      email: action.resp.email,
      role: action.resp.role,
    }
    case USER_FETCH_FAILURE:
    return {
      ...state,
      email: '',
      role: '',
    }
    default:
    return state
  }
};
export default user
