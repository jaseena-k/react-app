import React from "react";
import { themeContex } from "./theme";
import Home from "./Home";




function App(){
  return (


    <themeContex.Provider value = {{theme: "dark"}}>
      <Home/>

    </themeContex.Provider>

  


  )

}



export default App


