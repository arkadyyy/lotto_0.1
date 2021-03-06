import axios from "axios";
import Amplify, { Auth } from "aws-amplify";

////////////////////////////////////////////////

const SignUp = (
  Email,
  password,
  phoneNum,
  lastName,
  address,
  gender,
  birthdate,
  firstName,
  ID
) => async (dispatch) => {
  let user = null;
  dispatch({
    type: "SIGNUP_ATTEMPT",
  });

  try {
    user = await Auth.signUp({
      username: Email,
      password: password,
      attributes: {
        email: Email,
        phone_number: phoneNum.replace("0", "+972"),
        family_name: lastName,
        address: address,
        gender: gender,
        birthdate: birthdate,
        name: firstName,
        "custom:ID": ID,
      },
    });

    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: { user },
    });
  } catch (error) {
    console.log("error from action : ", error);
    let msg;
    if (error.message === "An account with the given email already exists.") {
      msg = "משתמש עם אימייל זה כבר קיים";
    }
    await dispatch({
      type: "SIGNUP_FAIL",
      payload: { msg },
    });
  }
};

const SignUpConfirmation = (username, token) => async (dispatch) => {
  try {
    await Auth.confirmSignUp(username, token);
    dispatch({
      type: "SIGNUP_CONFIRMATION_SUCCESS",
    });
    console.log("i am here !");
  } catch (error) {
    dispatch({
      type: "SIGNUP_CONFIRMATION_FAIL",
    });
    console.log("error confirming sign up", error);
  }
};

const LogIn = (username, password) => async (dispatch) => {
  let user = null;

  dispatch({
    type: "LOGIN_ATTEMPT",
  });
  try {
    user = await Auth.signIn(username, password);

    let accessToken;
    let jwt;
    await Auth.currentSession().then((res) => {
      accessToken = res.getAccessToken();
      jwt = accessToken.getJwtToken();
    });

    console.log("log in from action was succsessful !@!@!@!@!@!@!@!@");
    console.log(user);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user, jwt },
    });
  } catch (error) {
    console.log(error);
    let msg;
    if (error.message === "User does not exist.") {
      msg = "משתמש אינו קיים";
    } else if (error.message === "Incorrect username or password.") {
      msg = "שם משתמש או סיסמה שגויים";
    }

    dispatch({
      type: "LOGIN_FAIL",
      payload: { msg },
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

export { LogIn, LogOut, SignUp, SignUpConfirmation };
