import { createContext , useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
    const [ items , setItems ] = useState('');
        const addToCard = ( id ) => {
            setItems(id)
        }

        return (
            <CardContext.Provider value={{items , addToCard}}>
                {children}
            </CardContext.Provider>
        );
};

export default CardContext;