import { setServers } from "dns";
import React, { useEffect, useState } from "react";
import { getPlantsByCriteria } from "../services/plant.service";
import { Plant } from "../types/plant.types";
import PlantDisplay from "./PlantDisplay";
import SearchResultDisplay from "./SearchResultDisplay";

export default function SearchForm() {
  const [userInput, setUserInput] = useState(true);
  const [searchPlants, setSearchPlants] = useState<Plant[]>([]);
  // maybe make sun choice into checkbox

  useEffect(() => {
    getPlantsByCriteria(userInput).then((response) => {
      setSearchPlants(response);
    });
  }, [userInput]);
  // NEED TO MAKE USEEFFECT DEPENDENT ON A STATE THAT CHANGES WITH SUBMIT BUTTON
  // CURRENTLY UPDATES IMMEDIATELY WHEN I CHANGE STATE OF USER INPUT
  // ADD MORE USER INPUTS

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setUserInput(true);
    } else {
      setUserInput(false);
    }
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    getPlantsByCriteria(userInput).then((response) => {
      setSearchPlants(response);
    });
    console.log("User input: ", userInput);
    // debugger;
    console.log(searchPlants);
  }

  return (
    <div>
      <h2>Search for a native plant that fits your garden</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="sun" className="pr-2">
          Sun
        </label>
        <div>
          <input
            type="checkbox"
            id="shade"
            name="shade"
            onChange={handleChange}
          />
          <label htmlFor="shade">Shade</label>
        </div>
        <button>Search</button>
      </form>
      {searchPlants.map((plant) => (
        <SearchResultDisplay plant={plant} key={plant._id} />
      ))}
    </div>
  );
}
