import React from "react";
import { useNavigate } from "react-router-dom";
import LikePlantButton from "./LikePlantButton";

const DisplayAllPlants = ({ plant }) => {
  const { _id, proprietary, photo, like, toBarter} = plant;
  const navigate = useNavigate();
  return (
    <div>
      <img src={photo} alt={proprietary} />
      <h3>{proprietary}</h3>
      <p>{like}</p>
      <p>{toBarter ? "To barter" : "Not to barter"}</p>
      <button onClick={() => navigate(`/plant/${_id}`)}>View</button>
      <LikePlantButton plant={plant}/>
    </div>  
  );
};

export default DisplayAllPlants;
