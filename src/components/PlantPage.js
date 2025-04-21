import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Error fetching plants:", err));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  function handleDelete(id) {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList
        plants={plants}
        searchTerm={searchTerm}
        onDelete={handleDelete}
      />
    </main>
  );
}

export default PlantPage;
