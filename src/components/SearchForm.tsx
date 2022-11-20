import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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
    moisture_ave: "",
    moisture_dry: "",
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
      <form>
        <div className="sun-input">
          <label htmlFor="sun" className="pr-2 ">
            Sun
          </label>
          <div>
            {/* <FormGroup className="w-1/2">
            <FormControlLabel
              control={<Checkbox onChange={handleChange} name="shade" />}
              label="Shade"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleChange} name="sun_part" />}
              label="Part Sun"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleChange} name="sun_full" />}
              label="Full Sun"
            />
          </FormGroup> */}
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
        </div>
        <div className="moisture-input">
          <label htmlFor="moisture">Moisture</label>
          <input
            type="checkbox"
            id="moisture_dry"
            name="moisture_dry"
            onChange={handleChange}
          />
          <label htmlFor="moisture_dry">Dry</label>
          <input
            type="checkbox"
            id="moisture_ave"
            name="moisture_ave"
            onChange={handleChange}
          />
          <label htmlFor="moisture_ave">Average</label>
          <input
            type="checkbox"
            id="moisture_wet"
            name="moisture_wet"
            onChange={handleChange}
          />
          <label htmlFor="moisture_wet">Wet</label>
        </div>
        <Button variant="contained" onClick={submitHandler}>
          Search
        </Button>
        {/* <button>Search</button> */}
      </form>
      <div className="search-results flex justify-center align-center flex-col items-center">
        {searchPlants.map((plant) => (
          <SearchResultDisplay plant={plant} key={plant._id} />
        ))}
      </div>
    </div>
  );
}
