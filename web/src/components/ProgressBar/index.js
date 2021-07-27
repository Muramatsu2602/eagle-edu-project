import React from "react";

const ProgressBar = ({ value, max }) => {
  return (
    <>
      <progress value={value} max={max} />
    </>
  );
};

export default ProgressBar;
