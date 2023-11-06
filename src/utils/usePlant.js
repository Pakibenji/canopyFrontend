import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPlants, getPlantById } from "../actions/plantActions";

const usePlant = (usePlantAction, id) => {
  const dispatch = useDispatch();

  const actions = {
    usePlantAction: () => {
      switch (usePlantAction) {
        case "getAllPlants":
          return getAllPlants();
        case "getOnePlant":
          return getPlantById(id);
        default:
          return getAllPlants;
      }
    },
  };

  useEffect(() => {
    dispatch(actions.usePlantAction());
  }, []);

  return null;
};

export default usePlant;
