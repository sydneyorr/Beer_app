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
    await axios.delete(`beers/${id}`)
    const newBeers = beers.filter((beer)=> beer.id !== id)
    setBeers(newBeers)
    } catch {

    }
  }

  const updateBeer = async (beer) => {
    try {
      let res = await axios.put(`/beers/${beer.id}`, beer);
      let newBeers = beers.map((b)=>(b.id === beer.id ? beer : b ));
      setBeers(newBeers);
    } catch (err) {

    }
  }




  return (
    <div style={{ margin: "10px", border: "3px solid purple" }}>
      <h1>App Component Here</h1>
      <button onClick={()=>setShowForm(!showForm)}>{showForm ? "hide form" : "new beer form"}</button>
      {showForm && <BeerForm addBeer={addBeer}/>}
      <button onClick={getBeers}>Get Beers</button>
      <Beers beers={beers} deleteBeer={deleteBeer} updateBeer={updateBeer} />
    </div>
  );
};

export default App