import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { userRegister } from '../apis/fetchapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate()
    const [userReg,setUserRegister]=useState({
        username:"",email:"",password:""
    })

    const formSubmit=()=>{
        const {username,email,password}=userReg
        if(!username || !email || !password){
            alert("invalid input")
        }
        else{
            userRegister(userReg).then((res)=>{
                console.log(res.data);
                toast.success("Registration Successful")
                navigate('/')
            })
        }
    }
  return (
    <div className='container p-5  d-flex flex-column align-items-center justify-content-center'>
        <div className='w-50 p-5 bg-info'>
            <h1 className='text-dark text-center'>Register</h1>

        <FloatingLabel controlId="floatingInputGrid" label="username" className='mt-3'>
        <Form.Control type="text" placeholder="username" onChange={(e)=>{setUserRegister({...userReg,username:e.target.value})}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Email"  className='mt-3'>
        <Form.Control type="text" placeholder="Email" onChange={(e)=>{setUserRegister({...userReg,email:e.target.value})}} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="password"  className='mt-3'>
        <Form.Control type="password" placeholder="" onChange={(e)=>{setUserRegister({...userReg,password:e.target.value})}} />
        </FloatingLabel>
        <div>
            <button className='mt-5 d-flex justify-content-between' onClick={(e)=>{formSubmit()}}>Register
            </button>
            <Link to={'/'} style={{textDecoration:'none'}} className='text-dark'>Already have an account? Login here</Link></div></div>
    </div>
  )
}

export default Register