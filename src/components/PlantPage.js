import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const BASE_URL = 'http://localhost:6001/plants';

  // define state to keep track of the plant list array
  const [plantListArr, setPlantListArr] = useState([]);

  // define state to keep track of the search text
  const [searchText, setSearchText] = useState('');

  // only fetching data once after this component fist renders
  // needs to include the empty dependency array
  useEffect(() => {
    // GET /plants
    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => setPlantListArr(data))
  }, []);

  // function to wrap `setSearchText` setter function
  // to be sent down to the `Search` component
  function searchPlantsHandler(event) {
    setSearchText(event.target.value);
  }

  // function to wrap `setPlantListArr` setter function
  // to be sent down to the `NewPlantForm` component
  function setPlantListArrWrapper(newPlant) {
    setPlantListArr([...plantListArr, newPlant]);
  }

  // filter plants by search text
  const plantsToDisplay = plantListArr.filter(singlePlant => {
    if (singlePlant.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <main>
      <NewPlantForm setPlantListArrWrapper={setPlantListArrWrapper} />
      <Search searchText={searchText} searchPlantsHandler={searchPlantsHandler} />
      <PlantList plantListArr={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
