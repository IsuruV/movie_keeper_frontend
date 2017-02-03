import React, {Component} from 'react';
import Stars from './star-rating';

const MovieDetail = (props) =>{
  return(
  <div>
<div className="well w3-pale-green">
  <table>
    <tbody>
      <tr>
        <td>
        <h1>{`${props.movie.title} (${props.movie.release_date.slice(0,4)})`}</h1>
        <p>
          Status: {props.movie.status}
        </p>
          <Stars movie={props.movie}/>
        </td>
        <td> </td>
        <td id="mov">
        <img  src={`http://image.tmdb.org/t/p/w154/${props.movie.poster_path}`}></img>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    <hr/>
    <div id="embedded">
    <h3>Trailer</h3>
    <iframe title="YouTube video player" className="well  w3-pale-green" type="text/html"
      width="600em" height="390em" src={`http://www.youtube.com/embed/${props.movie.trailers.youtube[0]['source']}`}
      frameBorder="0" allowFullScreen></iframe>
    </div>
      <br/>
    <hr/>
    <p>{props.movie.overview}</p>
    <hr/>
  </div>
  )
}

export default MovieDetail;
