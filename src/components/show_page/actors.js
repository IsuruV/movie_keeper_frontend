import React, {Component} from 'react';
import Actor from './actor';


const Actors = (props) =>{
  return(
      <div className="well w3-pale-green">
        <table>
          <tbody>
          <th> </th>
          <th>
          <td>Name</td>
         </th>
         <th>
          <td>Character</td>
         </th>
            {props.actors.map((actor)=>
              <Actor actor={actor}/>)
            }
          </tbody>
        </table>
      </div>
  )
}

export default Actors;
