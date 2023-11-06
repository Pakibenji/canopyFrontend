import React from "react";
import { useDispatch } from "react-redux";
import { toggleBarterPlant } from "../../../actions/plantActions";

const ToggleToBarterPlantButton = ({toBarter, plant}) => {
const dispatch = useDispatch();

  const handleToBarter = () => {
    dispatch(toggleBarterPlant(plant));
  }


  return <button onClick={() => handleToBarter()}>{toBarter ? "notToBarter" : "tobarter"}</button>;
};

export default ToggleToBarterPlantButton;
