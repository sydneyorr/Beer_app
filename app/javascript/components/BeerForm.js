import React, { useState } from "react"

const BeerForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [color, setColor] = useState(props.color ? props.color : "")
  const [rating, setRating] = useState(props.rating ? props.rating : "")

const handleSubmit = (e) => {
  e.preventDefault();
  if (props.id) {
    props.updateBeer({ id: props.id, name, color, rating})
  } else {
    props.addBeer({ name, color, rating });
    setName("");
    setColor("");
    setRating("")
  }
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
        <p>Color:</p>
        <input
        value={color}
        onChange={(e) => {
        setColor(e.target.value)
        }}
        />
        <p>Rating:</p>
        <input 
        value={rating}
        onChange={(e)=>{
          setRating(e.target.value)
        }}
        />
      <button>{props.id ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default BeerForm;

