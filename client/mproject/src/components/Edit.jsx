import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { todoDetail } from '../apis/fetchapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { updateTodo } from '../apis/fetchapi';
import { useState } from 'react';
import { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Edit() {
  const navigate=useNavigate()
  const [studdetail,setStuddetail]=useState({
    title:"",content:"",due_date: new Date(),status:""
  })
  const{id}=useParams()
  const header={
    "Authorization":`Token ${sessionStorage.getItem("token")}`,
    "content-type":"application/json"

  }
useEffect(()=>{
  todoDetail(id,header).then((res)=>{
    setStuddetail(res.data)
  })
},[id])

const updateData=()=>{
  updateTodo(id,studdetail,header).then((res)=>{
    console.log(res.data);
    toast.success("Data Updated")
    navigate('/home')
  })
}

const CancelData=()=>{
  navigate('/home')
}

  return (
    <div className='container p-5 d-flex flex-column align-item-center justify-content-center '>
    <div  className='w-60  p-5 border shadow'>
      <h4 className='text-center'> EDIT TODO</h4>
    <FloatingLabel controlId="floatingName"  label="title"  className="mb-3">
    <Form.Control type="text" placeholder="title" onChange={(e)=>{setStuddetail({...studdetail,title:e.target.value})}} value={studdetail.title} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingAddress" label="content" className="mb-3">
    <Form.Control type="text" placeholder="content" onChange={(e)=>{setStuddetail({...studdetail,content:e.target.value})}} value={studdetail.content} />
    </FloatingLabel>
    <DatePicker
          selected={studdetail.due_date}
          onChange={(date) => setStuddetail({ ...studdetail, due_date: date })}
          className="form-control mb-3"
        />
     <FloatingLabel controlId="floatingAddress" label="status" className="mb-3">
        <Form.Select onChange={(e) => setStuddetail({ ...studdetail, status: e.target.value })}>
        <option value="">Pending</option>
        <option value=""> In Progress</option>
        <option value="">Completed</option>
      </Form.Select></FloatingLabel>
    <div className='d-flex justify-content-around'>
    <button className='btn btn-info mt-3' onClick={(e)=>{updateData(e)}}>Submit</button>
    <button className='btn btn-danger mt-3' onClick={CancelData}>Cancel</button>
    </div>
    </div>


  </div>
  )
}

export default Edit