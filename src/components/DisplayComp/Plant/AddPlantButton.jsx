import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const AddPlantButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addPlants");
  };

  return (
    <button onClick={handleClick}>
      <RiPlantFill />
    </button>
  );
};

export default AddPlantButton;
