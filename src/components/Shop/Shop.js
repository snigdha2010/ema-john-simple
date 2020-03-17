import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';



const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart,setCart]=useState([]);

    //comeback korlao same data art a dekha jabe 
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd =>pd.key ===existingKey);
            product.quantity = savedCart[existingKey];
            return product;
           // console.log(existingKey,savedCart[existingKey]);
        })
        setCart(previousCart);
        

    },[])



    const handleAddProduct = (product)=>{

        const toBeAdded = product.key;

        const sameProduct = cart.find(pd => pd.key ===toBeAdded);
        let newCart ;
        let count = 1;
        if(sameProduct){
            count  = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !==toBeAdded);
            newCart = [...others, sameProduct];
        }else {
            product.quantity = 1;
            newCart = [...cart,product]; 
        }
        // const count = sameProduct.length;

        // console.log("kkk",product);
        // const newCart = [...cart,product];
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key ===product.key);
        // const count = sameProduct.length;

        addToDatabaseCart(product.key,count);
    }
    

    return (
        <div className='twin-container'>

            <div className='product-container'>

                {
                 products.map(product => <Product
                 key={product.key}
                 showAddToCart ={true}
                 handleAddProduct={handleAddProduct}
                 product={product}
                 ></Product>)
                }
            </div>

            <div className='cart-container'>
               <Cart cart={cart}>
                    <Link to='/review'><button className='main-btn'>Review Order</button>
                    </Link>
               </Cart>

            </div>


        </div>
    );
};

export default Shop