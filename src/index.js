// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import {combineReducers, createStore} from "redux";


const mathReducer = (state = {  result:1,
  lastValues:[]}, action) => {
  switch(action.type) {
    case "ADD":
    state = {
      ...state,
      result: state.result+action.payload,
      lastValues : [...state.lastValues, action.payload]
    }
    break;
      case "SUBTRACT":
       state = {
          ...state,
        result: state.result-action.payload,
        lastValues : [...state.lastValues, action.payload]
  }
        break;
  }
  return state; 
}

const userReducer = (state = {name:"raksha", age:16}, action) => {
  switch(action.type) {
    case "SETNAME":
    state = {
      ...state,
      name: action.payload,
        }
    break;
      case "SETAGE":
       state = {
          ...state,
        age: action.payload,
        }
        break;
  }
  return state; 
}

const store = createStore( combineReducers({userReducer, mathReducer}))

store.subscribe(()=>{
  console.log("store updated", store.getState());  
  })
  store.dispatch({
    type:"ADD",
    payload:10
  })
  store.dispatch({
    type:"ADD",
    payload:100
  })

  store.dispatch({
    type:"SUBTRACT",
    payload:11
  })
  
  store.dispatch({
    type:"SETAGE",
    payload:117
  })
  
  store.dispatch({
    type:"SETNAME",
    payload:"Shraddha"
  })
  
