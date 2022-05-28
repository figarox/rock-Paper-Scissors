import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Nav';
import Page from './Page';
import LevelOne from '../Page/LevelOne';
import LevelTwo from '../Page/LevelTwo';


class App extends Component{
  render(){
    return(
      <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            {<Page />}
        </div>
      </Router>
    )
  }
}

export default App;
