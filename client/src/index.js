/**
 * ********************************************************
 *
 * @module  index.js
 * @author  astaiglesia
 * @date    2022
 * @description The React application's entry point to the DOM.
 * ReactDOM hangs our app onto #root 
 * 
 * to implement Redux and React Router
 * - install react-redux and react-router-dom libraries 
 * - set up a redux store
 * - uncomment as necessary below 
 *
 * ********************************************************
 */

// ---libraries
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// ---assets
// import store from './app/store';

// ---components
import App from './App';

// wrapped with redux store provider and BrowserRouter [v6 router]
render( 
//   <BrowserRouter>
//     <Provider store={store}>
      <App/>,
//     </Provider>
//   </BrowserRouter>,
  document.getElementById('root')
);