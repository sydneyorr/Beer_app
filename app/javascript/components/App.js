import axios from "axios";
import React, { useState } from "react"
import BeerForm from "./BeerForm";
import Beers from "./Beers"

const App = () => {

  const [beers, setBeers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getBeers = async () => {
    try {
      let res = await axios.get("/beers")
      setBeers(res.data)
    } catch (err) {
    }
  };

  const addBeer = async (beer) => {
    try {
      let res = await axios.post("/beers", beer)
      setItems([res.data, ...beers])
    } catch (err) {

    }
  }

  const deleteBeer = async (id) => {
    try {
    axios.delete(`beers/${id}`)

    } catch {

    }
  }




  return (
    <div style={{ margin: "10px", border: "3px solid purple" }}>
      <h1>App Component Here</h1>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? "hide form" : "new beer form"}</button>
      {showForm && <BeerForm addBeer={addBeer}/>}
      <button onClick={getBeers}>Get Beers</button>
      <Beers beers={beers}/>
    </div>
  );
};

export default App