import React, { useState } from 'react';

const MultiSelectDropdown = ({ selectedOptions, onSelect }) => {
  const [options] = useState([
    { label: 'Alphabets', value: 'alphabets' },
    { label: 'Numbers', value: 'numbers' },
    { label: 'Highest Lowercase Alphabet', value: 'highest' },
  ]);

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input type="checkbox" checked={selectedOptions.includes(option.value)} onChange={() => onSelect(option.value)} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default MultiSelectDropdown;