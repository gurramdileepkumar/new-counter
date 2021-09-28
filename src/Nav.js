import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';


export default class Nav extends Component {
    render() {
        return (
            <div>
               <li> <Link to="/app" >Counter</Link></li>
               <li> <Link to="/todos" >Todos</Link></li>
            </div>
        )
    }
}
