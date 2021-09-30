import React, {useState} from "react";

function NewPlantForm({setPlantListArrWrapper}) {
  const BASE_URL = 'http://localhost:6001/plants';

  // define state to keep track of form data
  const [formData, setFormData] = useState(
    {
      name: '',
      image: '',
      price: ''
    }
  );

  // function that is triggered by each keystroke when user fills out the new plant form
  function fillingOutNewPlantFormHandler(event) {
    let eventTargetValue = event.target.value;

    // need to convert string to floating number for price
    if (event.target.type === 'number') {
      eventTargetValue = parseFloat(event.target.value);
    }
    
    // call setter function to set formData
    // which will cause this component to re-render
    setFormData(
      {
        ...formData,
        [event.target.name]: eventTargetValue
      }
    );
  }

  // function that is triggered by submitting the new plant form
  function submittingNewPlantFormHandler(event) {
    event.preventDefault();
    
    // new plant object
    const newPlantData = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    };
    
    // POST /plants
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlantData)
    })
    .then(response => response.json())
    .then(data => setPlantListArrWrapper(data));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submittingNewPlantFormHandler}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={fillingOutNewPlantFormHandler}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={fillingOutNewPlantFormHandler}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={fillingOutNewPlantFormHandler}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
