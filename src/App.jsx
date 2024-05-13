import './App.css'
import { useState } from 'react';

function App() {

const [email,setEmail]=useState('');
const [password,setPassword]= useState('')

 const login=async()=>{
  console.log(email,password)
  let result= await fetch("https://test-backend-pqcp.onrender.com/login",{
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
