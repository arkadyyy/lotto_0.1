import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import logInStyles from "./LogInStyles";
import { Button, Label, Spinner } from "native-base";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faTimes,
  faQuestion,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

import { LogIn } from "../../redux/actions/actions";
import { Touchable } from "react-native";
Amplify.configure(awsconfig);

const ForgotPasswordPage = ({
  navigation,
  setshowForgotPass,
  showForgotPass,
  setMsg,
  msg,
}) => {
  const validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [code, setcode] = useState("");

  const [emailValidation, setemailValidation] = useState(true);
  useEffect(() => {
    // dispatch(LogIn("dlevkovich05@gmail.com", "Dekel1145"));
    dispatch({ type: "RESET_SIGNUP" });
  }, []);
  useEffect(() => {
    if (store.user.attributes) {
      navigation.navigate("Home");
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    }

    if (store.message !== null) {
      setTimeout(() => {
        dispatch({ type: "RESET_MESSAGE" });
      }, 3000);
    }
  }, [store]);

  useEffect(() => {
    console.log("showForgotPass : ", showForgotPass);
  }, [showForgotPass]);

  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {/* {screen that shows when email sent successfully && fill the code} */}
        {showForgotPass === 3 && (
          <View style={logInStyles.container}>
            <View style={logInStyles.blanksquare}></View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
              ></View>
              {/* 00ADEF Deep Sky Blue*/}

              <View
                style={[
                  logInStyles.detailsSquare,
                  { height: "80%", padding: 20 },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",

                    marginBottom: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setshowForgotPass(-1)}
                    style={{
                      alignSelf: "center",
                      marginVertical: 8,
                      backgroundColor: "#00ADEF",
                      padding: 7,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} color={"white"} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 28,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer-bold",
                      marginLeft: 25,
                    }}
                  >
                    שכחת סיסמה ?
                  </Text>
                </View>
                {store.user === 2 ? (
                  <Spinner />
                ) : (
                  <>
                    <Label style={{ color: "white", fontFamily: "fb-Spacer" }}>
                      אימייל
                    </Label>

                    <TextInput
                      rounded
                      style={logInStyles.signInPageInput}
                      fontSize={12}
                      onChangeText={(text) => setusername(text)}
                    />

                    <Label style={{ color: "white", fontFamily: "fb-Spacer" }}>
                      קוד
                    </Label>

                    <TextInput
                      rounded
                      style={logInStyles.signInPageInput}
                      fontSize={12}
                      onChangeText={(text) => setcode(text)}
                    />

                    <Label style={{ color: "white", fontFamily: "fb-Spacer" }}>
                      סיסמה חדשה
                    </Label>

                    <TextInput
                      secureTextEntry={true}
                      rounded
                      style={logInStyles.signInPageInput}
                      fontSize={12}
                      onChangeText={(text) => setpassword(text)}
                    />

                    <Button
                      rounded
                      style={{
                        backgroundColor: "#FBB03B",
                        borderColor: "white",
                        borderWidth: 2,
                        borderRadius: 17,
                        flex: 1,
                        marginVertical: 20,
                        marginHorizontal: 70,
                      }}
                      onPress={async () => {
                        await Auth.forgotPasswordSubmit(
                          username,
                          code,
                          new_password
                        )
                          .then((res) => setshowForgotPass(4))
                          .catch((err) => setshowForgotPass(-2));
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          fontSize: 30,
                          textAlign: "center",

                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        אפס
                      </Text>
                    </Button>
                  </>
                )}

                <Text style={{ color: "red", alignSelf: "center" }}>
                  {store.message}
                </Text>
              </View>
            </View>

            <ColorLine />
          </View>
        )}

        {/* {screen that shows when sending email failed} */}
        {showForgotPass === -2 && (
          <View style={logInStyles.container}>
            <View style={logInStyles.blanksquare}></View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
              ></View>
              {/* 00ADEF Deep Sky Blue*/}

              <View
                style={[
                  logInStyles.detailsSquare,
                  { height: "80%", padding: 20 },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",

                    marginBottom: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setshowForgotPass(-1)}
                    style={{
                      alignSelf: "center",
                      marginVertical: 8,
                      backgroundColor: "#00ADEF",
                      padding: 7,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} color={"white"} />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer",
                      marginLeft: 15,
                      textAlign: "center",
                    }}
                  >
                    {msg}
                  </Text>
                  <Button
                    rounded
                    style={{
                      backgroundColor: "#FBB03B",
                      borderColor: "white",
                      borderWidth: 2,
                      borderRadius: 17,
                      flex: 1,
                      marginVertical: 20,
                      marginHorizontal: 70,
                    }}
                    onPress={() => {
                      setshowForgotPass(1);
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        flex: 1,
                        fontSize: 30,
                        textAlign: "center",

                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      חזרה
                    </Text>
                  </Button>
                </View>
              </View>
            </View>

            <ColorLine />
          </View>
        )}

        {/* {first screen when click on forgot pass} */}

        {showForgotPass === 1 && (
          <View style={logInStyles.container}>
            <View style={logInStyles.blanksquare}></View>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
              ></View>
              {/* 00ADEF Deep Sky Blue*/}

              <View
                style={[
                  logInStyles.detailsSquare,
                  { height: "80%", padding: 20 },
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",

                    marginBottom: 15,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setshowForgotPass(-1)}
                    style={{
                      alignSelf: "center",
                      marginVertical: 8,
                      backgroundColor: "#00ADEF",
                      padding: 7,
                      borderRadius: 100,
                      marginRight: 10,
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} color={"white"} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 28,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer-bold",
                      marginLeft: 25,
                    }}
                  >
                    שכחת סיסמה ?
                  </Text>
                </View>
                {store.user === 2 ? (
                  <Spinner />
                ) : (
                  <>
                    <Label style={{ color: "white", fontFamily: "fb-Spacer" }}>
                      אימייל
                    </Label>

                    <TextInput
                      rounded
                      style={logInStyles.signInPageInput}
                      fontSize={12}
                      onChangeText={(text) => {
                        setemailValidation(!validateEmail(text));

                        setusername(text);
                      }}
                    />

                    <Button
                      disabled={emailValidation}
                      rounded
                      style={{
                        backgroundColor: emailValidation ? "#999" : "#FBB03B",
                        borderColor: "white",
                        borderWidth: 2,
                        borderRadius: 17,
                        flex: 1,
                        marginVertical: 20,
                        marginHorizontal: 70,
                      }}
                      onPress={async () => {
                        setshowForgotPass(2);
                        await Auth.forgotPassword(username)
                          .then((res) => setshowForgotPass(3))
                          .catch(async (err) => {
                            console.log(err.message);
                            await setMsg(err.message);
                            setshowForgotPass(-2);
                          });
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          flex: 1,
                          fontSize: 30,
                          textAlign: "center",

                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        שלח איפוס
                      </Text>
                    </Button>
                  </>
                )}

                {/* <Text style={{ color: "red", alignSelf: "center" }}>{msg}</Text> */}
              </View>
            </View>

            <ColorLine />
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default ForgotPasswordPage;
