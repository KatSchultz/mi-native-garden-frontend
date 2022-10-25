import React, { useEffect, useState } from "react";
import { getPlant, getPlants } from "../services/plant.service";
import { Plant } from "../types/plant.types";

export default function FeaturedPlant() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [plant, setPlant] = useState<Plant>();

  useEffect(() => {
    getPlants().then((response) => {
      setPlants(response);
      console.log(response);
    });
  }, []);

  function displayRandomPlant() {
    let num = plants.length;
    let randomIndex = Math.floor(Math.random() * num);
    setPlant(plants[randomIndex]);
    console.log(randomIndex);
    console.log(plant);
  }

  return (
    <div>
      <div>Today's Featured Plant</div>
      <div>
        <h2>{plant?.name_common}</h2>
      </div>
      <button onClick={displayRandomPlant}>Get Plants</button>
    </div>
  );
}
