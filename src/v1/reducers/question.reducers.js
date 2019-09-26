import {
  QUESTION_LIST_SUCCESS,
  QUESTION_LIST_FAILURE,
  GET_FIRST_QUESTION,
  GET_NEXT_QUESTION,
  GET_PREVIOUS_QUESTION,
  // TOKEN_EMAIL_TO_STORE,
} from '../actions/question.actions';

let questionIndex = 0;

const initialState = {
  questions: [],
  question: { options: []},
  questionIndex,
  questionsLength: 0
}

const question = (state = initialState, action) => {
  switch(action.type){
    case QUESTION_LIST_SUCCESS:
    return{
      ...state,
      questions: action.resp.questions,
      questionsLength: action.resp.questions.length,
    }
    case QUESTION_LIST_FAILURE:
    return{
      ...state,
      questions: []
    }
    case GET_FIRST_QUESTION:
      return {
        ...state,
        question: state.questions[questionIndex],
        questionIndex,
      }
    case GET_NEXT_QUESTION:
        questionIndex = questionIndex + 1;
      return {
        ...state,
        question: state.questions[questionIndex],
        questionIndex,
      }
    case GET_PREVIOUS_QUESTION:
        questionIndex = questionIndex - 1
      return {
        ...state,
        question: state.questions[questionIndex],
        questionIndex,
      }
    default:
    return state
  }
}

export default question