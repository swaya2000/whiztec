import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Add from './components/Add'
import Edit from './components/Edit'
import Home from './components/Home'
import Detail from './components/Detail'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     <Route path="/home" element={<Home/>}/>


      <Route path="/add" element={<Add/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
    <ToastContainer/>
    </>
  )
}
export default App

