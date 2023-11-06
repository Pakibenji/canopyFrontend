import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePlant } from "../../../actions/plantActions";
import { useNavigate } from "react-router-dom";

const DeletePlantButton = () => {
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.plant);
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deletePlant(plants[0]));
    navigate("/");
  };

  return <button onClick={() => handleDelete()}>Delete</button>;
};

export default DeletePlantButton;
