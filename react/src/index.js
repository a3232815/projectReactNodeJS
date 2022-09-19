import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ProductReducers } from './Store/reducers/Product';
import { combineReducers, createStore } from "redux"
import {orderReducer}from "./Store/reducers/oneOrder"
import {allOrderReduser} from "./Store/reducers/allOrders"
import { composeWithDevTools } from 'redux-devtools-extension';
import {userReducers} from './Store/reducers/user'

let whoState = createStore(combineReducers({prodRedus: ProductReducers, oneOrdReduser:orderReducer, allOrderRedus:allOrderReduser,userRedus:userReducers},composeWithDevTools()));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={whoState}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
