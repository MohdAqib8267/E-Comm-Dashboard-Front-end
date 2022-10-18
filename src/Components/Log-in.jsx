import React,{useEffect, useState} from 'react'
import './Log-in.css'
import { useNavigate } from 'react-router-dom'

const Login=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])

    const handleLogin=async()=>{
        console.log(email,password);
        //intergrate login API
        let result=await fetch('http://localhost:2000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.data));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate('/')
        }
        else{
            alert('email/password does not match');
        }

    }

    return(
        <div className="login">
            <h1>LogIn</h1>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' />
        <button onClick={()=>handleLogin()} type='button'>Submit</button>
        </div>
    )
}
export default Login