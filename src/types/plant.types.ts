export interface Plant {
  _id: string;
  region: string[];
  name_scientific: string;
  name_common: string;
  flower_color: string;
  sun_full: boolean;
  sun_part: boolean;
  sun_shd: boolean;
  height: string;
  moisture_dry: boolean;
  moisture_ave: boolean;
  moisture_wet: boolean;
  soil_clay: boolean;
  soil_sand: boolean;
  img_url: string;
}
