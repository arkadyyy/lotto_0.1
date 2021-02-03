import axios from "axios";
import Amplify, { Auth } from "aws-amplify";

////////////////////////////////////////////////

const LogIn = (username, password) => async (dispatch) => {
  let user = null;

  dispatch({
    type: "LOGIN_ATTEMPT",
  });
  try {
    user = await Auth.signIn(username, password);

    console.log("log in from action was succsessful !@!@!@!@!@!@!@!@");
    console.log(user);
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

const LogOut = () => async (dispatch) => {
  try {
    await Auth.signOut();
    console.log("loged out succssfully !@!@!@");
    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: { user: -1 },
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILED",
    });
    console.log("error signing out: ", error);
  }
};

export { LogIn, LogOut };
