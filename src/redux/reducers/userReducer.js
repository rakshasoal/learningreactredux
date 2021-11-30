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
  export default userReducer;