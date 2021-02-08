/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { lazy, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginPage from '../authen/LoginPage';
import Register from '../authen/Register';
// const LoginPage =  lazy(() => import('./../authen/LoginPage'));
// const Register =  lazy(() => import('./../authen/Register'));
// var Modal = require("react-awesome-modal").default;

const handleScrollNav = () => {
  window.addEventListener('scroll', (event) => {
    if(window.scrollY > 370){
      document.querySelector(".ht-header")?.classList.add("sticky");
    }
    if(window.scrollY < 200) {
      document.querySelector(".ht-header")?.classList.remove("sticky");
    } 
  });
}

const Header = () => {
  const [menuMall, setMenuMall] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  handleScrollNav();
  return (
    <React.Fragment>
    {modalLogin && <LoginPage active={modalLogin} handleModal={setModalLogin}/>}
    {modalRegister && <Register active={modalRegister} handleModal={setModalRegister}/>}
    <header className="ht-header"> 
      <div className="container">
        <nav className="navbar navbar-default navbar-custom">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header logo">
            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" onClick={() => setMenuMall(!menuMall)}>
              <span className="sr-only">Toggle navigation</span>
              <div id="nav-icon1">
                <span />
                <span />
                <span />
              </div>
            </div>
            <a href="index.html"><img className="logo" src="/images/logo1.png" alt="img" width={119} height={58} /></a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1" style={{display: menuMall ? "block" : ""}}>
            <ul className="nav navbar-nav flex-child-menu menu-left">
              <li className="hidden">
                <a href="#page-top" />
              </li>
              <li className="dropdown first">
                {/* <a className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                  Home <i className="fa fa-angle-down" aria-hidden="true" />
                </a> */}
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
                  Home <i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li><a href="index.html">Home 01</a></li>
                  <li><a href="homev2.html">Home 02</a></li>
                  <li><a href="homev3.html">Home 03</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  movies<i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Movie grid<i className="ion-ios-arrow-forward" /></a>
                    <ul className="dropdown-menu level2">
                      <li><a href="moviegrid.html">Movie grid</a></li>
                      <li><a href="moviegridfw.html">movie grid full width</a></li>
                    </ul>
                  </li>
                  <li><a href="movielist.html">Movie list</a></li>
                  <li><a href="moviesingle.html">Movie single</a></li>
                  <li className="it-last"><a href="seriessingle.html">Series single</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  celebrity<i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li><a href="celebritygrid01.html">celebrity grid 01</a></li>
                  <li><a href="celebritygrid02.html">celebrity grid 02 </a></li>
                  <li><a href="celebritylist.html">celebrity list</a></li>
                  <li className="it-last"><a href="celebritysingle.html">celebrity single</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  New<i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li><a href="bloglist.html">blog List</a></li>
                  <li><a href="bloggrid.html">blog Grid</a></li>
                  <li className="it-last"><a href="blogdetail.html">blog Detail</a></li>
                </ul>
              </li>
              <li className="dropdown first">
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  community<i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li><a href="userfavoritegrid.html">user favorite grid</a></li>
                  <li><a href="userfavoritelist.html">user favorite list</a></li>
                  <li><a href="userprofile.html">user profile</a></li>
                  <li className="it-last"><a href="userrate.html">user rate</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav flex-child-menu menu-right">
              <li className="dropdown first">
                <NavLink exact activeStyle={{// backgroundColor : 'white',
                    color : 'red'}} 
                    to="/" className="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
                  Page<i className="fa fa-angle-down" aria-hidden="true" />
                </NavLink>
                <ul className="dropdown-menu level1">
                  <li><Link to="/404.html">Landing</Link></li>
                  <li><Link to="/404.html">404 Page</Link></li>
                  <li className="it-last"><Link to="/404.html">Coming soon</Link></li>
                </ul>
              </li>
              <li><Link to="/">Help</Link></li>
              <li className={modalLogin ? "btn loginLink" : "loginLink"} onClick={() => setModalLogin(true)}><a href="#">LOG In</a></li>
              <li className={modalRegister ? "btn signupLink" : "signupLink"} onClick={() => setModalRegister(true)}><a href="#">sign up</a></li>
            </ul>
          </div>
          {/* /.navbar-collapse */}  
        </nav>
        {/* top search form */}
        <div className="top-search">
          <select className="p-5">
            <option value="united">TV show</option>
            <option value="saab">Others</option>
          </select>
          <input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
        </div>
      </div>
      {/* <Modal visible={modalLogin} effect="fadeInUp" onClickAway={() => setModalLogin(false)}>
        <LoginPage active={modalLogin} />
      </Modal>  */}
    </header>
    </React.Fragment> 

  );
};

export default Header;