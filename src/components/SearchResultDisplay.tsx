import { Plant } from "../types/plant.types";
import { IconSunHigh, IconSunOff, IconSunLow } from "@tabler/icons";
import "./SearchResultDisplay.css";

interface Props {
  plant: Plant;
}

export default function SearchResultDisplay({ plant }: Props) {
  return (
    <div className="plant-detail-sm p-2">
      <h2 className="font-bold">{plant.name_common}</h2>
      <div className="sun flex ">
        <p>Full Sun: {plant.sun.full && <IconSunHigh size={24} />}</p>
        <p>Part Sun: {plant.sun.part && <IconSunLow size={24} />}</p>
        <p>Shade: {plant.sun.shade && <IconSunOff size={24} />}</p>
      </div>
    </div>
  );
}
