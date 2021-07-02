import React, {createContext, useState} from 'react';


export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([   

        
        {id:1, image:"https://http2.mlstatic.com/D_NQ_NP_871565-MLA45740759361_042021-O.webp", title:"Venzo FX7", price:"80000", description:"Cuadro Fx7 naranja talle S"},
        {id:2, image:"https://http2.mlstatic.com/D_NQ_NP_790802-MLA41258952373_032020-O.webp", title:"Zenith BMX", price:"10000", description:"Cuadro Zenith naranja talle L"},
        {id:3, image:"https://http2.mlstatic.com/D_NQ_NP_847201-MLA32884547437_112019-O.webp", title:"BMX", price:"10000", description:"Cuadro bmx"}
        
        
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