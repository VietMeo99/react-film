import React from 'react';
import { Route } from 'react-router';

type propsPublicRoute = {
  // component: JSX.Element,
  component: any,
  layout: any,
  key: number,
  path: string,
  exact: any
}
const PublicRoute = (propsMain: propsPublicRoute ) => {
  return (
    <Route
      path={propsMain.path}
      exact={propsMain.exact}
      // render={props => (
      //   <propsMain.layout>
      //     <propsMain.component {...props} />
      //   </propsMain.layout>
      // )}
    />
  );
};

export default PublicRoute;