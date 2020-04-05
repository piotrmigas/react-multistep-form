import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateAction } from "../actions/stepActions";

const Step1 = (props) => {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: props.yourDetails,
  });

  const { push } = useHistory();

  const submitData = (data) => {
    props.updateAction(data);
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input name="firstName" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        Last Name:
        <input name="lastName" ref={register({ required: "This is required." })} />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { updateAction })(Step1);
