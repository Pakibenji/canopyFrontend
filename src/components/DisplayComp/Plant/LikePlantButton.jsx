import React from "react";
import { useDispatch } from "react-redux";
import { likePlant } from "../../../actions/plantActions";

const LikePlantButton = ({plant}) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePlant(plant));
  };

  return <button onClick={() => handleLike()}>Like</button>;
};

export default LikePlantButton;
