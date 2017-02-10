import React, {Component} from 'react';

const Categories = (props) =>{
  return(
    <div className="well  w3-pale-green">
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
