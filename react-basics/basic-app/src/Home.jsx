import React from "react";
import { useContext } from "react";
import { themeContex } from "./theme";


function Home(){
    const {theme} = useContext(themeContex)

    return (
        <h1 >current theme : {theme}</h1>
    )

}

export default Home