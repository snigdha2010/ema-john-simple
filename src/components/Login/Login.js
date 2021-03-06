import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    //console.log(auth);
    const handleSignIn = ()=>{
        auth.signInWithGoogle()
        .then(res => {
          console.log("redirected");
          window.location.pathname ='/review'; 
        })
    }
    const handleSignOut =()=>{
        auth.signOut()
        .then(res =>{
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Join the party!!!</h1>
            {   auth.user?<button onClick={handleSignOut}>Sign out</button>:
                <button onClick={handleSignIn}>Sign in with Google</button>
             }
        </div>
    );
};

export default Login;