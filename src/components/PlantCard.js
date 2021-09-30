import React, {useState} from "react";

function PlantCard({ plantImage, plantName, plantPrice }) {

  // define state to track `In Stock` or `Out of Stock`
  const [isInStock, setIsInStock] = useState(true);

  // function to call `setIsInStock` to set new state of `isInStock`
  function inOutStockHandler() {
    setIsInStock(!isInStock);
  }

  return (
    <li className="card">
      <img src={plantImage} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {plantPrice}</p>
      {isInStock ? (
        <button className="primary" onClick={inOutStockHandler}>In Stock</button>
      ) : (
        <button onClick={inOutStockHandler}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
