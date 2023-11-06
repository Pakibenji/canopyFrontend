import React from "react";
import { useParams } from "react-router-dom";
import OnePlant from "../../components/plantComp/OnePlant";

const Plant = () => {
  const { id } = useParams();
  // const likePlant = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/plants/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ like: plant.like + 1 }),
  //     });
  //     const json = await res.json();
  //     setPlant(json);
  //     setMessage("Liked!");
  //   } catch (error) {
  //     console.error(error);
  //     setError("Error liking plant");
  //   }
  // };

  // const updatePlant = async (toBarter) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/plants/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ toBarter }),
  //     });
  //     const json = await res.json();
  //     setPlant(json);
  //     setMessage("Updated!");
  //   } catch (error) {
  //     console.error(error);
  //     setError("Error updating plant");
  //   }
  // };

  // const addToBarter = async () => {
  //   await updatePlant(true);
  // };

  // const removeFromBarter = async () => {
  //   await updatePlant(false);
  // };

  // const deletePlant = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/plants/${id}`, {
  //       method: "DELETE",
  //     });
  //     const json = await res.json();
  //     setMessage("Deleted!");
  //     navigate("/");
  //   } catch (error) {
  //     setError("Error deleting plant");
  //     console.error(error);
  //   }
  // };
  return (
    <div>
      <OnePlant id={id} />
    </div>
  );
};

export default Plant;
