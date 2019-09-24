import {
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  // TOKEN_EMAIL_TO_STORE,
} from '../actions/question.actions';

const initialState = {
  questions: [],
}

const question = (state = initialState, action) => {
  switch(action.type){
    case QUESTION_LIST_SUCCESS:
    return{
      ...state,
      questions: action.resp.questions,
    }
    case QUESTION_LIST_FAILURE:
    return{
      ...state,
      questions: []
    }
    default:
    return state
  }
}

export default question