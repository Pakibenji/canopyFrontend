import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayPlant = ({ plant }) => {
  const { _id, name, proprietary, photo, description, like, toBarter } = plant;
  const navigate = useNavigate();
  return (
    <div>
      <img src={photo} alt={proprietary} />
      <h3>{name}</h3>
      <p>{proprietary}</p>
      <p>{description}</p>
      <p>{like}</p>
      <p>{toBarter ? "To barter" : "Not to barter"}</p>
      <button onClick={() => navigate(`/plant/edit/${_id}`)}>Edit</button>
    </div>
  );
};

export default DisplayPlant;
