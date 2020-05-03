import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../actions/stepActions";

const Step1 = () => {
  const yourDetails = useSelector((state) => state.yourDetails);

  const dispatch = useDispatch();

  const { handleSubmit, errors, register } = useForm({
    defaultValues: yourDetails,
  });

  const { push } = useHistory();

  const submitData = (data) => {
    dispatch(updateAction(data));
    push("/step2");
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="firstName" as="p" />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
          ref={register({ required: "This is required." })}
        />
        <ErrorMessage errors={errors} name="lastName" as="p" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Step1;
