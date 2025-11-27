import React, { useState } from "react"

function App(){
    const [name , setName] = useState("")
    const [headingText , setHeadingText] = useState("")


function handleChange(event){
  setName(event.target.value)

  

}

function handleClick(event){
    setHeadingText(name)
  
    event.preventDefault()
  
  }

   return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input type="text"
      onChange={handleChange}
      placeholder="what is your name?!"
      value={name} 
      
      />
      <button onClick={handleClick}>submit </button>
    </div>
   )
  
}

export default App