import React, { useState } from "react";

function ResponseDisplay({ apiResponse, selectedOptions, handleSelectOptions }) {
  const [options, setOptions] = useState([
    { label: "Alphabets", value: "alphabets" },
    { label: "Numbers", value: "numbers" },
    { label: "Highest Lowercase Alphabet", value: "highest_lowercase_alphabet" },
  ]);

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      handleSelectOptions([...selectedOptions, value]);
    } else {
      handleSelectOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const filteredResponse = {};
  selectedOptions.forEach((option) => {
    if (apiResponse[option]) {
      filteredResponse[option] = apiResponse[option];
    }
  });

  return (
    <div>
      <h2>API Response</h2>
      <div>
        {options.map((opt) => (
          <div key={opt.value}>
            <input
              type="checkbox"
              id={opt.value}
              value={opt.value}
              onChange={handleOptionChange}
            />
            <label htmlFor={opt.value}>{opt.label}</label>
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
}

export default ResponseDisplay;
