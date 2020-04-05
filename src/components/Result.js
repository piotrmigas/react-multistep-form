import React from "react";
import { connect } from "react-redux";
import { updateAction } from "../actions/stepActions";

const Result = (props) => {
  return (
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(props.yourDetails, null, 2)}</pre>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { updateAction })(Result);
