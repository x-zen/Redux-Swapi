import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
// needed dependancies
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { someCoolReducer } from './reducers';

const store = createStore(someCoolReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
