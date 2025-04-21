import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm, onDelete }) {
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default PlantList;
