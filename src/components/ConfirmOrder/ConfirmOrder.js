import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';



const ConfirmOrder = () => {
    const {id}=useParams();

    const [details,setDetails]=useState([ ])
    const[productDetails,setProductDetails]=useState({});

   useEffect(()=>{
       fetch('https://quiet-spire-96644.herokuapp.com/services')
       .then(res=>res.json())
       .then(data=>setDetails(data))
       .catch((error)=>{
         console.log("reload now",error)
       })
   },[]);

useEffect(()=>{
    if(details.length>0){
        const matchDetails=details.find(detail=>(detail._id===id))
        setProductDetails(matchDetails)
    }
},[details]);





    return (
      <div >

<div className="container mt-5 ">
              
              <div className="card m-auto" style={{width: "18rem"}}>
                <img src={productDetails.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"> {productDetails.name}</h5>
                  <h5 className="card-title"> {productDetails.number}</h5>
      
                </div>
               </div>
            </div> 
<OrderForm></OrderForm>

      </div>
    );
};

export default ConfirmOrder;