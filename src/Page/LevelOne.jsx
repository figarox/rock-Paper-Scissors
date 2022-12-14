import React, { useContext } from "react";
import '../Styles/App.css'
import '../Styles/Arena/Arena1.css';
import Blob from "../Styles/svg/blobanimation.svg";
import Game from "../GameSystem/ShowGame.jsx";
import CardContext from "../Context/CardSystem";

const LevelOne = () => {
    
    const { Win , Mw } = useContext(CardContext)


    const outEffect = () => {
        const div = document.getElementById("BS");
        div.style.display = 'none';
    }      

    const out = () => {
        const div = document.getElementById("BS");
        div.classList.remove('active');
        div.classList.add('disable');
        setTimeout(outEffect, 2000)
        Win();
    } 



    return ( 
        <>
            <div className="BlackScreen" id="BS">
                <div className="BS_icon">
                   <img src={Blob} alt="Blob" />
                   <div>{Mw}</div>
                   <div className="ButtonOnBlob" onClick={out}>ok</div>
                </div>
            </div>
            <div className="BodyColor">
                <div className="Arena">
                    <Game/>
                 </div>
            </div>
        </>
     );
}
 
export default LevelOne;