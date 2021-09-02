import React from "react"
import Beer from "./Beer";

const Beers = ({beers}) => {
  return (
    <div style={{ margin: "10px", border: "3px solid red" }}>
      <h1>All Beers Here</h1>
      {beers.map((beer) => (
        <Beer key={beer.id} {...beer} />
      ))}
    </div>
  );
};

export default Beers