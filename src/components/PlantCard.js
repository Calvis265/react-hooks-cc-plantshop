import React from "react";

function PlantCard({ plant, onDelete }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className="primary">In Stock</button>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
