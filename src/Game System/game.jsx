import React from "react";
import '../Styles/Arena/Game.css';

const Game = () => {


    return ( 
        <>
            <div className="AGame">
                <div className="Player" id="palyer">
                    <p>0</p>
                </div>
                <div className="Computer">
                   <p>0</p>
                </div>
            </div>
        </>
     );
}
 
export default Game;