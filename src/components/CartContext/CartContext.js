import React, {createContext, useState} from 'react';


export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([   
    
        
    ]);

    return(
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
        
    )
}

//creo contexto
//creo componente provider
//return en contexto con <CartContext.Provider>
//props.children
//pasar props dentro del componente provider
//importar provider y envolver ls App