// import axios from 'axios';
import React, { Component } from 'react'
import './App.css';
// import Ctodos from './Ctodos';
// import Todos from './Todos';

// import Axios from './Axios';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
   
  }
  increment=()=>{
    this.setState({count:this.state.count+3})
  }
  decrement=()=>{
    this.setState({count:this.state.count-3})
  }
  
  render() {
    return (
      <div className="text-center container">    
        <div className="card col-md-3 offset-md-4">

        <button onClick={this.decrement}>&minus;</button> <span>{this.state.count}</span><button onClick={this.increment}>+</button>
      </div>
      {/* <Todos /> */}
      {/* <Axios /> */}
      {/* <Ctodos /> */}
      </div>

    )
  }
}
