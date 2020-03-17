import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img, seller, price, stock,key } = props.product
    //console.log(props)

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>

            <div >
                <h3 className='product-name'><Link to={'/product/'+key}>{name}</Link></h3>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock-order soon</small></p>
                { props.showAddToCart===true&& <button 
                className='main-btn'
                onClick = {()=>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>}
            </div>
        </div>
    );
};

export default Product;