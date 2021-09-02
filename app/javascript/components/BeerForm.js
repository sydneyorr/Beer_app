import React, { useState } from "react"

const BeerForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");

const handleSubmit = (e) => {
  e.preventDefault();
  props.addBeer({ name });
  setName("");
};


  return (
    <div style={{ margin: "10px", border: "3px solid green" }}>
      <h1>Beer Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input 
        value={name}
        onChange={(e)=> {
          setName(e.target.value);
        }}
        />
      <button>{props.id ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default BeerForm;

