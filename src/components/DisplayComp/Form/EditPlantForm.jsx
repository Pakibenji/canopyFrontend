import React, { useState } from "react";
import FormButton from "../FormElements/FormButton";
import FormField from "../FormElements/FormField";
import DisplayErrorOrMessage from "../../LayoutComp/ErrorOrMessage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPlant } from "../../../actions/plantActions.js";

const EditPlantForm = () => {
  const { plants } = useSelector((state) => state.plant);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, name, proprietary, photo, description, like, toBarter, type } =
    plants[0] || {};
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    photo: "",
    type: "",
    description: "",
    error: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantData = {
      name: updateFormData.name,
      photo: updateFormData.photo,
      type: updateFormData.type,
      description: updateFormData.description,
      _id: _id,
      proprietary: proprietary,
      like: like,
      toBarter: toBarter,
    };
    try {
      dispatch(editPlant(plantData));
      if (plants) {
        setUpdateFormData({
          name: "",
          photo: "",
          type: "",
          description: "",
          error: "",
          message: "Plant edited!",
        });
        navigate("/");
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
          placeholder={photo}
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
