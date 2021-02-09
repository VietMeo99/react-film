/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';

import 'react-alice-carousel/lib/alice-carousel.css';
import "./styles/App.scss";
import "./styles/app.less"; 
import Footer from './modules/layout/Footer';
import Header from './modules/layout/Header';
import { ListRoutes, routes } from './modules/routes/Route';
// import { Redirect, Switch } from 'react-router';
// import PublicRoute from './modules/layout/PublicRoute';
import {api} from "./utils/callAPI";
import { useEffect } from 'react';
// ref : https://boostifythemes.com/demo/html/bustter/index.html

function App() {  
  // const renderRoutes = (routes: any[]) => {
  //   let result = null;
  //   if (routes.length > 0) { 
  //     result = routes.map((route: any, index: number) => {
  //       const { path, exact, layout, component } = route; 
  //       return (
  //         <PublicRoute
  //           key={index}
  //           path={path} 
  //           exact={exact} 
  //           layout={layout}
  //           component={component}
  //         />
  //       );
  //     });
  //   }
  //   return (
  //     <Switch>
  //       {result}
  //       <Redirect to="/404.html" />
  //     </Switch>
  //   )
  // }
  // , []);
  const { addToast } = useToasts()
  useEffect(() => {
    const rs = api;
    console.log("rs : ", rs);
    addToast('Saved Successfully', { appearance: 'success' })
    return () => {
      addToast("error.message", { appearance: 'error' })
    }
  }, [])
  return (
    <div>
      <Router>
        <ToastProvider>
          <Header />
          <React.Fragment>
            {/* {renderRoutes(routes)}  */}
            <ListRoutes />
          </React.Fragment>
          <Footer />
        </ToastProvider>
      </Router>
    </div>
  );
}

export default App;