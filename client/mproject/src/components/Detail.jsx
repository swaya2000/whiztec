import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { todoDetail } from '../apis/fetchapi'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { toast } from 'react-toastify';
import { todoDelete } from '../apis/fetchapi'



function Detail() {
  const [stud,setStudent]=useState({})
  const navigate=useNavigate()
    const {id}=useParams()
    console.log(id);

    const header={
      "Authorization":`Token ${sessionStorage.getItem("token")}`,
      "content-type":"application/json"

    }
    useEffect(()=>{
        todoDetail(id,header).then((res)=>{
            console.log(res.data);
            setStudent(res.data)
        })
    },[id])
    const delStud=()=>{
      todoDelete(id,header).then((res)=>{
      console.log(res.data);
      toast.success("data deleted")
      navigate('/home')
  
      })
    }

  return (
    <div className='container p-5  d-flex flex-column align-items-center justify-content-center'>    
        <Card style={{ width: '18rem' }}>
      <Card.Header className='bg-dark text-light'>TODO DETAIL</Card.Header>
      <ListGroup variant="flush" className='text-light'>
        <ListGroup.Item>TITLE:{stud.title}</ListGroup.Item>
        <ListGroup.Item>CONTENT:{stud.content}</ListGroup.Item>
        <ListGroup.Item>DUE DATE: {new Date(stud.due_date).toLocaleString()}</ListGroup.Item>
      </ListGroup>
      <button className='btn btn-info' onClick={delStud}>DELETE</button>
    </Card>
   
    </div>
  )
}

export default Detail