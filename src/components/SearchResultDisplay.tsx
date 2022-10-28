import { Plant } from "../types/plant.types";
interface Props {
  plant: Plant;
}

export default function SearchResultDisplay({ plant }: Props) {
  return (
    <div className="plant-detail-sm">
      <h2>{plant.name_common}</h2>
      <p>Likes Shade: {plant.sun.shade && <>YES!</>}</p>
      <p>Likes Full Sun: {plant.sun.full && <>YES!</>}</p>
      <p>Likes Part Sun: {plant.sun.part && <>YES!</>}</p>
    </div>
  );
}
