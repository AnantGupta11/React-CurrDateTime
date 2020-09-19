import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from './Sdata';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function ncard(val){
    return(
      <Card 
      imgsrc={val.imgsrc}
      category={val.category}
      title={val.title}
      link={val.link}
      />
    );
}


ReactDOM.render(

  <>
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
