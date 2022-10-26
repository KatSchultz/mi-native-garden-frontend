import React from "react";
import { Plant } from "../types/plant.types";
import { Card, Image, Group } from "@mantine/core";

interface Props {
  plant: Plant;
}

export default function PlantDisplay({ plant }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Card shadow="sm" p="lg" radius="md" withBorder>
        <div className="names">
          <h1 className="text-4xl">{plant.name_common}</h1>
          <p>{plant.name_scientific}</p>
        </div>
        <div className="details-w-img flex">
          {plant.img && (
            <div>
              <Image src={plant.img.url} width={400} />
              {/* <img src={plant.img.url} alt="" className="max-w-screen-sm" /> */}
              <p className="img-credit">
                Photo by{" "}
                <a href="https://unsplash.com/@jannerboy62?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Nick Fewings
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/s/photos/black-eyed-susan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </div>
          )}
          <div className="plant-details">
            <div className="sun">
              <h2 className="text-lg underline">Sun</h2>
              {plant.sun.full && <p>Full</p>}
              {plant.sun.part && <p>Part</p>}
              {plant.sun.shade && <p>Shade</p>}
            </div>
            <div className="moisture">
              <h2 className="text-lg underline">Moisture</h2>
            </div>
            <div className="color">
              <h2 className="text-lg underline">Color</h2>
              <p>{plant.flower_color}</p>
            </div>
            <div className="height">
              <h2 className="text-lg underline">Height (inches)</h2>
              <p>
                {plant.height.min}-{plant.height.max}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
