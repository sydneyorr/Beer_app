import React from "react"

const Beer = (props) => {
  const { name, color, rating } = props;
  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>{name}</h1>
      <p>{color}</p>
      <p>{`${rating}/5`}</p>
    </div>
  );
};

export default Beer