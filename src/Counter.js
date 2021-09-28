import React, { Component } from 'react'

export default class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count :0,
            name :"vinod",
            age : 24,
            designation : "Front end developer"
         }
     }
     clickHandler =()=>{
         this.setState({name:"laxman"});
     }

    //  increment =()=>{
    //      this.setState({count:this.state.count+1});
    //  }
    //  decrement =()=>{
    //     this.setState({count:this.state.count-1});
    // }
     
    render() {
        return (
            <div style={{textAlign:"center"}}>
                {/* <h1>{this.state.count}</h1> */}
                 {/* <button onClick={this.increment}>&#43;</button> */}
                {/* <input type="" value={this.state.count} /> */}
                {/* <button onClick={this.decrement}>&minus;</button>  */}
                <h1>{this.state.name}</h1>
                <button onClick={this.clickHandler}>Change</button>
                <h1>{this.state.age}</h1>
                <h1>{this.state.designation}</h1>



                
            </div>
        )
    }
}
