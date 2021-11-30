import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import userReducer from "./reducers/userReducer"
import mathReducer from "./reducers/mathReducer"

export default createStore( 
    combineReducers({
        user: userReducer,
        math: mathReducer
    }), 
{},     
  applyMiddleware(createLogger))

