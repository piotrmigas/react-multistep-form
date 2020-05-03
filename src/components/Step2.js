import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAction } from "../actions/stepActions";

const Step2 = () => {
  const yourDetails = useSelector((state) => state.yourDetails);

  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm({
    defaultValues: yourDetails,
  });

  const { push } = useHistory();

  const submitData = (data) => {
    dispatch(updateAction(data));
    push("/result");
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input
          name="age"
          type="number"
          min="0"
          ref={register({
            required: "This is required",
            min: {
              value: 18,
              message: "You are required to be 18 above.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="age" as="p" />
      </label>
      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          type="number"
          min="0"
          ref={register({
            required: "This is required",
            min: {
              value: 1,
              message: "you need 1 year of exp.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="yearsOfExp" as="p" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Step2;
