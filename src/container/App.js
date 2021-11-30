import User from "../components/User"
import { connect } from "react-redux"

function App(props) {
  return (
<div className = "container">
      <User username = {props.user.setName} />
            </div>
  )
}
  const mapStatetoProps = (state) => {
    return{
      user:state.user,
      math: state.math
    }
  }

  const mapDispatchtoProps = (dispatch) => {
    return{
      setName: (name) =>{
        dispatch({
          type:"SETNAME",
          payload:"name"
        })
      }
    }
  }
  
 


export default connect(mapStatetoProps, mapDispatchtoProps)(App);
