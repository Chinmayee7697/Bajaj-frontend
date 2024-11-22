import React, { useState, useEffect  } from "react";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";

function App() {

  useEffect(() => {
    document.title = "0101CS211041"; // Update this with your roll number
  }, []);

  // State to manage API response and selected dropdown values
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const rollNumber = "0101CS211041"; // Update with your roll number

  // Handle selected dropdown options
  const handleSelectOptions = (options) => {
    setSelectedOptions(options);
  };

  return (
    <div className="App">
      <h1>BFHL Frontend</h1>
      <InputForm setApiResponse={setApiResponse} />
      {apiResponse && (
        <ResponseDisplay
          apiResponse={apiResponse}
          selectedOptions={selectedOptions}
          handleSelectOptions={handleSelectOptions}
        />
      )}
    </div>
  );
}

export default App;
