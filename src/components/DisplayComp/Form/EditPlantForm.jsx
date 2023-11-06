import React, { useState } from "react";
import FormButton from "../FormElements/FormButton";
import FormField from "../FormElements/FormField";
import DisplayErrorOrMessage from "../../LayoutComp/ErrorOrMessage"
import { useNavigate } from "react-router-dom";

const EditPlantForm = ({ plant }) => {
  const { name, plantImage, type, description } = plant;
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    photo: "",
    type: "",
    description: "",
    error: "",
    message: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantData = {
      name: updateFormData.name || plant.name,
      photo: updateFormData.photo || plant.plantImage,
      type: updateFormData.type || plant.type,
      description: updateFormData.description || plant.description,
    };
    try {
      const res = await fetch(`http://localhost:5000/plants/${plant._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plantData),
      });
      const json = await res.json();
      if (json.error) {
        setUpdateFormData({ ...updateFormData, error: json.error });
      } else {
        setUpdateFormData({ ...updateFormData, message: json.message });
        navigate("/")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        id="name"
        placeholder={name}
        value={updateFormData.name}
        onChange={(value) =>
          setUpdateFormData({ ...updateFormData, name: value })
        }
        required={true}
      />
      <FormField
        label="Image"
        type="text"
        id="photo"
        placeholder={plantImage}
        value={updateFormData.photo}
        onChange={(value) =>
          setUpdateFormData({ ...updateFormData, photo: value })
        }
        required={true}
      />
      <FormField
        label="Description"
        type="text"
        id="description"
        placeholder={description}
        value={updateFormData.description}
        onChange={(value) =>
          setUpdateFormData({ ...updateFormData, description: value })
        }
        required={true}
      />
      <FormField
        label="Type"
        type="select"
        id="type"
        placeholder={type}
        value={updateFormData.type}
        onChange={(value) =>
          setUpdateFormData({ ...updateFormData, type: value })
        }
        required={true}
      />
      <DisplayErrorOrMessage
        error={updateFormData?.error}
        message={updateFormData?.message}
      />
      <FormButton type={"submit"} label={"Edit Plant"} />
    </form>
  );
};

export default EditPlantForm;
