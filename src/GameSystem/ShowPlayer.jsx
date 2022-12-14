import React, { useEffect , useContext } from "react";
import CardContext from "../Context/CardSystem";
import HandL from "../Pictures/hand_L.png";
import Scissors from "../Pictures/scissors_L.png";
import Stone from "../Pictures/stone_L.png";

const ShowPlayer = () => {

    const { idPlayer } = useContext(CardContext)

    const lastElement = idPlayer.slice(-1);

    function Obejct() {
        if(lastElement == 1){
            return (<div>
                 <img src={HandL} id="2" className="Player" alt="Scissors_Left"></img>
            </div>)
        }if(lastElement == 2){
            return (<div>
                 <img src={Scissors} id="2" className="Player" alt="Scissors_Left"></img>

            </div>)
        }if(lastElement == 3){
            return (<div>
                 <img src={Stone} id="3" className="Player" alt="HandStone_Left"></img>
            </div>)
        }
    }


    return ( 
        <>
            {Obejct()}
        </>
     );
}
 
export default ShowPlayer;