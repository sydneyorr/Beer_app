import React, { useState } from "react"
import BeerForm from "./BeerForm";

const Beer = (props) => {
  const { name, color, rating, deleteBeer, id, updateBeer } = props;
  const [showForm, setShowForm] = useState(false);
  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{color}</p>
      <p>{`${rating}/5`}</p>
      <button onClick={()=> deleteBeer(id)}>Delete</button>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "Edit"}</button>
      {showForm && <BeerForm updateBeer={updateBeer} id={id} name={name} color={color} rating={rating} />}
    </div>
  );
};

export default Beer