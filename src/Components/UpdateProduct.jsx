import React, { useEffect, useState } from "react";
import './UpdateProduct.css'
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct=()=>{

    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [category,setCategory]=useState('')
    const [company,setCompany]=useState('')
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        let result=await fetch(`http://localhost:2000/product/${params.id}`,{
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    const UpdateProduct=async()=>{
        
         console.log(name,price,category,company);
         let result=await fetch(`http://localhost:2000/product/${params.id}`,{
            method:'PUT',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
         });
         result=await result.json();
         console.log(result);
         navigate('/')
    }

    return(
        <div className="UpdateProduct">
              <h1>Update Product</h1>
              
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" />
        

        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter product price" />
        

        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product catogery" />
        

        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company" />


        <button onClick={UpdateProduct} type="button">Update Product</button>
        </div>
      
        
    )
}
export default UpdateProduct