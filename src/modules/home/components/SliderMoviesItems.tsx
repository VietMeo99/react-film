import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const SliderMoviesItems = () => {
  const responsive: any = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 9 },
  };
  const handleDragStart = (e: any) => e.preventDefault();
  const items = [
    <div className="movie-item p-3" onDragStart={handleDragStart} >
      <div className="mv-img">
        <a href="#"><img src="images/uploads/slider1.jpg" alt="img"/></a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span>
        </div>
        <h6><a href="#">Interstellar</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <a href="#"><img src="images/uploads/slider2.jpg" alt="img"/></a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="yell"><a href="#">action</a></span>
        </div>
        <h6><a href="#">The revenant</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
     <div className="mv-img">
       <a href="#"><img src="images/uploads/slider4.jpg" alt="img"/></a>
     </div>
     <div className="title-in">
       <div className="cate">
         <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
       </div>
       <h6><a href="#">The walk</a></h6>
       <p><i className="ion-android-star" /><span>7.4</span> /10</p>
     </div>
   </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <a href="#"><img src="images/uploads/slider1.jpg" alt="img"/></a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span>
        </div>
        <h6><a href="#">Interstellar</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <a href="#"><img src="images/uploads/slider3.jpg" alt="img"/></a>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="yell"><a href="#">action</a></span>
        </div>
        <h6><a href="#">The revenant</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider3.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="green"><a href="#">comedy</a></span>
        </div>
        <h6><a href="#">Die hard</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider2.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider4.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider1.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider2.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider4.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider1.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
    ,<div className="movie-item p-3" onDragStart={handleDragStart}>
      <div className="mv-img">
        <img src="images/uploads/slider4.jpg" alt="img"/>
      </div>
      <div className="title-in">
        <div className="cate">
          <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
        </div>
        <h6><a href="#">The walk</a></h6>
        <p><i className="ion-android-star" /><span>7.4</span> /10</p>
      </div>
    </div>
            
  ];
  return (
    <React.Fragment>
      <div className="slider movie-items"> 
        <div className="container">
          <div className="row">
            <div className="social-link">
              <p>Follow us: </p>
              <Link to="https://www.facebook.com/VIETDEV99" target="_blank"><i className="ion-social-facebook" /></Link>
              <Link to="https://www.facebook.com/VIETDEV99" target="_blank"><i className="ion-social-twitter" /></Link>
              <Link to="https://www.google.com/" target="_blank"><i className="ion-social-googleplus" /></Link>
              <Link to="https://www.youtube.com/" target="_blank"><i className="ion-social-youtube" /></Link>
            </div>
            <AliceCarousel 
              autoPlay={true} mouseTracking items={items} responsive={responsive} 
              autoPlayControls={false} disableDotsControls={true} infinite={true} autoPlayInterval={500}
            />
          </div>
        </div>
      </div>
    
    </React.Fragment>
  );
};

export default SliderMoviesItems;