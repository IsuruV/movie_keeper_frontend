import React, {Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';

// const Stars = (props)=>{
// return (
//   <StarRating name="airbnb-rating" caption="Rate your stay!" totalStars={5} rating={5} disabled={true}/>
// )
// }

class Stars extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        <tr>
        <td>
        <StarRatingComponent
          name="rate2"
            editing={false}
            starCount={10}
            value={this.props.movie.vote_average}
            />
          </td>
          <td>
            <i id="small">({this.props.movie.vote_average})/10</i>
          </td>
          </tr>
          <tr>
          <td><i id="small">Run Time: {this.props.movie.runtime} minutes</i></td>
          </tr>
          </tbody>
      </table>
    );
  }
}

export default Stars;
