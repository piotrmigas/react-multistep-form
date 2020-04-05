const stepReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ACTION":
      return {
        ...state,
        yourDetails: {
          ...state.yourDetails,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default stepReducer;
