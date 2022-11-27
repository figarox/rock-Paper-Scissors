import React from "react";
import '../Styles/Arena/Game.css';
import Button_Game from "./Button";
import ShowPlayer from "./ShowPlayer";


const Game = () => {


    return ( 
        <div className="BackGroundColor">
            <div className="AGame">
                <div className="Player" id="palyer">
                     <ShowPlayer/>
                </div>
                <div className="Computer">

                </div>
            </div>
            <div className="FotterArena">
               <Button_Game/>
            </div>
        </div>
     );
}
 
export default Game;