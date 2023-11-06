import React, { useState, useEffect } from "react";
import EditPlantForm from "../../components/DisplayComp/Form/EditPlantForm";
import { useParams } from "react-router-dom";

const EditPlant = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState();

  const fetchPlant = async () => {
    try {
      const res = await fetch(`http://localhost:5000/plants/${id}`);
      const json = await res.json();
      setPlant(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlant();
  }, []);

  return <div>{plant && <EditPlantForm plant={plant} />}</div>;
};

export default EditPlant;
