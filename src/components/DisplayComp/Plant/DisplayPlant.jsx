import React from "react";
import ToggleToBarterPlantButton from "./ToggleToBarterPlantButton";
import HandleToEditPageButton from "./HandleToEditPageButton";
import { useSelector } from "react-redux";
import usePlant from "../../../utils/usePlant";
import LikePlantButton from "./LikePlantButton";
import { useParams } from "react-router-dom";

const DisplayPlant = ({id}) => {
  usePlant("getOnePlant", id);
  const { loading, plants, error, success } = useSelector(
    (state) => state.plant
  );
  const {_id, name, proprietary, photo, description, like, toBarter } = plants[0] || {};
  return (
    <div>
      <img src={photo} alt={proprietary} />
      <h3>{name}</h3>
      <p>{proprietary}</p>
      <p>{description}</p>
      <p>{like}</p>
      <p>{toBarter ? "To barter" : "Not to barter"}</p>
      <HandleToEditPageButton id={_id}/>
      <ToggleToBarterPlantButton toBarter={toBarter} id={_id}/>
      <LikePlantButton plant={plants[0]}/>
    </div>
  );
};

export default DisplayPlant;
