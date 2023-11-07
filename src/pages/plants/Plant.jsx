import React from "react";
import { useParams } from "react-router-dom";
import DisplayPlant from "../../components/DisplayComp/Plant/DisplayPlant";

const Plant = () => {
  const { id } = useParams();
  return (
    <div>
      <DisplayPlant id={id} />
    </div>
  );
};

export default Plant;
