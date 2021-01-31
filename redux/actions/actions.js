import axios from "axios";
import Amplify, { Auth } from "aws-amplify";

////////////////////////////////////////////////

const LogIn = (username, password) => async (dispatch) => {
  let user = null;
  try {
    user = await Auth.signIn(username, password);

    console.log("log in from action was succsessful !@!@!@!@!@!@!@!@");
    console.log("user from action +++++++++++++++++++ : ", user);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user },
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { LogIn };
