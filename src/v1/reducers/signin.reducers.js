import {
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_FAILURE,
  // TOKEN_EMAIL_TO_STORE,
} from '../actions/signin.actions';

const initialState = {
  token: localStorage.getItem('token'),
  email: ''
}

const signIn = (state = initialState, action) => {
  switch(action.type){
    case SIGNIN_REQUEST_SUCCESS:
    return{
      ...state,
      pending: false,
      token: action.resp.token
    }
    case SIGNIN_REQUEST_FAILURE:
    return{
      ...state,
      pending: false
    }
    default:
        
    return state
  }
}

export default signIn