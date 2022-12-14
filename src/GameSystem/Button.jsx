import React, { useState , useContext, createContext } from "react";
import '../Page/LevelOne';
import CardContext from "../Context/CardSystem";
import HandL from "../Pictures/hand_L.png";
import Scissors from "../Pictures/scissors_L.png";
import Stone from "../Pictures/stone_L.png";


const Button_Game = ( id ) => {
    const { setIdPlayer , SystemGame , scoreP , scoreC , Win} = useContext(CardContext)

    const EffectBS = (e) => {
        
            const id = e.target.id;

            if(id === "1"){
                setIdPlayer(setIdPlayer => [...setIdPlayer , 1])
            }else if(id === "2"){
                setIdPlayer(setIdPlayer => [...setIdPlayer , 2])
            }else if(id === "3"){
                setIdPlayer(setIdPlayer => [...setIdPlayer , 3])
            }else{
                 console.log("Error id ")
            }          
            SystemGame();

            //Effect blob show and hiden

            const div = document.getElementById("BS");
                div.classList.remove('disable');
                div.classList.add('active');
                div.style.display = 'block';        
    }



    

    return (  
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                            <div className="ButtonWarOne" onClick={EffectBS}>
                                <img src={HandL} id="1" className="pictureToButtonGame" alt="Hand_Left"></img>
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarTwo" onClick={EffectBS}>
                                 <img src={Scissors} id="2" className="pictureToButtonGame" alt="Scissors_Left"></img>
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarThree" onClick={EffectBS}>
                                    <img src={Stone} id="3" className="pictureToButtonGame" alt="HandStone_Left"></img>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div className="Score">
                    {scoreP}
                    </div>
                    <div className="Score">
                    {scoreC}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Button_Game;