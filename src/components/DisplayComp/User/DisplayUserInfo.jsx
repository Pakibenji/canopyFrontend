import React from "react";

const DisplayUserInfo = ({ userInfo, logout }) => {
  const { userEmail } = userInfo;
  return (
    <div>
      {userEmail}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DisplayUserInfo;
