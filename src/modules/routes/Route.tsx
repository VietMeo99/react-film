import React, {lazy} from 'react'
import {Switch, Route, Redirect} from "react-router";

import { PublicLayout } from '../layout/PublicLayout';
import { Defauult_Path, User_Path } from '../../constants/url';
// import LoginPage from './../authen/LoginPage';
// import Register from './../authen/Register';

const Home = lazy(() => import("../home/Home"));
const NotFound = lazy(() => import("../notFound/NotFound"));

export const ListRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/loading" component={Register} /> */}
      <Route exact path="/404.html" component={NotFound} />
      <Redirect to="404.html"/>  
    </Switch> 
  )
}

export const routes = [
  {
    path: Defauult_Path,
    exact: true,
    layout: PublicLayout, 
    component: Home
  },
  {
    path: User_Path,
    exact: true,
    layout: PublicLayout,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    layout: PublicLayout,
    component: Home
  },
  {
    path: '/404.html',
    layout: PublicLayout,
    component: NotFound
  }
]
