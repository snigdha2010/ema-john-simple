import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDescription = () => {
    const{productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div> Your Product details is here: 
            <Product showAddToCArt={false} 
            product ={product}></Product>
           
        </div>
    );
};

export default ProductDescription;