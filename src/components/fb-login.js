import React, { Component} from 'react';
import {connect} from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import {getFBID} from '../actions/index';

class FbLogin extends Component {
  onFacebookResponse(data, user_data) {
    console.log(data);
    console.log(user_data);
    this.props.getFBID(user_data.profile);
    localStorage.setItem('fb_id',user_data.profile.id);
  }

  render() {
    return (
      <FacebookProvider appID="1755103108043677">
        <Login scope="email" onResponse={this.onFacebookResponse.bind(this)}>
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    );
  }
}
export default connect(null, {getFBID})(FbLogin);
