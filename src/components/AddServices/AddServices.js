import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "./AddServices.css"
import Header from './../Header/Header';
import Footer from '../Footer/Footer';
const AddServices = () => {
    const{register,handleSubmit,reset}=useForm();


    const onSubmit=data=>{
        axios.post('https://quiet-spire-96644.herokuapp.com/services',data)
        .then(result=>{
           if(result.data.insertedId){
               alert('Product add sucessfully');
               reset()
           }
        })
    }
   

    return (
        <div>
            <Header></Header>
            <div className="container mb-5">
           <div className="main_form mt-5">
           

           <form className="form" onSubmit={handleSubmit(onSubmit)}> <br />
           <h2 className="text-center">Add a Service Offer</h2>
           <span className="pro_name">Product Name</span>  <input className="prod_name" placeholder="Product Name"{...register("name")} />  <br />        
             
             <span className="about">About This item</span> <input className="descrip" placeholder="Type About this product" {...register("description")} /> <br />
            <span className="pro_price">Price</span>  <input placeholder="Price" className="number" {...register("number")} />  <br />
             <span className="Image">Image Link</span> <input placeholder="Image Link" className="imgs_link" {...register("img")}/> <br />
              <input type="submit" value="Submit" />     
            </form>
           </div>
            </div>

<Footer></Footer>

        </div>
    );
};

export default AddServices;