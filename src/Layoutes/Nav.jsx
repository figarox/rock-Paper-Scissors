import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <div>
              <Link to="/LevelOne">
                    <li><a>LevelOne</a></li>
              </Link>
              <Link to="/LevelTwo">
                    <li><a>LevelTwo</a></li>
              </Link>
        </div>
     );
}
 
export default NavBar;