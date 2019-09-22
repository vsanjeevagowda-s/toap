export const API_REQUEST_PENDING = 'API_REQUEST_PENDING';
export const API_REQUEST_COMPLETE = 'API_REQUEST_COMPLETE';

export const apiRequestPending = () => {
  
  return {
    type: API_REQUEST_PENDING,
  }
}

export const apiRequestComplete = () => {
  
  return {
    type: API_REQUEST_COMPLETE,
  }
}