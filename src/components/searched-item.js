import React, {Component} from 'react';

export default class SearchedItem extends Component{

  render(){
    return(
      <div>
        {    this.props.movies.map((movie)=>
            <div className="card">
              <img id="index_image" data-src="holder.js/100px280/thumb" alt="100%x280" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22216%22%20height%3D%22280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20216%20280%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_159f1842acf%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_159f1842acf%22%3E%3Crect%20width%3D%22216%22%20height%3D%22280%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2271.671875%22%20y%3D%22146.3%22%3E216x280%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true"/>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          )}
      </div>
    )
  }
}
