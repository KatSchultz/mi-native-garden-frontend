import { setServers } from "dns";
import React, { useEffect, useState } from "react";
import { getPlantsByCriteria } from "../services/plant.service";
import { Filter } from "../types/filter.types";
import { Plant } from "../types/plant.types";
import PlantDisplay from "./PlantDisplay";
import SearchResultDisplay from "./SearchResultDisplay";

export default function SearchForm() {
  const [userInput, setUserInput] = useState<Filter>({
    shade: "",
    sun_full: "",
    sun_part: "",
    moisture_wet: "",
  });
  const [searchInput, setSearchInput] = useState({
    shade: "",
    sun_full: "",
    sun_part: "",
    moisture_wet: "",
  });
  const [searchPlants, setSearchPlants] = useState<Plant[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("change noted");
    if (e.target.checked) {
      setUserInput({ ...userInput, ...{ [e.target.name]: e.target.checked } });
    } else {
      setUserInput({ ...userInput, ...{ [e.target.name]: "" } });
    }
    // if (e.target.checked) {
    //   setUserInput({ ...userInput, shade: "true" });
    // } else {
    //   setUserInput({ ...userInput, shade: "false" });
    // }
    // debugger;
    console.log(userInput);
  }

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();

    setSearchInput(userInput);
    getPlantsByCriteria(userInput).then((response) => {
      setSearchPlants(response);
    });
    console.log("search button clicked UserInput: ", userInput);
    // console.log("User input: ", userInput);
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
        <div>
          <input
            type="checkbox"
            id="sun_part"
            name="sun_part"
            onChange={handleChange}
          />
          <label htmlFor="sun_part">Part Sun</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sun_full"
            name="sun_full"
            onChange={handleChange}
          />
          <label htmlFor="sun_full">Full Sun</label>
        </div>
        <button>Search</button>
      </form>
      {searchPlants.map((plant) => (
        <SearchResultDisplay plant={plant} key={plant._id} />
      ))}
    </div>
  );
}
