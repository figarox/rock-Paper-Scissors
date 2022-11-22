import { createContext , useState } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
    const [ items , setItems ] = useState('');
        const addToCard = ( id ) => {
            setItems(id)
        }

        return (
            <CardProvider.Provider value={{ id }}>
                {children}
            </CardProvider.Provider>
        );
};

export default CardContext;