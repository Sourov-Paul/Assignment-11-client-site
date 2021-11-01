import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddProductInfo = () => {
    const{register,handleSubmit,reset}=useForm();

  
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
           <h2 className="text-center">Add a Product</h2>
           <span className="pro_name">Product Name</span>  <input className="prod_name" placeholder="Product Name"{...register("name")} />  <br />        
              <input type="submit" value="Submit" />     
            </form>
        </div>
    );
};

export default AddProductInfo;