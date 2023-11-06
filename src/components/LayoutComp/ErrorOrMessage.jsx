import React from "react";

const DisplayErrorOrMessage = ({ error, message }) => {
  return (
    <div>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default DisplayErrorOrMessage;
