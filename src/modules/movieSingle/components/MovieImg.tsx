/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
const ModalVideo = require('react-modal-video').default;

const MovieImg = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      {/* <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        title="Youtube video player"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      ></iframe> */}
      <ModalVideo channel='youtube' width={50} autoplay isOpen={isOpen} videoId="o-0hcF97wy0" onClose={() => setOpen(false)} />
      <div className="movie-img sticky-sb" id="sticky-sb" >
        <img src="/images/uploads/movie-single.jpg" alt="img"/>
        <div className="movie-btn">	
          <div className="btn-transform transform-vertical red" onClick={()=> setOpen(true)}>
            <div><a className="item item-1 redbtn"> <i className="ion-play" /> Watch Trailer</a></div>
            <div><a className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play" /></a></div>
          </div>
          <div className="btn-transform transform-vertical">
            <div><a href="#" className="item item-1 yellowbtn"> <i className="ion-card" /> Xem Ngay</a></div>
            <div><a href="#" className="item item-2 yellowbtn"><i className="ion-card" /></a></div>
          </div>
        </div>
      </div>
      </React.Fragment>

  );
};

export default MovieImg;