import React, { useEffect } from "react";
import '../Styles/Arena/Game.css';
import Button_Game from "./Button";

const Game = (props) => {

    const hook = props.howbutton
    return ( 
        <>
            <div className="AGame">
                <div className="Player" id="palyer">
                    {hook}
                </div>
                <div className="Computer">
                   2
                </div>
            </div>
            <div className="FotterArena">
               <Button_Game/>
            </div>
        </>
     );
}
 
export default Game;