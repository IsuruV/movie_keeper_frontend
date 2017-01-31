import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Slider from 'react-slick';
import MovieIcon from './movie-icon';

export default class MovieSlider extends Component{

  returnMovieIcons(){
    return this.props.movie_list.map((movie)=><div><MovieIcon img_id="image-title" movie={movie}/></div>)
  }

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
  {
    breakpoint: 768,
    settings: {
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '10px',
      slidesToShow: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1
    }
  }
]
  };
    return(
    <div className="w3-center">
      <Slider {...settings} autoplay={true}>
        {this.returnMovieIcons()}
      </Slider>
    </div>
    )
  }
}
