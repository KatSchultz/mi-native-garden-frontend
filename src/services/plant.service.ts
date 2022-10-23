import { api } from "../libs/axios";
import { Plant } from "../types/plant.types";

interface PlantUpdateParams {
  id: string;
  data: Partial<Plant>;
}

export async function getPlants() {
  const response = await api.get<Plant>("/plants");
  return response.data;
}

export async function getPlant(id: string) {
  const response = await api.get<Plant>(`/plants/${id}`);
  return response.data;
}

export async function getPlantsByUid(uid: string) {
  const response = await api.get<Plant>(`/plants?uid=${uid}`);
  return response.data;
}