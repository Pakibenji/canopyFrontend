import React from "react";
import ToggleToBarterPlantButton from "./ToggleToBarterPlantButton";
import HandleToEditPageButton from "./HandleToEditPageButton";
import { useSelector } from "react-redux";
import usePlant from "../../../utils/usePlant";
import LikePlantButton from "./LikePlantButton";

const DisplayPlant = ({ id }) => {
  usePlant("getOnePlant", id);
  const {plants} = useSelector(
    (state) => state.plant
  );
  const {name, proprietary, photo, description, like, toBarter } =
    plants[0] || {};
  return (
    <div>
      <img src={photo} alt={proprietary} />
      <h3>{name}</h3>
      <p>{proprietary}</p>
      <p>{description}</p>
      <p>{like}</p>
      <p>{toBarter ? "To barter" : "Not to barter"}</p>
      <HandleToEditPageButton plant={plants[0]}/>
      <ToggleToBarterPlantButton toBarter={toBarter} plant={plants[0]} />
      <LikePlantButton plant={plants[0]} />
    </div>
  );
};

export default DisplayPlant;
