import React from "react"
import Settings from "./settings"
import Usages from "./usage"
import Home from "./Home"
import { BrowserRouter ,Routes,Route } from "react-router";
import Header from "./header";

function App(){


  return (
    <BrowserRouter>
    
    <div className="container">
      <Header/>
    </div>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="settings" element = {<Settings/>}/>
      <Route path ="usage" element = {<Usages/>}/>
    </Routes>


    </BrowserRouter>
    

  )}

export default App