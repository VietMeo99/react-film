/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import OverView from './components/OverView';
import Reviews from './components/Reviews';
import Cast from './components/Cast';
import Media from './components/Media';
import MoviesRelated from './components/MoviesRelated';
import MovieImg from './components/MovieImg';

// const handleMovieImgMain = () => {
//   window.addEventListener('scroll', (event) => {

//   });
//   var windowWidth = window.innerWidth;
//   console.log("width : ", windowWidth);
//   if(windowWidth > 1024){
// 		var stickySidebar: any = document.getElementById('sticky-sb');
// 		var mainCt: any = document.getElementById('main-content');
// 		if (stickySidebar.length > 0) {	
// 			var stickyHeight = stickySidebar?.offsetHeight,
// 			sidebarTop = stickySidebar.offsetTop;
// 		}
// 		// on scroll move the sidebar 
// 		window.addEventListener('scroll', (event) => {
// 		  if (stickySidebar.length > 0) {	
// 		    var scrollTop = document.body.scrollTop;  
		            
// 		    if (sidebarTop < scrollTop) {
// 		      stickySidebar.css('top', scrollTop - sidebarTop + 80);
// 		      // stop the sticky sidebar at the footer to avoid overlapping
// 		      var sidebarBottom = stickySidebar.offsetTop + stickyHeight, 
// 		        stickyStop = mainCt.offsetTop + mainCt?.offsetHeight;
// 		      if (stickyStop < sidebarBottom) {
// 		        var stopPosition = mainCt?.offsetHeight - stickyHeight + 130;
// 		        stickySidebar.style.top = stopPosition;
// 		      }
// 		    }
// 		    else {
//           stickySidebar.style.top = 0;
// 		    } 
// 		  }
// 		});
// 		window.addEventListener('resize', () => {
// 		  if (stickySidebar.length > 0) {	
// 		    stickyHeight = stickySidebar.height();
// 		  }
// 		});
// 	}
// } 
var windowWidth = window.innerWidth;

const MovieSingle = () => { 
  const [optionInfo, setOptionInfo] = useState<number>(0);
  const [idMovie, setIdMovie] = useState<number>(0);
  const [topSticky, setTopSticky] = useState<number>(0);
  const handleMovieImgMain = () => {
    window.addEventListener('scroll', (event) => {
      var scrollTop = document.body.scrollTop
      setTopSticky(scrollTop + 130);
      if(windowWidth > 1020 && scrollTop > 100){
      }
    });
    return topSticky;
  }
  useEffect(() => {
    // handleMovieImgMain();
    const pathname = window.location.pathname;
    const match = pathname.match(/\d+.html$/);
    if (match) {
      setIdMovie(parseInt(match[0]));
      console.log("id: ", idMovie); 
    }
    return () => {
      
    }
  }, [idMovie])
  return (
    <React.Fragment>
      <div className="hero mv-single-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </div>

      <div className="page-single movie-single movie_single">
        <div className="container">
          <div className="row ipad-width2">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <MovieImg />
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="movie-single-ct main-content" id="main-content">
                <h1 className="bd-hd">Skyfall: Quantum of Spectre <span>2015</span></h1>
                <div className="social-btn">
                  <a href="#" className="parent-btn"><i className="ion-heart" /> Add to Favorite</a>
                  <div className="hover-bnt">
                    <a href="#" className="parent-btn"><i className="ion-android-share-alt" />share</a>
                    <div className="hvr-item">
                      <a href="#" className="hvr-grow"><i className="ion-social-facebook" /></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-twitter" /></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-googleplus" /></a>
                      <a href="#" className="hvr-grow"><i className="ion-social-youtube" /></a>
                    </div>
                  </div>		
                </div>
                <div className="movie-rate">
                  <div className="rate">
                    <i className="ion-android-star" />
                    <p><span>8.1</span> /10<br />
                      <span className="rv">56 Reviews</span>
                    </p>
                  </div>
                  <div className="rate-star">
                    <p>Rate This Movie:</p>
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star" />
                    <i className="ion-ios-star-outline" />
                  </div>
                </div>
                <div className="movie-tabs">
                  <div className="tabs">
                    <ul className="tab-links tabs-mv">
                      <li className={optionInfo === 0 ? "active" : ""} onClick={() => setOptionInfo(0)}><a>Overview</a></li>
                      <li className={optionInfo === 1 ? "active" : ""} onClick={() => setOptionInfo(1)}><a> Reviews</a></li>
                      <li className={optionInfo === 2 ? "active" : ""} onClick={() => setOptionInfo(2)}><a> Cast &amp; Crew </a></li>
                      <li className={optionInfo === 3 ? "active" : ""} onClick={() => setOptionInfo(3)}><a> Media</a></li> 
                      <li className={optionInfo === 4 ? "active" : ""} onClick={() => setOptionInfo(4)}><a> Related Movies</a></li>                        
                    </ul>
                    <div className="tab-content">
                      {optionInfo === 0 && <OverView />}
                      {optionInfo === 1 && <Reviews />}
                      {optionInfo === 2 && <Cast />}
                      {optionInfo === 3 && <Media />}
                      {optionInfo === 4 && <MoviesRelated />}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </React.Fragment>

  );
};

export default React.memo(MovieSingle); 