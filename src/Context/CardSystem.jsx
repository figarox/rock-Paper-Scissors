import { createContext , useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
    const [ idPlayer , setIdPlayer ] = useState('');
    const [ idComputer , setIdComputer ] = useState('');

    const [ scoreP , setScoreP ] = useState(0);
    const [ scoreC , setScoreC ] = useState(0);

    const [ Mw , setMw ] = useState("");


    function SystemGame() {
        const min = 1;
        const max = 3;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
       
            setIdComputer(setIdComputer => [...setIdComputer , rand])
    }

    function Win() {
        const lastElementPlayer = idPlayer.slice(-1)[0];
        const lastElementComputer = idComputer.slice(-1)[0];


        if(lastElementPlayer == 1 && lastElementComputer == 3){
            setMw("Win")
            setScoreP(scoreP + 1)

            }else if(lastElementPlayer == 1 && lastElementComputer == 2){
                setMw("Lost")
                setScoreC(scoreC + 1)

                    }else if(lastElementPlayer == 2 && lastElementComputer == 1){
                        setMw("Win")
                        setScoreP(scoreP + 1)

                        }else if(lastElementPlayer == 2 && lastElementComputer == 3){
                            setMw("Lost")
                            setScoreC(scoreC + 1)

                            }else if(lastElementPlayer == 3 && lastElementComputer == 1){
                                setMw("Lost")
                                setScoreC(scoreC + 1)

                                }else if(lastElementPlayer == 3 && lastElementComputer == 2){
                                    setMw("Win")
                                    setScoreP(scoreP + 1)

                                    }else if(lastElementPlayer == 1 && lastElementComputer == 1){
                                        setMw("Draw")

                                        }else if(lastElementPlayer == 2 && lastElementComputer == 2){
                                            setMw("Draw")

                                            }else if(lastElementPlayer == 3 && lastElementComputer == 3){
                                                setMw("Draw")

                                                    }else(
                                                        console.log("Error in system game.Try Again")
                                                    )
    }
   


        return (
            <CardContext.Provider value={{idPlayer , setIdPlayer , idComputer , SystemGame , scoreP , scoreC , Win , Mw}}>
                {children}
            </CardContext.Provider>
        );
};

export default CardContext;