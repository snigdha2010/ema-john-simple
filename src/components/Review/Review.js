import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import thankYouImg from '../../images/giphy.gif';


const Review = () => {

const [cart, setCart] =useState([]);
const [orderPlaced,setOrderPlaced] = useState(false);

const handlePlaceOrder = () =>{

    setCart([]);
    setOrderPlaced(true);
    processOrder();
}
const removeProduct = (productKey)=>{
    console.log("Clicked",productKey);
    const newCart = cart.filter(pd =>pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
}

useEffect(()=>{
    //cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart); //get the keys 
   //const counts = productKeys.map(key=>savedCart[key]); //get the value using keys
   const cardProducts = productKeys.map(key =>{
      const product = fakeData.find(pd=>pd.key === key);
      product.quantity = savedCart[key];
      return product;
   })
    //console.log(cardProducts );
    setCart(cardProducts);
},[]);

let thankYou ;
if(orderPlaced){
    thankYou = <img src={thankYouImg} alt=""/>
}

    return (
        <div className = 'twin-container'>
            <div className= 'product-container'>
                  {
                cart.map(pd=><ReviewItems 
                    key ={pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItems>)
            }

            {thankYou}
            </div>
            <div className='cart-container'>

                <Cart cart={cart}>
                    <button onClick = {handlePlaceOrder}className= 'main-btn'>Place Order</button>
                </Cart>
                

            </div>
          
        </div>
    );
};

export default Review;