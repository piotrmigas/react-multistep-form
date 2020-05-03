import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const yourDetails = useSelector((state) => state.yourDetails);
  return (
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(yourDetails, null, 2)}</pre>
    </div>
  );
};

export default Result;
