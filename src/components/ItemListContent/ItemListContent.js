import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';
import './ItemListContent.css';
import { Link } from 'react-router-dom';

function ItemListContent() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios('https://breakingbadapi.com/api/characters').then((res) => {
           
            setCharacters(res.data)
    });

    }, []);
    return (
        <div className='ItemList-container'>
            {characters.map((char) => {
                return(
                    <div className='list-section'>
                        <Link to={`/detail/${char.char_id}`}> 
                            <ItemList data={char} /> 
                        </Link>                       
                    </div>
                   



                );
            })}
        </div>
    )
}

export default ItemListContent
