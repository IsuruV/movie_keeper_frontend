import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getFBID} from '../actions/index';
import FbLogin from './fb-login';
import WatchList from './watch-list';

 class Navigation extends Component{

    shouldComponentUpdate(nextProps, nextState){
      if(this.props.fb_id != nextProps.fb_id){
        return true;
      }
    }

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
        <li>{this.props.fb_id? <WatchList/> : <FbLogin/> }</li>
      </ul>
      <ul className="nav navbar-nav navbar-left">
          <li><Link className="btn btn-secondary btn-lg w3-light-grey" to={"/"}>Home</Link></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

function mapStateToProps(state){
  return {fb_id: state.movies.fb_id}
}
export default connect(mapStateToProps, {getFBID})(Navigation);

/* make the API call */
// FB.api(
//     "/{user-id}",
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//       }
//     }
// );
