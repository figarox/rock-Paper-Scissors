import React from "react";
import '../Styles/Menu/StartLevel.css'
import { Link } from 'react-router-dom';

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