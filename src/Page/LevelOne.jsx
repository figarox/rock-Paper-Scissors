import React from "react";
import '../Styles/App.css'
import '../Styles/Arena/Arena1.css';

const LevelOne = () => {

    const AnimationButton = () => {
        
    }


    return ( 
        <>
            <div className="Body">
                <div className="Arena">
                    <div className="FotterArena">
                         <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="row justify-content-md-center">
                                        <div class="col col-lg-2">
                                            <div className="ButtonWarOne">

                                            </div>
                                        </div>
                                        <div class="col col-lg-2">
                                             <div className="ButtonWarTwo">
                                                
                                            </div>
                                        </div>
                                        <div class="col col-lg-2">
                                              <div className="ButtonWarThree">
                                                
                                              </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                two of three columns
                                </div>
                            </div>
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