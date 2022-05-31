import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Nav';
import Page from './Page';
import LevelOne from '../Page/LevelOne';
import LevelTwo from '../Page/LevelTwo';


const App = () => {
  return(
    <Router basename={process.env.PUBLIC_URL}>
          {<Page />}
    </Router>
  )
}
 
export default App;
