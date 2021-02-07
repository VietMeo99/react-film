import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-single-2">
      <div className="container">
        <div className="row">
          <div className="middle-content">
            {/* <a href="#"><img className="md-logo" src="images/logo1.png" alt="img" /></a> */}
            <div className="h-60"></div>
            <img src="/images/uploads/err-img.png" alt="img" />
            <h1>Page not found</h1>
            <NavLink exact activeStyle={{
              backgroundColor: 'white',
              color: 'red'
            }} to="/" className="redbtn">GO HOME</NavLink>
            {/* <a href="index.html" className="redbtn">go hom  e</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;