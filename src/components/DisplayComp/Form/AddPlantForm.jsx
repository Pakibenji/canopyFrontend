import React, { useState } from "react";
import DisplayErrorOrMessage from "../../LayoutComp/ErrorOrMessage";
import FormButton from "../FormElements/FormButton";
import FormField from "../FormElements/FormField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPlant } from "../../../actions/plantActions";

const AddPlantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    type: "",
    description: "",
    message: "",
    error: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { plants } = useSelector((state) => state.plant);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(createPlant(formData));
      if (plants) {
        setFormData({
          name: "",
          photo: "",
          type: "",
          description: "",
          message: "Plant added!",
          error: "",
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
        value={formData.name}
        onChange={(value) => {
          setFormData({ ...formData, name: value });
        }}
        required={true}
      />
      <FormField
        label="photo"
        type="text"
        id="photo"
        value={formData.photo}
        onChange={(value) => setFormData({ ...formData, photo: value })}
        required={true}
      />
      <FormField
        label="Description"
        type="text"
        id="description"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        required={true}
      />
      <FormField
        label="Type"
        type="select"
        id="plantType"
        name="plantType"
        value={formData.type}
        onChange={(value) => setFormData({ ...formData, type: value })}
      />
      <DisplayErrorOrMessage
        error={formData?.error}
        message={formData?.message}
      />
      <FormButton type={"submit"} label={"Add plant"} />
    </form>
  );
};

export default AddPlantForm;
