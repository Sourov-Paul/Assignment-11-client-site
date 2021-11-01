import React,{useState} from 'react';
import Header from '../Header/Header';
import AllOrderPerson from './../AllOrderPerson/AllOrderPerson';
import './ManageOrder.css'


const ManageOrder = () => {
    const [orderMan, setOrderMan] = useState("AllOrderMan");
console.log(orderMan)
    return (
       
            <div>
              <Header></Header>
               <div className="row d-flex justify-content-center">
            
            <div className="col-md-9 text-center  text-center">
              {orderMan === "AllOrderMan" && <AllOrderPerson ></AllOrderPerson>}
            </div>
          </div>
            </div>
     
    );
};

export default ManageOrder;