import React, { Component } from "react";
import "./Counter.css";


class Counter extends Component {
   //constructor
   constructor(props) {
     //calls on parent constructor super()
     super(props);
     //Define initial state of component
     this.state = {
       count: 0,
     };
   }
   
   //constructor
   render() {
     console.log(this.state);
     return (
       <div id="counterDiv">
         <button className="countB" onClick={this.decreaseCount}>-</button>
         <button className="countB middleNum">{this.state.count}</button>
         <button className="countB" onClick={this.increaseCount}>+</button>
       </div>
     );
   }
   //event handlers
   increaseCount = () => {
     let newCount = this.state.count + 1;
     //setState takes an argument of the updated value pairs in state
     this.setState({
       count: newCount,
     });
   };
   decreaseCount = () => {
     let newCount = this.state.count - 1;
     this.setState({
       count: newCount,
     });
   };
   //end of class
 }
 export default Counter;

 //<h1>{this.props.type}{this.state.count}</h1>
  