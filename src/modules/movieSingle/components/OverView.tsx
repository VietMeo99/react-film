/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const OverView = () => {
  return (
    <div id="overview" style={{display: "block"}} className="tab active">
      <div className="row"> 
        <div className="col-md-8 col-sm-12 col-xs-12">
          <p>Tony Stark creates the Ultron Program to protect the world, but when the peacekeeping program becomes hostile, The Avengers go into action to try and defeat a virtually impossible enemy together. Earth's mightiest heroes must come together once again to protect the world from global extinction.</p>
          <div className="title-hd-sm">
            <h4>Videos &amp; Photos</h4>
            <a href="#" className="time">All 5 Videos &amp; 245 Photos <i className="ion-ios-arrow-right" /></a>
          </div>
          <div className="mvsingle-item ov-item">
            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image11.jpg"><img src="/images/uploads/image1.jpg" alt="img"/></a>
            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image21.jpg"><img src="/images/uploads/image2.jpg" alt="img"/></a>
            <a className="img-lightbox" data-fancybox-group="gallery" href="images/uploads/image31.jpg"><img src="/images/uploads/image3.jpg" alt="img"/></a>
            <div className="vd-it">
              <img className="vd-img" src="/images/uploads/image4.jpg" alt="img"/>
              <a className="fancybox-media hvr-grow" href="https://www.youtube.com/embed/o-0hcF97wy0"><img src="/images/uploads/play-vd.png" alt="img"/></a>
            </div>
          </div>
          <div className="title-hd-sm">
            <h4>cast</h4>
            <a href="#" className="time">Full Cast &amp; Crew  <i className="ion-ios-arrow-right" /></a>
          </div>
          {/* movie cast */}
          <div className="mvcast-item">											
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast1.jpg" alt="img"/>
                <a href="#">Robert Downey Jr.</a>
              </div>
              <p>...  Robert Downey Jr.</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast2.jpg" alt="img"/>
                <a href="#">Chris Hemsworth</a>
              </div>
              <p>...  Thor</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast3.jpg" alt="img"/>
                <a href="#">Mark Ruffalo</a>
              </div>
              <p>...  Bruce Banner/ Hulk</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast4.jpg" alt="img"/>
                <a href="#">Chris Evans</a>
              </div>
              <p>...  Steve Rogers/ Captain America</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast5.jpg" alt="img"/>
                <a href="#">Scarlett Johansson</a>
              </div>
              <p>...  Natasha Romanoff/ Black Widow</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast6.jpg" alt="img"/>
                <a href="#">Jeremy Renner</a>
              </div>
              <p>...  Clint Barton/ Hawkeye</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast7.jpg" alt="img"/>
                <a href="#">James Spader</a>
              </div>
              <p>...  Ultron</p>
            </div>
            <div className="cast-it">
              <div className="cast-left">
                <img src="/images/uploads/cast9.jpg" alt="img"/>
                <a href="#">Don Cheadle</a>
              </div>
              <p>...  James Rhodes/ War Machine</p>
            </div>
          </div>
          <div className="title-hd-sm">
            <h4>User reviews</h4>
            <a href="#" className="time">See All 56 Reviews <i className="ion-ios-arrow-right" /></a>
          </div>
          {/* movie user review */}
          <div className="mv-user-review-item">
            <h3>Best Marvel movie in my opinion</h3>
            <div className="no-star">
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star" />
              <i className="ion-android-star last" />
            </div>
            <p className="time">
              17 December 2016 by <a href="#"> hawaiipierson</a>
            </p>
            <p>This is by far one of my favorite movies from the MCU. The introduction of new Characters both good and bad also makes the movie more exciting. giving the characters more of a back story can also help audiences relate more to different characters better, and it connects a bond between the audience and actors or characters. Having seen the movie three times does not bother me here as it is as thrilling and exciting every time I am watching it. In other words, the movie is by far better than previous movies (and I do love everything Marvel), the plotting is splendid (they really do out do themselves in each film, there are no problems watching it more than once.</p>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12">
          <div className="sb-it">
            <h6>Director: </h6>
            <p><a href="#">Joss Whedon</a></p>
          </div>
          <div className="sb-it">
            <h6>Writer: </h6>
            <p><a href="#">Joss Whedon,</a> <a href="#">Stan Lee</a></p>
          </div>
          <div className="sb-it">
            <h6>Stars: </h6>
            <p><a href="#">Robert Downey Jr,</a> <a href="#">Chris Evans,</a> <a href="#">Mark Ruffalo,</a><a href="#"> Scarlett Johansson</a></p>
          </div>
          <div className="sb-it">
            <h6>Genres:</h6>
            <p><a href="#">Action, </a> <a href="#"> Sci-Fi,</a> <a href="#">Adventure</a></p>
          </div>
          <div className="sb-it">
            <h6>Release Date:</h6>
            <p>May 1, 2015 (U.S.A)</p>
          </div>
          <div className="sb-it">
            <h6>Run Time:</h6>
            <p>141 min</p>
          </div>
          <div className="sb-it">
            <h6>MMPA Rating:</h6>
            <p>PG-13</p>
          </div>
          <div className="sb-it">
            <h6>Plot Keywords:</h6>
            <p className="tags flex flex-wrap">
              <span className="time m-3"><a href="#">superhero</a></span>
              <span className="time m-3"><a href="#">marvel universe</a></span>
              <span className="time m-3"><a href="#">comic</a></span>
              <span className="time m-3"><a href="#">blockbuster</a></span>
              <span className="time m-3"><a href="#">final battle</a></span>
            </p>
          </div>
          <div className="ads">
            <img src="/images/uploads/ads1.png" alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView; 