import React, {Component} from 'react';

const MovieIcon = (props)=>{
  return(
    <div>
    <img src={props.link}/>
    <p>{props.title}"("{props.year}")"</p>
    </div>
  )
}

export default MovieIcon;
