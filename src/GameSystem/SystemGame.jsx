import React, { useEffect , useContext } from "react";
import '../Styles/Arena/Game.css';
import Button_Game from "./Button";


const Game = () => {


    return ( 
        <>
            <div className="AGame">
                <div className="Player" id="palyer">

                </div>
                <div className="Computer">
                </div>
            </div>
            <div className="FotterArena">
               <Button_Game/>
            </div>
        </>
     );
}
 
export default Game;