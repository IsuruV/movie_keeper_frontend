import React, { Component } from 'react';
import Navigation from './nav-bar'
import NaveBar from './nav';
import Footer from './footer';
import MovieSlider from './movie-slider';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      <Navigation/>
      <br/>
        <NaveBar/>
        <Footer/>
        <MovieSlider/>
        <br/><br/><br/>
        <MovieSlider/>
        <br/><br/><br/>
        <MovieSlider/>
        <br/><br/><br/>
      </div>
    );
  }
}
