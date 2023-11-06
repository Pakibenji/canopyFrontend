import React, { useState } from "react";
import FormField from "../FormElements/FormField";
import FormButton from "../FormElements/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import DisplayErrorOrMessage from "../../LayoutComp/ErrorOrMessage";
import { useNavigate } from "react-router";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
    error: "",
  });
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(registerUser(formData));
    if (success) {
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        message: "Your account has been created successfully",
        error: "",
      });
      navigate("/login");
    }
    if (error) {
      setFormData({
        ...formData,
        message: "",
        error: error,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(value) => setFormData({ ...formData, password: value })}
      />
      <FormField
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={(value) =>
          setFormData({ ...formData, confirmPassword: value })
        }
      />
      <FormButton label={loading ? "Loading" : "Register"} />
      <DisplayErrorOrMessage error={error} message={success} />
    </form>
  );
};

export default RegisterForm;
