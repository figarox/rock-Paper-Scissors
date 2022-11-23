import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Page from './Page';
import { CardProvider } from '../Context/CardSystem';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <>
      <CardProvider>
          <Router basename={process.env.PUBLIC_URL}>
                {<Page />}
          </Router>
      </CardProvider>
    </>
  )
}
 
export default App;
