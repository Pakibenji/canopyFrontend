import React from "react";
import DisplayAllPlants from "../DisplayComp/Plant/DisplayAllPlants";
import { useSelector } from "react-redux";
import usePlant from "../../utils/usePlant";

const AllPlants = () => {
  usePlant("getAllPlants");
  const { loading, plants, error, success } = useSelector(
    (state) => state.plant
  );

  return (
    <div>
      {loading && <div>loading</div>}
      {plants &&
        plants.map((plant) => {
          return <DisplayAllPlants key={plant._id} plant={plant} />;
        })}
    </div>
  );
};

export default AllPlants;
