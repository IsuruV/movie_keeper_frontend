import React, {Component} from 'react';

const Actor = (props) => {
  return(
    <div>
    <tr id="actor">
      <td>
        <img src={`http://image.tmdb.org/t/p/w154${props.actor.profile_path}`}> </img>
      </td>
      <td>
        <p>{props.actor.name}</p>
      </td>
      <td>
        <p>{props.actor.character}</p>
      </td>
    </tr>
    </div>
  )
}

export default Actor;
