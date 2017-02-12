import React, {Component} from 'react';

class Comments extends Component{
  render(){
    return(
    <div>
      <div className="media">
      <a className="pull-left" href="#">
          <img className="media-object" src="http://placehold.it/64x64" alt=""/>
      </a>
      <div className="media-body">
          <h4 className="media-heading">Start Bootstrap
              <small>August 25, 2014 at 9:30 PM</small>
          </h4>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </div>
      </div>
    </div>
    )
  }
}

export default Comments;
