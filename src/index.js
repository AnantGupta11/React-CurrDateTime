import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const currDate= new Date().toLocaleDateString();
// const currTime= new Date().toLocaleTimeString();
ReactDOM.render(

  <>
    <Card 
    imgsrc={Sdata[0].imgsrc}
    category={Sdata[0].category}
    title={Sdata[0].title}
    link={Sdata[0].link}
    />  
    <Card 
    imgsrc={Sdata[1].imgsrc}
    category={Sdata[1].category}
    title={Sdata[1].title}
    link={Sdata[1].link}
    />
    <Card 
    imgsrc={Sdata[2].imgsrc}
    category={Sdata[2].category}
    title={Sdata[2].title}
    link={Sdata[2].link}
    />
    <Card 
    imgsrc={Sdata[3].imgsrc}
    category={Sdata[3].category}
    title={Sdata[3].title}
    link={Sdata[3].link}
    />
    <Card 
    imgsrc={Sdata[4].imgsrc}
    category={Sdata[4].category}
    title={Sdata[4].title}
    link={Sdata[4].link}
    /> 

  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
