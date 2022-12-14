import React, { useEffect , useContext } from "react";
import CardContext from "../Context/CardSystem";
import HandR from "../Pictures/hand_R.png";
import ScissorsR from "../Pictures/scissors_R.png";
import StoneR from "../Pictures/stone_R.png";

const ShowComputer = () => {

    const { idComputer } = useContext(CardContext)

    const lastElement = idComputer.slice(-1);


    function Obejct() {
        if(lastElement == 1){
            return (<div>
                 <img src={HandR} id="2" className="Computer" alt="Hand_Right"></img>
            </div>)
        }if(lastElement == 2){
            return (<div>
                 <img src={ScissorsR} id="2" className="Computer" alt="Scissors_Right"></img>

            </div>)
        }if(lastElement == 3){
            return (<div>
                 <img src={StoneR} id="3" className="Computer" alt="Stone_Right"></img>
            </div>)
        }
    }


    return ( 
        <>
            {Obejct()}
        </>
     );
}
 
export default ShowComputer;