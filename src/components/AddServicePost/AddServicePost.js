import React, { useEffect, useState } from 'react';
import DynamicDisplayProduct from './../DynamicDisplayProduct/DynamicDisplayProduct';

const AddServicePost = () => {


        const[products,setProducts]=useState([]);

        useEffect(()=>{
            fetch('https://quiet-spire-96644.herokuapp.com/delivery')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[]);

    return (
        <div>
         <div className="container">
             <h1 className="text-center mt-5"> Our Service </h1>
             <div className="row row-cols-1 row-cols-md-3 g-4">
             {
           products?.map((product)=>(<DynamicDisplayProduct key={product._id} product={product}></DynamicDisplayProduct>))
       }
             </div>
         </div>
        </div>
    );
};

export default AddServicePost;