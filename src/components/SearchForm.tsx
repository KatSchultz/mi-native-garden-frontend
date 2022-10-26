import { setServers } from "dns";
import React, { useState } from "react";
import { getPlantsByCriteria } from "../services/plant.service";
import { Plant } from "../types/plant.types";

export default function SearchForm() {
  const [userInput, setUserInput] = useState(true);
  const [searchPlants, setSearchPlants] = useState<Plant[]>([]);
  // maybe make sun choice into checkbox

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
    console.log(userInput);
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
    </div>
  );
}
