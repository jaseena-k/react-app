import React from "react";
import { useState ,useEffect } from "react";


function  App(){

  const [user ,setUser] = useState([])
  const [loading ,setLoading] = useState(true)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data => {
      setUser(data)
      setLoading(false)
    })
  },[])

      if(loading) return <p>Loading.....</p>

  return(
    <>

    {user.map (u=> <p key ={u.id}>{u.name}</p>)}
    </>


  )
}

export default App
