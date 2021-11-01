import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./OrderForm.css"






const OrderForm = () => {
    const{register,handleSubmit,reset}=useForm();



    // Submition 
const onSubmit2=data=>{
    axios.post('https://quiet-spire-96644.herokuapp.com/addProductInfo',data)
    .then(result=>{
       if(result.data.insertedId){
           alert('Product add sucessfully');
           reset()
       }
    })}
  
    return (
        <div>
<form className="form" onSubmit={handleSubmit(onSubmit2)}> <br />
<h2 className="text-center order_NOW">Order Now</h2>

<input
  {...register("name", { required: true })}
  placeholder="Your Name"
  className="p-2 m-2"
/>
<br />
<input
  {...register("email", { required: true })}
  placeholder="Email"
  className="p-2 m-2"
/>
<br />
<input
  {...register("number", { required: true })}
  placeholder="Contact Number"
  className="p-2 m-2"
/>
<br />
<input
  {...register("date", { required: true })}
  placeholder="date"
  defaultValue={new Date()}
  className="p-2 m-2"
/>
<br />
<input
  {...register("address", { required: true })}
  placeholder="Your Address"
  className="p-2 m-2"
/>
<br />

<input type="submit" value="Submit" />     
</form>
        </div>
    );
};

export default OrderForm;