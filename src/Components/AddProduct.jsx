import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import './AddProduct.css'

const AddProduct=()=>{

    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const [error,setError]=useState(false)
  
    const navigate=useNavigate();

    const addProduct=async()=>{
        
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        
        console.log(name,price,category,company);
        let userId=JSON.parse(localStorage.getItem('user'))._id
        console.log(userId);
        let result=await fetch('http://localhost:2000/add-product',{
            method:'POST',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
       if(result){
        navigate('/');
       }
        console.warn(result);
    }

    return(
        <div className="addproduct">
              <h1>Add Product</h1>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" />
        { error &&  !name && <span className="invalid-input">!Enter Valid Name*</span> }

        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price" />
        {error && !price && <span className="invalid-input">!Enter Valid price*</span>}

        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product catogery" />
        {error && !category && <span className="invalid-input">!Enter Valid category*</span>}

        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company" />
        {error && !company&& <span className="invalid-input">!Enter Valid company*</span>}

        <button onClick={addProduct} type="button">Add Product</button>
        </div>
      
        
    )
}
export default AddProduct