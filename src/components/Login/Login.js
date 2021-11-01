import React from 'react';
import Header from '../Header/Header';
import UseAuth from './../UseAuth/UseAuth';
import "./Login.css"
const Login = () => {
    const{signInUsingGoogle}=UseAuth();


    return (
       <div>
           <Header></Header>
            <div className="text-center mt-5 login_main">
            <button onClick={signInUsingGoogle} type="button" class="btn btn-outline-success">  
             <span className="google_logo">G</span><span className="google_plus_logo">+</span>Login With Google</button>

        </div>
       </div>
    );
};

export default Login;