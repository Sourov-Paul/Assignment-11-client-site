import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import UseAuth from '../UseAuth/UseAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {person}=UseAuth();
    return (
       <Route

       {...rest}
       
       render ={({location})=> person.email ? children : 
       <Redirect
       to={{
           pathname:'/login',
           state:{from:location}
       }}
       
       >

       </Redirect>
   
    
    }

       >

       </Route>
    );
};

export default PrivateRoute;