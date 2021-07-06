import React, {useEffect, useState} from 'react';
import FormComponent from '../components/FormComponent/FormComponent';
 
import { db } from '../firebase';

const Products = () => {
    const [products, setProducts] = useState([]);


    const addOrEdit = async (object) => {
        console.log(object);
        await db.collection('Products').doc().set(object);
        console.log("nuevo producto agregado")
    }

    const getProducts = () => {        
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                console.log(doc.id);
                docs.push({ ...doc.data(), id: doc.id });
                console.log(docs);
            });
            setProducts(docs)
        });

    };
    
    useEffect(() => {

        getProducts()

    }, []);

    return (
        <div>
            <h1>Products</h1>
            <FormComponent addOrEdit={addOrEdit} />
            {products.map(item => (
                <div>
                    <h4>{item.descripcion}</h4>
                    <p>{item.precio}</p>
                </div>
                
            ))}
        </div>

    )  

}

export default Products