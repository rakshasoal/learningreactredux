import React from 'react';
import {render, ReactDOM} from "react-dom"
import { Provider } from 'react-redux';
import App from './container/App';
import store from "./redux/store"

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


const myLogger = (store) => (next) => (action) => {
  console.log(action, "action logged")
  next(action);
}


  // store.dispatch({
  //   type:"ADD",
  //   payload:10
  // })
  // store.dispatch({
  //   type:"ADD",
  //   payload:100
  // })

  // store.dispatch({
  //   type:"SUBTRACT",
  //   payload:11
  // })
  
  // store.dispatch({
  //   type:"SETAGE",
  //   payload:117
  // })
  
  // store.dispatch({
  //   type:"SETNAME",
  //   payload:"Shraddha"
  // })
  
