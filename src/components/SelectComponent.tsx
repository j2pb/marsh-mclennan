import React from "react";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SelectComponent: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange} >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
