import React from 'react';
import { useHistory } from 'react-router-dom';

const PlaceOrder = (props) => {
    const{_id,name,number,description,img}=props.product;


    const history=useHistory();

    const handleOrder=(_id)=>{
        const uri=`/confirmOrder/${_id}`
        history.push(uri)
      }
      
    return (
        <div>
         
         <div className="main_card">
             
              

             <div className="col">
               <div className="card">
                 <img  src={img} className="card-img img-fluid all_images" alt="..."/>
                 <div className="card-body">
                   <h5 className="card-title">{name}</h5>
                   <h5 className="card-title"><span className="price">Price: {number}</span></h5>
                   <p className="card-text">{description}</p>
                  <span>Revew: </span>
                  <i className="fas fa-star logo"></i>
                  <i className="fas fa-star logo"></i>
                  <i className="fas fa-star logo">
                 </i><i className="fas fa-star logo"></i>
                  <i className="fas fa-star logo"></i><br />
             <button onClick={()=>{handleOrder(_id)}} type="button" className="btn btn-outline-success"> Order Now</button>
           
           
           
           
           
           
           
           
                 </div>
               </div>
             </div>
           
           
           
                      </div>
        </div>
    );
};

export default PlaceOrder;