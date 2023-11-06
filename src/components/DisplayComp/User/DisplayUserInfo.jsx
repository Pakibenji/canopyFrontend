import React from "react";

const DisplayUserInfo = ({ userInfo, logout }) => {
  const { email } = userInfo;
  return (
    <div>
      {email}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DisplayUserInfo;
