import axiosInstance from "axios";
import { config } from "../config";

// Our API is api
export const api = axiosInstance.create({
  baseURL: config.apiURL,
});

// external API called w axios
export const axios = axiosInstance;
