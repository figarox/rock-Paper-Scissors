import { createContext , useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
    const [ idPlayer , setIdPlayer ] = useState('');
    const [ idComputer , setIdComputer ] = useState('');



        return (
            <CardContext.Provider value={{idPlayer , setIdPlayer , idComputer}}>
                {children}
            </CardContext.Provider>
        );
};

export default CardContext;