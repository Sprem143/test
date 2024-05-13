import './App.css'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function App() {

const [email,setEmail]=useState('');
const [password,setPassword]= useState('')

 const login=async()=>{
  console.log(email,password)
  let result= await fetch("http://localhost:8000/login",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email,password})
  })
  result= await result.json();
  alert(result.message);
 }
  return (
    <>
     <input type="email" onChange={(e)=>setEmail(e.target.value)} />
     <input type="password" onChange={(e)=>setPassword(e.target.value)} />
     <button onClick={login}>Submit</button>
    </>
  )
}

export default App
