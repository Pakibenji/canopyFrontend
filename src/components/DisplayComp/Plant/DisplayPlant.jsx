import React from "react";
import ToggleToBarterPlantButton from "./ToggleToBarterPlantButton";
import HandleToEditPageButton from "./HandleToEditPageButton";
import { useSelector } from "react-redux";
import usePlant from "../../../utils/usePlant";
import LikePlantButton from "./LikePlantButton";
import { checkIfUserIsThePlantProprietary } from "../../../utils/userChecking";

const DisplayPlant = ({ id }) => {
  usePlant("getOnePlant", id);
  const { plants } = useSelector((state) => state.plant);
  const currentUserId = useSelector((state) => state.auth.userInfo.userId);
  const { name, proprietary, photo, description, like, toBarter, userId } =
    plants[0] || {};

  const isThePlantProprietary = checkIfUserIsThePlantProprietary(
    userId,
    currentUserId
  );
  return (
    <div>
      <img src={photo} alt={proprietary} />
      <h3>{name}</h3>
      <p>{proprietary}</p>
      <p>{description}</p>
      <p>{like}</p>
      <p>{toBarter ? "To barter" : "Not to barter"}</p>
      {isThePlantProprietary && (
        <>
          <HandleToEditPageButton plant={plants[0]} />
          <ToggleToBarterPlantButton toBarter={toBarter} plant={plants[0]} />
        </>
      )}

      <LikePlantButton plant={plants[0]} />
    </div>
  );
};

export default DisplayPlant;
