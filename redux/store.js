import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const initialState = {
  test: "this is a test hahaha",
  user: -1,
  name: "אורח",
  last_name: null,
  address: null,
  ID: null,
  signUp: -1,
  message: null,
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
