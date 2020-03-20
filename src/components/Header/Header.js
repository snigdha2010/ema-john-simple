import React, { useState, useRef, useEffect } from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { useAuth } from '../Login/useAuth';





const Header = () => {
    const auth = useAuth();
    console.log(auth.user);
    const [count, setCount] = useState(0);
    // const user = useContext(UserContext);
    const previous = usePrevious(count);
    
    return (
        <div className="header">
            <h1>Count: {count} Previous:{previous}</h1>
            <img src={logo} alt=""/>

            <button onClick= {()=>setCount(count+1)}>+</button>
            <button onClick= {()=>setCount(count-1)}>-</button>

            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Review Order</a>
                <a href="/inventory">Manager Inventory</a>
  
                {
                    auth.user && <span style={{color:'yellow'}}>Hello {auth.user.name} </span>
                }
                {
                    auth.user? <a href='/login'>Sign Out</a> 
                    :<a href='/login'> Sign in </a> 
                }
            </nav>
        </div>
       

    );
};
const usePrevious = value =>{
    const prev = useRef();
    useEffect(()=>{
        prev.current = value;
    },[value])
    return [prev.current];

}
export default Header;