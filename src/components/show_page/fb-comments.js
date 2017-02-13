import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class FbComments extends Component {
  render() {
    return (
      <FacebookProvider appID="">
        <Comments href={`http://localhost:8080/movies/${this.props.movieId}`} />
      </FacebookProvider>
    );
  }
}
