import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './MainRouter';

let App = ()=>{
  return(
    <BrowserRouter>
        <MainRouter />
    </BrowserRouter>
  )
}

export default App;
