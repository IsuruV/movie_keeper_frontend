import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class FbComments extends Component {
  render() {
    return (
      <FacebookProvider appID="1755103108043677">
        <Comments href={`http://localhost:8080/movies/${this.props.movieId}`} />
      </FacebookProvider>
    );
  }
}
