import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import React, { useEffect, useState } from "react";
import { getPlantsByCriteria } from "../services/plant.service";
import { Filter } from "../types/filter.types";
import { Plant } from "../types/plant.types";
import PlantDisplay from "./PlantDisplay";
import SearchResultDisplay from "./SearchResultDisplay";

export default function SearchForm() {
  const [userInput, setUserInput] = useState<Filter>({
    sun_shade: "",
    sun_full: "",
    sun_part: "",
    moisture_wet: "",
    moisture_ave: "",
    moisture_dry: "",
  });
  const [searchInput, setSearchInput] = useState({
    sun_shade: "",
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
    <div className="">
      <h2>Search for a native plant that fits your garden</h2>
      <form className="flex flex-col md:flex-row bg-white justify-around md:justify-center">
        <div className="sun-input">
          <label
            className="form-header font-bold text-lg pr-2 w-full md:w-11/12"
            htmlFor="sun"
          >
            Sun
          </label>
          <div className="sun-inputs flex justify-around p-2">
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
            <div className="p-2">
              <input
                type="checkbox"
                id="sun_full"
                name="sun_full"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="sun_full">
                Full Sun
              </label>
            </div>
            <div className="p-2">
              <input
                type="checkbox"
                id="sun_part"
                name="sun_part"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="sun_part">
                Part Sun
              </label>
            </div>
            <div className="p-2">
              <input
                type="checkbox"
                id="sun_shade"
                name="sun_shade"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="sun_shade">
                Shade
              </label>
            </div>
          </div>
        </div>
        <div className="moisture-input ">
          <label className="form-header font-bold text-lg" htmlFor="moisture">
            Moisture
          </label>
          <div className="moisture-inputs flex justify-around p-2">
            <div className="p-2">
              <input
                type="checkbox"
                id="moisture_dry"
                name="moisture_dry"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="moisture_dry">
                Dry
              </label>
            </div>
            <div className="p-2">
              <input
                type="checkbox"
                id="moisture_ave"
                name="moisture_ave"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="moisture_ave">
                Average
              </label>
            </div>
            <div className="p-2">
              <input
                type="checkbox"
                id="moisture_wet"
                name="moisture_wet"
                onChange={handleChange}
              />
              <label className="pl-2" htmlFor="moisture_wet">
                Wet
              </label>
            </div>
          </div>
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
