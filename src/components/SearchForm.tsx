import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import React, { useEffect, useState } from "react";
import { getPlantsByCriteria } from "../services/plant.service";
import { Filter } from "../types/filter.types";
import { Plant } from "../types/plant.types";
import PlantDisplay from "./PlantDisplay";
import SearchResultDisplay from "./SearchResultDisplay";
import { Title } from "@mantine/core";

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
    <div className=" bg-white ">
      <Title order={2}>Search for a native plant that fits your garden</Title>
      <form className="flex flex-col justify-around md:justify-center">
        <div className="sun-input bg-green-100 m-2 rounded-md my-2 flex flex-col md:flex-row items-center">
          <label
            className="form-header font-bold text-lg pr-2 w-full md:w-1/3 "
            htmlFor="sun"
          >
            Sun Exposure
          </label>
          <div className="sun-inputs flex justify-around p-2 w-full md:w-2/3">
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
            <div className="p-2 flex flex-col">
              <label className="" htmlFor="sun_full">
                Full Sun
              </label>
              <input
                type="checkbox"
                id="sun_full"
                name="sun_full"
                onChange={handleChange}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className="" htmlFor="sun_part">
                Part Sun
              </label>
              <input
                type="checkbox"
                id="sun_part"
                name="sun_part"
                onChange={handleChange}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className="" htmlFor="sun_shade">
                Shade
              </label>
              <input
                type="checkbox"
                id="sun_shade"
                name="sun_shade"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="moisture-input  bg-green-100 m-2 rounded-md my-2 flex flex-col md:flex-row items-center">
          <label
            className="form-header font-bold text-lg md:w-1/3"
            htmlFor="moisture"
          >
            Soil Moisture
          </label>
          <div className="moisture-inputs flex justify-around p-2 w-full md:w-2/3">
            <div className="p-2 flex flex-col">
              <label className="" htmlFor="moisture_dry">
                Dry
              </label>
              <input
                type="checkbox"
                id="moisture_dry"
                name="moisture_dry"
                onChange={handleChange}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className="" htmlFor="moisture_ave">
                Average
              </label>
              <input
                type="checkbox"
                id="moisture_ave"
                name="moisture_ave"
                onChange={handleChange}
              />
            </div>
            <div className="p-2 flex flex-col">
              <label className=" " htmlFor="moisture_wet">
                Wet
              </label>
              <input
                type="checkbox"
                id="moisture_wet"
                name="moisture_wet"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <Button variant="contained" onClick={submitHandler} className="m-2">
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
