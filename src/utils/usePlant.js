import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPlants, getPlantById } from "../actions/plantActions";

const usePlant = (usePlantAction, id, plant) => {
  const dispatch = useDispatch();

  useEffect(() => {
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

    dispatch(actions.usePlantAction());
  }, [dispatch, usePlantAction, id]);

  return null;
};

export default usePlant;
