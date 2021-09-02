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








  return (
    <div style={{ margin: "10px", border: "3px solid purple" }}>
      <h1>App Component Here</h1>
      <button onClick={()=>setShowForm(!setShowForm)}>{showForm ? "hide form" : "new beer form"}</button>
      {showForm && <BeerForm addBeerProp={addBeer} />}
      <button onClick={getBeers}>Get Beers</button>
      <Beers beers={beers}/>
    </div>
  );
};

export default App