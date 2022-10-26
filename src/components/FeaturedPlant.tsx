import React, { useEffect, useState } from "react";
import { getPlant, getPlants } from "../services/plant.service";
import { Plant } from "../types/plant.types";
import PlantDisplay from "./PlantDisplay";

export default function FeaturedPlant() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [plant, setPlant] = useState<Plant>({
    name_common: "",
    name_scientific: "",
    _id: "",
    region: [""],
    flower_color: "",
    sun: { full: true, part: true, shade: true },
    height: { min: 0, max: 0 },
    moisture: { dry: true, ave: true, wet: true },
    img: { url: "", credit: "" },
  });

  useEffect(() => {
    plantCall();
    // displayRandomPlant();
  }, []);

  function plantCall() {
    getPlant("635871d24cf2019b15f6e7b9").then((response) => {
      setPlant(response);
      console.log(response);
    });
  }

  function displayRandomPlant() {
    let num = plants.length;
    let randomIndex = Math.floor(Math.random() * num);
    setPlant(plants[randomIndex]);
    console.log(randomIndex);
    console.log(plant);
  }

  return (
    <div>
      <div>Featured Plant</div>
      {/* <div>{plant.name_common && <h2>{plant?.name_common}</h2>}</div>
      <button onClick={displayRandomPlant}>Get Plants</button> */}
      <PlantDisplay plant={plant} />
    </div>
  );
}
