import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DisplayPlant from "../../components/DisplayComp/Plant/DisplayPlant";
import DisplayErrorOrMessage from "../../components/LayoutComp/ErrorOrMessage";
import usePlant from "../../utils/usePlant";

const OnePlant = ({id}) => {
  const navigate = useNavigate();
  const getOnePlant = usePlant("getOnePlant", id);
  const { loading, plants, error, success } = useSelector(
    (state) => state.plant
  );

  return (
    <div>
      {loading && <div>loading</div>}
      {plants && <DisplayPlant plant={plants[0]} />}
      <DisplayErrorOrMessage error={error} message={success} />
    </div>
  );
};

export default OnePlant;
