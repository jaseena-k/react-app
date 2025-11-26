import React, { useState } from "react"

function App(){

    const [headingText,setHeadingText] =useState("Hello")
    const [isMouseOver,setMouseOver] = useState(false)
    
    function handlingClick(){
      setHeadingText("submitted")
    }
   function handleMouseOver(){
    setMouseOver(true)

   }
   function handleMouseOut(){
    setMouseOver(false)
   }
    

   return (
    <div className="container">
      <h1> {headingText} </h1>
      <input type="text" placeholder="userName"/>
      <button style = {{backgroundColor : isMouseOver ?  "black" : "white"}}
      onClick={handlingClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >submit </button>
    </div>
   )
  
}

export default App