import React from "react";
import { plantTypes } from "../../../utils/plantTypes";

const FormField = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  required,
}) => {
  const isSelectInput = type === "select";
  const standartOrSelect = isSelectInput ? false : true;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {standartOrSelect ? (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...(required && { required: true })}
        />
      ) : (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {plantTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FormField;
