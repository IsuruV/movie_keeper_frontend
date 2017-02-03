import React, {Component} from 'react';

const Categories = (props) =>{
  return(
    <div className="well  w3-pale-green">
        <h4 className="w3-center">Genres</h4>
        <div className="w3-center">
            <div >
                <ul className="list-unstyled">
                    {props.genres.map((genre =>
                      <li>{genre.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Categories;
