
import React,{ Component } from "react";


class ClassBasedComponent extends Component {
  constructor() {
    super();
    this.state={
        value:0
    };
  }
  render() {
    return (
      <>
        <h1 align={"center"}>CBC</h1>
        <hr />
      <h2>Value {this.state.value}</h2>
      
      <button onClick={()=>{
        this.setState({value:this.state.value+1})
      }}>Increment</button> <br /><br />
      <button onClick={()=>{
        this.setState({value:this.state.value-1})
      }}>Decrement</button>
      </>
    );
  }
}

export default ClassBasedComponent;
