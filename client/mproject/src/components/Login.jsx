import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userLogin } from '../apis/fetchapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

function Login() {
  const navigate=useNavigate()
  const [logData,setLogData]=useState({
    username:"",password:""
  })
  const formSubmit=()=>{
    const {username,password}=logData
    if(!username || !password){
        alert("invalid input")
    }
    else{
        userLogin(logData).then((res)=>{
            console.log(res.data.token);
            sessionStorage.setItem("token",res.data.token)
            toast.success("Login Successful")
            navigate('/home')
        })
    }
}
  return (
    <div className='container p-5  d-flex flex-column align-items-center justify-content-center'>
        <div className='w-50 p-5 bg-info'>
        <h1 className='text-dark text-center'>Login</h1>

        <FloatingLabel controlId="floatingInputGrid" label="username" className='mt-3'>
        <Form.Control type="text" placeholder="" onChange={(e)=>{setLogData({...logData,username:e.target.value})}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="password" className='mt-3'>
        <Form.Control type="password" placeholder="" onChange={(e)=>{setLogData({...logData,password:e.target.value})}} />
        </FloatingLabel>
        <div>
            <button className='mt-5 d-flex justify-content-between' onClick={(e)=>{formSubmit()}}>Login
            </button>
            <Link to={'/register'} className='text-dark'>New User? SignUp here</Link></div></div>
    </div>
  )
}

export default Login