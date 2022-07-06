import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Menu/BoxLevel.css';

const NavBar = () => {

    return ( 
            <div className="MainBox">
                  <div class="container">
                        <div class="row">
                              <div class="col">
                                    <div className="card-level">
                                          <Link to="/LevelTwo">
                                                <div className="Button">
                                                      <a>Start</a>
                                                </div>
                                          </Link>
                                    </div>
                              </div>
                              <div class="col">
                                    <div className="card-level">
                                          <Link to="/LevelTwo">
                                                <div className="Button">
                                                      <a>Start</a>
                                                </div>
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
     );
}
 
export default NavBar;