/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Rodal = require("rodal").default;

const MovieImg = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      {/* https://www.youtube.com/embed/o-0hcF97wy0  L61p2uyiMSo*/}
      {isOpen && <Rodal visible={isOpen} animation="slideUp" width="800" height="500"
        closeOnEsc={true} onClose={() => setOpen(false)}>
        <iframe 
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
          title="Youtube video player"
          src={`https://www.youtube.com/embed/3Zh6aSA0Nl0?autoplay=1`}
        ></iframe>
      </Rodal>}
      <div className="movie-img sticky-sb" id="sticky-sb" >
        <img src="/images/uploads/movie-single.jpg" alt="img"/>
        <div className="movie-btn">	
          <div className="btn-transform transform-vertical red" onClick={()=> setOpen(true)}>
            <div><a className="item item-1 redbtn"> <i className="ion-play" /> Watch Trailer</a></div>
            <div><a className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play" /></a></div>
          </div>
          <Link to="/movie/slug.id.html" className="btn-transform transform-vertical">
            <div><a href="#" className="item item-1 yellowbtn"> <i className="ion-card" /> Xem Ngay</a></div>
            <div><a href="#" className="item item-2 yellowbtn"><i className="ion-card" /></a></div>
          </Link>
        </div>
      </div>
      </React.Fragment>

  );
};

export default MovieImg;