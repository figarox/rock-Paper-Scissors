import React, { useState , useContext, createContext } from "react";
import '../Page/LevelOne';
import CardContext from "../Context/CardSystem";

const Button_Game = () => {

    const {addToCard} = useContext(CardContext)
 
    const [HowNumberButton, setHowNumberButton] = useState(0);

    const outEffect = () => {
        const div = document.getElementById("BS");
        div.style.display = 'none';
    }      
    setTimeout(outEffect, 5250)

    const EffectBS = (e) => {
            const id = e.target.id;

            const div = document.getElementById("BS");
                div.classList.remove('disable');
                div.classList.add('active');
                div.style.display = 'block';        
            
            if(id === "1"){
                return addToCard(1)
            }else if(id === "2"){
                return addToCard(2)
            }else if(id === "3"){
                return addToCard(3)
            }else{
                return {count: setHowNumberButton("Error id")}
            }            

            
        }
        const out = () => {
            const div = document.getElementById("BS");
            div.classList.remove('active');
            div.classList.add('disable');
        } 
setTimeout(out, 4000)


    

    return (  
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                            <div className="ButtonWarOne" onClick={EffectBS} id="1">
                            
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarTwo" onClick={EffectBS} id="2">
                                
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarThree" onClick={EffectBS} id="3">
                                
                                </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                two of three columns
                </div>
            </div>
        </div>
    );
}
 
export default Button_Game;