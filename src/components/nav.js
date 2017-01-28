import React, {Component} from 'react';

class NaveBar extends Component{
 render(){
   return(
     <div className="jumbotron w3-pale-green">
       <h1>Movie Keeper</h1>
       <p>Search. Save. Watch</p>
       <form>
         <div className="input-group">
           <input type="email" className="form-control" size="50" placeholder="Movie Title" required/>
           <div className="input-group-btn">
             <button type="button" className="btn btn-danger">Search</button>
           </div>
         </div>
       </form>
     </div>
   )
 }
}
export default NaveBar;
