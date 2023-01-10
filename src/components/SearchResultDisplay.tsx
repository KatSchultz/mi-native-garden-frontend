import { Plant } from "../types/plant.types";
import {
  IconSunHigh,
  IconSunOff,
  IconSunLow,
  IconDroplet,
  IconDropletFilled,
  IconDropletOff,
} from "@tabler/icons";
import "./SearchResultDisplay.css";

interface Props {
  plant: Plant;
}

export default function SearchResultDisplay({ plant }: Props) {
  return (
    <div className="plant-detail-sm p-2">
      <h2 className="font-bold">{plant.name_common}</h2>
      <div className="sun">
        <h2>Sun</h2>
        <div className="sun-icons flex ">
          <p>Full: {plant.sun.full && <IconSunHigh size={24} />}</p>
          <p>Part: {plant.sun.part && <IconSunLow size={24} />}</p>
          <p>Shade: {plant.sun.shade && <IconSunOff size={24} />}</p>
        </div>
      </div>
      <div className="moisture">
        <h2>Moisture</h2>
        <div className="moisture-icons flex">
          <p>Wet: {plant.moisture.wet && <IconDroplet size={24} />}</p>
          <p>
            Average: {plant.moisture.ave && <IconDropletFilled size={24} />}
          </p>
          <p>Dry: {plant.moisture.dry && <IconDropletOff size={24} />}</p>
        </div>
      </div>
    </div>
  );
}
