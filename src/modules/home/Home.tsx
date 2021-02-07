import React from 'react';
import SliderMoviesItems from './components/SliderMoviesItems';
import MoviesItem from './components/MoviesItem';
import LastNew from './components/LastNew';

const Home = () => {
  return (
    <React.Fragment>
      {/* slider  */}
      <SliderMoviesItems />
      {/* Movies Items */}
      <MoviesItem />
      {/* Trailer */}
      {/* <Trailer /> */}
      {/* Last new */}
      <LastNew />
    </React.Fragment>
  );
};

export default Home;