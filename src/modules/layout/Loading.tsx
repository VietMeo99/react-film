import React from 'react';

const Loading = () => {
  return (
    // <!--preloading-->
    <div id="preloader">
      <img className="logo mx-auto" src="/images/logo1.png" alt="loading" width={119} height={58} />
      <div id="status">
        <span />
        <span />
      </div>
    </div>

  );
};

export default Loading;