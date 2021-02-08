import React, { useState } from 'react';
const ModalVideo = require('react-modal-video').default;

const MovieImg = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ModalVideo channel='youtube' width={50} autoplay isOpen={isOpen} videoId="o-0hcF97wy0" onClose={() => setOpen(false)} />
      <div className="movie-img sticky-sb" id="sticky-sb" >
        <img src="/images/uploads/movie-single.jpg" alt="img"/>
        <div className="movie-btn">	
          <div className="btn-transform transform-vertical red">
            <div><a className="item item-1 redbtn"> <i className="ion-play" /> Watch Trailer</a></div>
            <div><a  onClick={()=> setOpen(true)} className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play" /></a></div>
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