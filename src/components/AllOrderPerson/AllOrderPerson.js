import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllOrderPerson.css"



const AllOrderPerson = () => {
    const [orderPerson, setOrderPerson] = useState([]);

    useEffect(()=>{
        fetch("https://quiet-spire-96644.herokuapp.com/addProductInfo")
        .then(res=>res.json())
        .then(data=>setOrderPerson(data))
    },[ ])

        const handleDelete=id=>{
                const url=`https://quiet-spire-96644.herokuapp.com/addProductInfo/${id}`
        
                fetch(url,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    
                    if(data.deletedCount){
                        alert('Deleted Successfully')
                        const remaining=orderPerson.filter(information=>information._id !==id)
                    setOrderPerson(remaining)
                     }
                    
                })
            }

    return (
        <div>
             <div>
      <h1>Total Order ({orderPerson?.length})</h1>
      <Table className="table table-dark table-hover" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Num:</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        {orderPerson?.map((info, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{info?.name}</td>
              <td>{info?.email}</td>
              <td>{info?.address}</td>
              <td>{info?.number}</td>
              <td>{info?.date}</td>
              <td><button onClick={()=>handleDelete(info._id)} className="btn button p-2">Delete Order</button></td>
 
             </tr>
          </tbody>
        ))}
      </Table>
    </div>
        </div>
    );
};

export default AllOrderPerson;