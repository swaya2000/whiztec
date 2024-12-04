import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { addTodo } from '../apis/fetchapi';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

function Add() {
  const [addStud, setAddStud] = useState({ title: "", content: "", due_date: new Date(),status:""  });
  const navigate = useNavigate();

  const submitData = () => {
    const header = {
      "Authorization": `Token ${sessionStorage.getItem("token")}`,
      "content-type": "application/json",
    };

    const { title, content, due_date,status } = addStud;
    if (!title || !content ||!status) {
      toast.warning("Invalid input");
    } else {
      addTodo({ ...addStud, due_date: due_date.toISOString() }, header).then((res) => {
        console.log(res.data);
        toast.success("Added");
        navigate('/home');
      });
    }
  };
  console.log(addStud);

  return (
    <div className='container p-5 d-flex flex-column align-items-center justify-content-center'>
      <div className='w-100 p-5 border shadow'>
        <h4 className='text-center'>Add Todo</h4>
        <FloatingLabel controlId="floatingName" label="Title" className="mb-3">
          <Form.Control type="text" onChange={(e) => setAddStud({ ...addStud, title: e.target.value })} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingAddress" label="Content" className="mb-3">
          <Form.Control type="text" onChange={(e) => setAddStud({ ...addStud, content: e.target.value })} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingStatus" label="Status" className="mb-3">
  <Form.Select
    value={addStud.status} 
    aria-label="Status" onChange={(e) => setAddStud({ ...addStud, status: e.target.value })}
  >
    <option value="" disabled>Select Status</option>
    <option value="Pending">Pending</option>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </Form.Select>
</FloatingLabel>
        <DatePicker
          selected={addStud.due_date}
          onChange={(date) => setAddStud({ ...addStud, due_date: date })}
          className="form-control mb-3"
        />
        <div className='d-flex justify-content-around'>
          <button className='btn btn-success' onClick={submitData}>Submit</button>
          <button className='btn btn-danger' onClick={() => navigate('/home')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Add;
