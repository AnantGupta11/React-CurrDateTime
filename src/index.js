import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const currDate= new Date().toLocaleDateString();
// const currTime= new Date().toLocaleTimeString();
ReactDOM.render(

  <>
    <Card 
    imgsrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.64yb2vcJcd6ACVPoxzHzqAHaDR%26pid%3DApi&f=1"
    />    
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
