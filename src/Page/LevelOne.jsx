import React, { useContext } from "react";
import '../Styles/App.css'
import '../Styles/Arena/Arena1.css';
import Blob from "../Styles/svg/blobanimation.svg";

import Button_Game from "../GameSystem/Button";
import Game from "../GameSystem/SystemGame";
import { SystemGameContext } from "../Context/SystemGame";


const LevelOne = () => {
    
    return ( 
        <SystemGameContext.Provider value={{}}>
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
        </SystemGameContext.Provider>
     );
}
 
export default LevelOne;