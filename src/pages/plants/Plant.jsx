import React from "react";
import { useParams } from "react-router-dom";
import DisplayPlant from "../../components/DisplayComp/Plant/DisplayPlant";

const Plant = () => {
  const { id } = useParams();

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
      <DisplayPlant id={id} />
    </div>
  );
};

export default Plant;
