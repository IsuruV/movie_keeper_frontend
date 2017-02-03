
import React, {Component} from 'react';

const CommentInput = (props) =>{
  return(
    <div className="well">
        <h4>Leave a Comment:</h4>
        <form role="form">
            <div className="form-group">
                <textarea className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default CommentInput;
