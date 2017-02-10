import React, {Component} from 'react';
import Actor from './actor';


const Actors = (props) =>{
  return(
      <div className="well w3-pale-green">
        <table>
          <tbody>
          <th>
          <td>Name</td> <td>Character</td>
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
