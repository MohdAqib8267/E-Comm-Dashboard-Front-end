import React,{useEffect, useState} from 'react'
import './Sign-up.css'
import { useNavigate } from 'react-router-dom'



 const Signup=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let navigate=useNavigate();


   useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth){
        navigate('/')
    }
   },[])

    const getval= async() =>{
         console.log(name,email,password)

        //integrate sign-up Api
            console.warn(name, email, password);
            let result = await fetch("http://localhost:2000/register", {
                method: 'post',
                body: JSON.stringify({ name,password,email }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
            localStorage.setItem("user",JSON.stringify(result.result))
            localStorage.setItem("token",JSON.stringify(result.auth))
            if(result){
                navigate('/')
            }
           
    }

    return(
        <div className='signup'>
        <h1>Register</h1>
        <div className="input">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Username' />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button onClick={()=>getval()} type='button'>Sign Up</button>
        </div>
        </div>

    )
 }
 export default Signup