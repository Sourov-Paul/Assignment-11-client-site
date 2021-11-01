import React from 'react';
import "./NotFound.css"
const NotFound = () => {
    return (
      <div className="main_body">
        <div className="spider">
          <i className="fas fa-spider"></i>
        </div>
        <div className="container main_container">
          <h1>
            <span className="num">4 </span>
            <i className="fas fa-cog"></i>
            <span className="num"> 4</span>
          </h1>
          <p>Oops , Page not found</p>
        </div>
      </div>
    );
};

export default NotFound;