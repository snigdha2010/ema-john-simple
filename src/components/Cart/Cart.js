import React, { useContext } from 'react';
import { useAuth } from '../Login/useAuth';



const Cart = (props) => {

    const cart = props.cart;
    const auth = useAuth();
    console.log(auth);
   // const total = cart.reduce((total,product)=>total+product.price,0);
   let total = 0; 
   for(let i=0; i<cart.length;i++){
       let product = cart[i];
       total = total + product.price* product.quantity;
       //debugger;
   }

   let shipping = 0;
   if (total>35){
       shipping = 0;
   }
   else if (total>15){
       shipping = 12.99;
   }else if(total>0){
        shipping = 4.99;
   }
   const tax = total/10;

   const formatNum = (num)=> num.toFixed(2);
   const grandTotal = (total+shipping+tax);
    return (
        <div>
             <h3 className="bg-danger">This is the Cart</h3>
            <h4>Order summery:{cart.length}</h4>
            <p>Item Total:{formatNum(total)}</p>
            <p>Shipping:{shipping}</p>
            <p>Tax{formatNum(tax)}</p>
            <p>Sub Total:{formatNum(grandTotal)}</p>
            <br/>
            {
                props.children
                
            }

            <p>{}</p>

        </div>
    );
};

export default Cart;