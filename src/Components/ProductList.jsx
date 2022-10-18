import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './ProductList.css'

function ProductList(){

    const [product,setProduct]=useState([]);

    //Refresh automatically and run once time so i use []
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts=async()=>{
        let result=await fetch('http://localhost:2000/product',{
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProduct(result);
    
    }
    
    const deleteProduct=async(id)=>{
        let result=await fetch(`http://localhost:2000/delete/${id}`,{
            method:'DELETE',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        if(result){
            alert('Record is deleted');
            getProducts();
        }
    }
    const searchHandle=async(e)=>{
        let key=e.target.value;
        if(key){
            let result=await fetch(`http://localhost:2000/search/${key}`,{
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
        result=await result.json();
        if(result){
            setProduct(result);
             }
        }
        else{
            getProducts();
        }
        
    }

    return(
        <div className="product-List">
        <h1>Product List</h1>

        <input className="search" onChange={searchHandle} type="text" placeholder="Search Product" />

        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Company</li>
            <li>Category</li>
            <li>Price</li>
            <li>Operation</li>
        </ul>
       {
          product.length>0 ? product.map((item,index)=>
        <ul className="links" key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.company}</li>
            <li>{item.category}</li>
            <li>${item.price}</li>
            <li><button className="button" onClick={()=>deleteProduct(item._id)}>Delete</button></li>
            <li><NavLink className='updatebutton' to={'/update/'+item._id}>Update</NavLink></li>
        </ul>
        )
        : <h1 style={{'marginTop':'150px'}}>No Result Found</h1>
       }
     
        </div>
    )
}
export default ProductList;