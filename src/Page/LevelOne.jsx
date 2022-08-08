import React from "react";
import '../Styles/App.css'
import '../Styles/Arena/Arena1.css';
import Game from "../GameSystem/SystemGame";
import Button_Game from "../GameSystem/Button";
import Blob from "../Styles/svg/blobanimation.svg";

const LevelOne = () => {
    return ( 
        <>
            <div className="BlackScreen" id="BS">
                <div className="BS_icon">
                   <img src={Blob} alt="Blob" />
                </div>
            </div>
            <div className="Body">
                <div className="Arena">
                    <Game/>
                 </div>
            </div>
        </>
     );
}
 
export default LevelOne;