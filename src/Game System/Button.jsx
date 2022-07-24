import React from "react";
import '../Page/LevelOne';

const Button_Game = () => {

    
    const ButtonWarOne = () => {
        const div = document.getElementById("BS");
        div.style.display="block";

        const none = () => {
            const div = document.getElementById("BS");
            div.style.display="none"; 
            console.log("czyszcze ekran")
        }

        setTimeout(none, 6000)
    }

    const ButtonWarTwo = () => {
        console.log("twa")
    }
    const ButtonWarThree = () => {
        console.log("trzy")
    }


    return (  
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-md-center">
                        <div class="col col-lg-2">
                            <div className="ButtonWarOne" onClick={ButtonWarOne} id="ButtonWarOne">
                            
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarTwo" onClick={ButtonWarTwo}>
                                
                            </div>
                        </div>
                        <div class="col col-lg-2">
                                <div className="ButtonWarThree" onClick={ButtonWarThree}>
                                
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