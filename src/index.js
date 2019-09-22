import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './v1/App';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './v1/reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
/* eslint-disable no-underscore-dangle */
const store = createStoreWithMiddleware(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const compProp = () => {
  
  return (<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>)
}

const refProps = () => {
  
  return document.getElementById('root');
}

ReactDOM.render(compProp(), refProps());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();