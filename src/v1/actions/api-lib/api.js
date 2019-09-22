// const ROOT_API_URL = process.env.REACT_APP_ROOT_PATH;
const ROOT_API_URL = 'http://localhost:3001/api/v1';
/* global fetch */
/* global localStorage */

const setHeaders = () => {
  return localStorage.getItem('token');
}

const headers = () => {
  return {
  'Content-Type': 'application/json',
  'authorization': setHeaders() || '',
  }
}

export const api = {
  get: (path) => {
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`,{
        headers: headers(),
      })
        .then(resp => resp.json())
        .then(resp => {if(resp && resp.data)return resolve(resp.data)})
        .catch(error => reject(error))
    })
  },
  post: (path, payload) => {
    payload = {
      method: 'post',
      body: JSON.stringify(payload),
      headers: headers(),
    }
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`, payload)
        .then(resp => resp.json())
        .then(resp => {if(resp && resp.data) return resolve(resp.data)})
        .catch(error => reject(error))
    })
  },
  put: (path, payload) => {
    payload = {
      method: 'put',
      body: JSON.stringify(payload),
      headers: headers(),
    }
    return new Promise((resolve, reject) => {
      return fetch(`${ROOT_API_URL}${path}`, payload)
        .then(resp => resp.json())
        .then(resp => {if(resp && resp.data)resolve(resp)})
        .catch(error => reject(error))
    })
  }
}