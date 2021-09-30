import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantListArr}) {
  // map through `plantListArr` to return a new array of JSX
  const plantListArrJSX = plantListArr.map(
    (singlePlant, idx) => {
      return (
        <PlantCard
          key={idx}
          plantImage={singlePlant.image}
          plantName={singlePlant.name}
          plantPrice={singlePlant.price}
        />
      );
    }
  );

  return (
    <ul className="cards">{plantListArrJSX}</ul>
  );
}

export default PlantList;
