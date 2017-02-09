import React, { Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';

export default class FbComments extends Component {
    constructor(props){
      super(props)
      this.state={currentId: null}
    }
  componentWillReceiveProps(nextProps){
    // debugger;
    this.setState({currentId: nextProps.movieId})
    // if (this.props.movieId != nextProps.movieId){
    //   // this.props.resetState();
    //   // this.forceUpdate();
    //   // this.props.movieId = nextProps.movieId
    //   this.setState({currentId: nextProps.movieId})
    // }else{
    //   this.setState({currentId: this.props.movieId})
    // }
  }
  render() {
    console.log(this.state.currentId)
    return (
      <FacebookProvider appID="1755103108043677">
        <Comments href={`http://localhost:8080/movies/${this.state.currentId}`} />
      </FacebookProvider>
    );
  }
}
