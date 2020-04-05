import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import stepReducer from "./reducers/stepReducer";
import throttle from "lodash/throttle";

let initialState = {
  yourDetails: {
    firstName: "",
    lastName: "",
    age: "",
    yearsOfExp: "",
  },
};

const persistedState = localStorage.getItem("multistep-form");
if (persistedState) {
  initialState = JSON.parse(persistedState);
}

const store = createStore(
  stepReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    localStorage.setItem("multistep-form", JSON.stringify(store.getState()));
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
