import React, { useState } from "react";
import FormField from "../FormElements/FormField";
import FormButton from "../FormElements/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import DisplayErrorOrMessage from "../../LayoutComp/ErrorOrMessage";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    dispatch(loginUser(formData));
    if (success) {
      setFormData({
        email: "",
        password: "",
        message: "You have been logged in successfully",
        error: "",
      });
    }
    if (error) {
      setFormData({
        ...formData,
        message: "",
        error: error,
      });
    }
    navigate("/");
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
      <FormButton label={loading ? "Loading" : "Login"} />
      <DisplayErrorOrMessage
        loading={loading}
        error={formData.error}
        message={formData.message}
      />
    </form>
  );
};

export default LoginForm;
