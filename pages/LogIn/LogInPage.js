import React from "react";
import { useState } from "react";
import ForgotPasswordPage from "./ForgotPassword";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import logInStyles from "./LogInStyles";
import {
  Container,
  Item,
  Content,
  Header,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Radio,
  ListItem,
  CheckBox,
  Label,
  Spinner,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

import { LogIn } from "../../redux/actions/actions";
import { Touchable } from "react-native";
Amplify.configure(awsconfig);

const LogInPage = ({ navigation }) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showForgotPass, setshowForgotPass] = useState(-1);

  // -1 - home
  // 1 - send to email screen
  // 2 - transition when email sent
  // -2 - err while sending email
  //3 - put code from email screen
  //-3 when changing password with code failed
  //4 - confimation message/ successfuly reset password

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
    // if (showForgotPass === 2) {
    //   setTimeout(() => {
    //     setshowForgotPass(3);
    //   }, 3500);
    // }

    if (showForgotPass === 4) {
      setTimeout(() => {
        setshowForgotPass(-1);
      }, 2000);
    }
  }, [showForgotPass]);

  return (
    <>
      <NavBar navigation={navigation} screenName={"signIn"} />

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView style={{ flex: 1 }}>
        {showForgotPass === 4 && (
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
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 28,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    הסיסמה שלך אופסה בהצלחה
                  </Text>
                </View>
              </View>
            </View>

            <ColorLine />
          </View>
        )}

        {showForgotPass === 3 && (
          <ForgotPasswordPage
            setMsg={setMsg}
            msg={msg}
            showForgotPass={showForgotPass}
            username={username}
            setshowForgotPass={setshowForgotPass}
          />
        )}
        {showForgotPass === -2 && (
          <ForgotPasswordPage
            setMsg={setMsg}
            msg={msg}
            showForgotPass={showForgotPass}
            username={username}
            setshowForgotPass={setshowForgotPass}
          />
        )}

        {showForgotPass === 2 && (
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
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 28,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    ברגעים אלו נשלח אלייך קוד איפוס למייל
                  </Text>
                </View>

                <Spinner />
              </View>
            </View>

            <ColorLine />
          </View>
        )}

        {showForgotPass === 1 && (
          <ForgotPasswordPage
            setMsg={setMsg}
            msg={msg}
            username={username}
            showForgotPass={showForgotPass}
            setshowForgotPass={setshowForgotPass}
          />
        )}

        {showForgotPass === -1 && (
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
                    justifyContent: "space-between",
                    marginBottom: 15,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 28,
                      marginVertical: 10,
                      fontFamily: "fb-Spacer-bold",
                    }}
                  >
                    התחבר
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: "center",
                      marginVertical: 8,
                      backgroundColor: "#00ADEF",
                      padding: 5,
                      borderRadius: 6,
                    }}
                    onPress={() => setshowForgotPass(1)}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "fb-Spacer",
                        color: "white",
                      }}
                    >
                      שכחתי סיסמה
                    </Text>
                  </TouchableOpacity>
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
                      סיסמה
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
                        console.log(username, password);
                        await dispatch(LogIn(username, password));
                        if (store.user !== -1) {
                          navigation.navigate("Home");
                        } else {
                          console.log("~~~ : ", store.user);
                          // navigation.navigate("Sheva77Page");
                        }

                        dispatch({ key: "RESET_SIGNUP" });
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
                        התחבר
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
      </ScrollView>
    </>
  );
};

export default LogInPage;
