import React from 'react';

const SliderMoviesItems = () => {
  return (
    <div className="slider movie-items">
      <div className="container">
        <div className="row">
          <div className="social-link">
            <p>Follow us: </p>
            <a href="#"><i className="ion-social-facebook" /></a>
            <a href="#"><i className="ion-social-twitter" /></a>
            <a href="#"><i className="ion-social-googleplus" /></a>
            <a href="#"><i className="ion-social-youtube" /></a>
          </div>
          <div className="slick-multiItemSlider m-5">
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider1.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="blue"><a href="#">Sci-fi</a></span>
                </div>
                <h6><a href="#">Interstellar</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider2.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="yell"><a href="#">action</a></span>
                </div>
                <h6><a href="#">The revenant</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider3.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="green"><a href="#">comedy</a></span>
                </div>
                <h6><a href="#">Die hard</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider4.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                </div>
                <h6><a href="#">The walk</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider1.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="blue"><a href="#">Sci-fi</a></span>
                </div>
                <h6><a href="#">Interstellar</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <a href="#"><img src="images/uploads/slider2.jpg" alt="img" width={285} height={437} /></a>
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="yell"><a href="#">action</a></span>
                </div>
                <h6><a href="#">The revenant</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <img src="images/uploads/slider3.jpg" alt="img" width={285} height={437} />
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="green"><a href="#">comedy</a></span>
                </div>
                <h6><a href="#">Die hard</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <img src="images/uploads/slider4.jpg" alt="img" width={285} height={437} />
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
                </div>
                <h6><a href="#">The walk</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
            <div className="movie-item">
              <div className="mv-img">
                <img src="images/uploads/slider3.jpg" alt="img" width={285} height={437} />
              </div>
              <div className="title-in">
                <div className="cate">
                  <span className="green"><a href="#">comedy</a></span>
                </div>
                <h6><a href="#">Die hard</a></h6>
                <p><i className="ion-android-star" /><span>7.4</span> /10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderMoviesItems;