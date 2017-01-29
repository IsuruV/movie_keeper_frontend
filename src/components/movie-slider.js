import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Slider from 'react-slick';
import MovieIcon from './movie-icon';

export default class MovieSlider extends Component{

  render(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
  };
    return(
    <div className="w3-center">
      <Slider {...settings} autoplay={true}>
        <div><MovieIcon/></div>
        <div><MovieIcon/></div>
        <div><MovieIcon/></div>
        <div><MovieIcon/></div>
        <div><MovieIcon/></div>
        <div><MovieIcon/></div>
      </Slider>
    </div>
    )
  }
}
