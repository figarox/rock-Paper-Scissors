import React from "react";
import '../Styles/App.css'
import '../Styles/Arena/Arena1.css';
import Game from "../Game System/game";
import Button_Game from "../Game System/Button";

const LevelOne = () => {
    return ( 
        <>
            <div className="BlackScreen hover"></div>
            <div className="Body">
                <div className="Arena">

                    <Game/>
                    <div className="FotterArena">
                         <Button_Game/>
                        <div class="custom-shape-divider-bottom-1658162932">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                            </svg>
                        </div>
                    </div>
                 </div>
                 <div className="Table">
                     <div className="TableFirst">
                            <a>0</a>
                     </div>
                     <div className="TableSecond">
                             <a>0</a>
                     </div>
                 </div>
            </div>
        </>
     );
}
 
export default LevelOne;