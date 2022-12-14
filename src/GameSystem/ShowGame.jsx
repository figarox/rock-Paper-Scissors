import React from "react";
import '../Styles/Arena/Game.css';
import Button_Game from "./Button";
import ShowPlayer from "./ShowPlayer";
import ShowComputer from "./ShowComputer";

const Game = () => {


    return ( 
        <div className="BackGroundColor">
            <div className="AGame">
                <div className="Player">
                     <ShowPlayer/>
                </div>
                <div className="Computer">
                    <ShowComputer/>
                </div>
            </div>
            <div className="FotterArena">
               <Button_Game/>
            </div>
        </div>
     );
}
 
export default Game;