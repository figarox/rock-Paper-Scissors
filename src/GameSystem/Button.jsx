import React, { useState } from "react";
import '../Page/LevelOne';
import Game from "./SystemGame";

const Button_Game = (props) => {

    const [howbutton, setHowButton] = useState("0");

    const EffectBS = (e) => {
        const id = e.target.id;

        if(id === "1"){
            setHowButton(1)
        }else if(id === "2"){
            setHowButton(2)
        }else if(id === "3"){
            setHowButton(3)
        }else{
            setHowButton("Erorr on ID")
        }

        const div = document.getElementById("BS");
        div.style.display="block";

        const out = () => {
            const div = document.getElementById("BS");
            div.style.display="none"; 
        } 
    setTimeout(out, 4000)
}



    return (  
        <div class="container">
            <div class="row">
            {props.howbutton}
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