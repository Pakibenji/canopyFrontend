import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayUserInfo from "../../components/DisplayComp/User/DisplayUserInfo";
import { logoutUser } from "../../actions/authActions";
import { useNavigate } from "react-router";

const User = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  
  return (
    <div>
      <h2>User</h2>
      <DisplayUserInfo userInfo={userInfo} logout={logout} />
    </div>
  );
};

export default User;
