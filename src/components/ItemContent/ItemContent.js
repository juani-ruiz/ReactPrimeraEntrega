import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import axios from 'axios';
import './ItemContent.css';

function ItemContent() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios('https://breakingbadapi.com/api/characters').then((res) => {
            //console.log(res.data)
            setCharacters(res.data)
    });

    }, []);
    return (
        <div className="ItemContent-container">
            {characters.map((char) => {
                return(
                    <div className='list-section'>
                       
                            <ItemDetail data={char} /> 
                                              
                    </div>

                );
            })}
        </div>
    )
}

export default ItemContent