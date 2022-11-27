import React, { useEffect , useContext } from "react";
import CardContext from "../Context/CardSystem";


const ShowPlayer = () => {

    const { idPlayer } = useContext(CardContext)

    const lastElement = idPlayer.slice(-1);


    return ( 
        <>
            {lastElement}
        </>
     );
}
 
export default ShowPlayer;