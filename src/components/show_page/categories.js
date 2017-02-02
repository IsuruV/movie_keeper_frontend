import React, {Component} from 'react';

const Categories = (props) =>{
  return(
    <div className="well  w3-pale-green">
        <h4 className="w3-center">Blog Categories</h4>
        <div className="w3-center">
            <div >
                <ul className="list-unstyled">
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Categories;
