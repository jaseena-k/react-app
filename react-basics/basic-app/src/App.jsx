import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    event.preventDefault();

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello{contact.fName}
        {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={contact.lName}
          name=""
          placeholder="Last Name"
        />
        <input
          type="text"
          onChange={handleChange}
          value={contact.email}
          placeholder="Email"
        />
      </form>

      <button>submit </button>
    </div>
  );
}

export default App;
