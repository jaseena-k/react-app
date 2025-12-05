import React from "react";
import axios from "axios"
import { useState ,useEffect } from "react";



function  App(){

  const [user ,setUser] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUser(res.data))
  
     
    },[])


  return(
    <>

    {user.map (u=> <p key ={u.id}>{u.name}</p>)}
    </>


  )}


export default App
