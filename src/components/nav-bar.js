import React, { Component } from 'react';

export default class Navigation extends Component{
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top w3-light-grey">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#contact">My Watch List</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
