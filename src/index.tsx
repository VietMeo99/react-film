import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import App from './App';
import store from './store';
import Loading from "./modules/layout/Loading";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
    </Provider> 
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
