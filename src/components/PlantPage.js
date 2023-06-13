import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then((r) => r.json())
    .then(setPlants);
  }, []);

  const addNewPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  const filteredPlants = plants.filter((plant) =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onPlantAdd={addNewPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
