import React, {Component} from 'react';

const Actor = (props) => {
  return(
    <tr id="actor">
      <td>
        <img src={`http://image.tmdb.org/t/p/w154${props.actor.profile_path}`}/>
      </td>
      <td>
        <p>{props.actor.name}</p>
      </td>
      <td>
        <p>{props.actor.character}</p>
      </td>
    </tr>
  )
}

export default Actor;
