import React, { useState } from "react";
import axios from "axios";

function InputForm({ setApiResponse }) {
  const [jsonInput, setJsonInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate JSON
      const parsedInput = JSON.parse(jsonInput);

      // Send request to API
      const response = await axios.post("http://localhost:3000/bfhl", parsedInput);

      // Update response state
      setApiResponse(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Invalid JSON input or server error.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="6"
        placeholder='Enter valid JSON (e.g., {"data": ["A","C","z"]})'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </form>
  );
}

export default InputForm;
