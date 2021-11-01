import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import './Booking.css';



const Booking = () => {

    const[products,setProducts]=useState([]);

  useEffect(()=>{
      fetch('https://quiet-spire-96644.herokuapp.com/services')
      .then(res=>res.json())
      .then(data=>setProducts(data))
  },[]);

  

    return (<div>
      <Header></Header>
        <div className="container">
        
          <h1 className="ourServices text-center bg-sucess mt-5">Today Offer</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">

       {
           products?.map((product)=>(<PlaceOrder key={product._id} product={product}></PlaceOrder>))
       }
</div>



</div>


<Footer></Footer>

        </div>
    
    
    );
};

export default Booking;