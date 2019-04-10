import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
//import axios from 'axios';// needed dependancies
import { applyMiddleware, createStore } from 'redux';// applyMiddleware from redux
import thunk from 'redux-thunk';// thunk from redux-thunk
import logger from 'redux-logger';// logger from redux-logger
import { rootReducer } from './reducers';// rootReducer from ./reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)/* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
