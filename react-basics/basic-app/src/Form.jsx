import React  from "react"; 

function Form (props){
    return (
        <form className="form">
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            {!props.isRegistered && (
             <input type="password" placeholder="confirm password" />
            )}
            
            <button className="submit"> {props.isRegistered ? "login": "register" }</button>
        </form>
    )
}

export default Form