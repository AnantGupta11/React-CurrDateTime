import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();
ReactDOM.render(

  <>
  <h1>Hello, My Name is Anant Kumar</h1>
  <p>Current Date={currDate}</p>
  <p>{`Current Time=${currTime}`}</p>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
