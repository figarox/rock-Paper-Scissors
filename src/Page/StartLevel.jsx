import React from "react";
import BackGroundAnimation from "../Layoutes/Background";
import '../Styles/Menu/StartLevel.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const StartLevel = () => {

    return (
        <>
            <div className="CheckLevelCenter">
             <Link to="/ChangeLevel">
                 <div className="ButtomStart">Start</div>
              </Link>
            </div>
        </>
      );
}
 
export default StartLevel;